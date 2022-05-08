const puppeteer = require("puppeteer");
const PageObjects = require("../page_objects/PageObjects");
const Properties = require("../properties.json");

const SCENARIO = "./artifacts/scenario7";

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

  // When I Log In and create a new Tag
  await PageObjects.LogIn(page, SCENARIO);
  await PageObjects.CreateTag(page, SCENARIO, Properties.TagTitle1);
  await page.goto("http://localhost:2368/ghost/#/tags");
  await new Promise((r) => setTimeout(r, 500));

  // Then, I should see the tag listed
  await page.screenshot({ path: `${SCENARIO}/ListTags.jpg` });

  await browser.close();
};
