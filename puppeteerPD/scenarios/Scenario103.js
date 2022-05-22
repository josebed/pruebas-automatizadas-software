const puppeteer = require("puppeteer");
const PageObjects = require("../page_objects/PageObjects");
const { faker } = require("@faker-js/faker");

const SCENARIO = "./artifacts/scenario103";

module.exports = async () => {
  // Given a Browser with an account created
  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true,
    args: [`--window-size=1920,1080`],
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:2368/ghost");
  await new Promise((r) => setTimeout(r, 500));

  // When I Log In and change the title...
  await PageObjects.LogIn(page, SCENARIO);
  await page.goto("http://localhost:2368/ghost/#/settings/general");
  await new Promise((r) => setTimeout(r, 100));
  await page.evaluate(() => {
    return document.querySelectorAll(".gh-btn")[1].click()
  });
  await new Promise((r) => setTimeout(r, 200));
  const fieldID = await PageObjects.GetSiblingInputByP(page, "Used in your theme, meta data and search results");
  await PageObjects.ClearInputByID(page, fieldID);

  //...to something random...
  const fields = {
    [`#${fieldID}`]: faker.lorem.words(),
  };
  await PageObjects.TypeFormFields(page, fields, SCENARIO);

  //...and hit save
  await page.evaluate(() => {
    return document.querySelectorAll(".gh-btn")[0].click()
  });
  await new Promise((r) => setTimeout(r, 200));

  // I should get the new title
  await page.screenshot({ path: `${SCENARIO}/SettingsPage.jpg` });
  const isSaved = await page.evaluate(() => {
    return document.querySelectorAll(".gh-btn")[0].classList.contains('gh-btn-green');
  });
  await browser.close();

  return isSaved ? "Success" : "Failed" ;
};
