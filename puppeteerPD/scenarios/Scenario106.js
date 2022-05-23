const puppeteer = require("puppeteer");
const PageObjects = require("../page_objects/PageObjects");

const SCENARIO = "./artifacts/scenario106";

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

  // When I Log In and change the language...
  await PageObjects.LogIn(page, SCENARIO);
  await page.goto("http://localhost:2368/ghost/#/settings/general");
  await new Promise((r) => setTimeout(r, 200));
  await page.evaluate(() => {
    return document.querySelectorAll(".gh-btn")[3].click()
  });
  await new Promise((r) => setTimeout(r, 200));
  const fieldID = await PageObjects.GetSiblingInputByP(page, "Default: English (en");
  await PageObjects.ClearInputByID(page, fieldID);

  //...to something empty...
  const fields = {
    [`#${fieldID}`]: "",
  };
  await PageObjects.TypeFormFields(page, fields, SCENARIO);

  //...and hit save
  await page.evaluate(() => {
    return document.querySelectorAll(".gh-btn")[0].click()
  });
  await new Promise((r) => setTimeout(r, 200));
  await page.click(`#${fieldID}`);

  // I should get a warning for a required field
  await page.screenshot({ path: `${SCENARIO}/SettingsPage.jpg` });
  const isSaved = await page.evaluate(() => {
    return document.querySelectorAll(".gh-btn")[0].classList.contains('gh-btn-red');
  });
  await browser.close();

  return isSaved ? "Success" : "Failed" ;
};
