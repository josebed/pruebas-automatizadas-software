const puppeteer = require("puppeteer");
const PageObjects = require("../page_objects/PageObjects");

const SCENARIO = "./artifacts/scenario123";

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

  // When I Log In and change the facebook link...
  await PageObjects.LogIn(page, SCENARIO);
  await page.goto("http://localhost:2368/ghost/#/settings/general");
  await new Promise((r) => setTimeout(r, 100));
  await page.evaluate(() => {
    return document.querySelectorAll(".gh-btn")[7].click()
  });
  await new Promise((r) => setTimeout(r, 200));
  const fieldID = await PageObjects.GetSiblingInputByP(page, "URL of your publication's Facebook Page");
  await PageObjects.ClearInputByID(page, fieldID);

  //...to something in a wrong format...
  const fields = {
    [`#${fieldID}`]: "Something in a wrong format",
  };
  await PageObjects.TypeFormFields(page, fields, SCENARIO);

  //...and hit save
  await page.evaluate(() => {
    return document.querySelectorAll(".gh-btn")[0].click()
  });
  await new Promise((r) => setTimeout(r, 200));

  // I should get a warning
  await page.screenshot({ path: `${SCENARIO}/SettingsPage.jpg` });
  const isHidden = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".response")).find(el => el.innerText=='The URL must be in a format like https://www.facebook.com/yourPage')?.innerText
  });
  await browser.close();

  return isHidden ? "Success" : "Failed" ;
};
