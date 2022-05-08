const puppeteer = require("puppeteer");
const PageObjects = require("../page_objects/PageObjects");
const Properties = require("../properties.json");

const SCENARIO = "./artifacts/scenario6";

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

  // When I Log In and create a new Page
  await PageObjects.LogIn(page, SCENARIO);
  await PageObjects.CreatePage(page, SCENARIO, Properties.PageTitle4);

  // Then, I should see the page listed
  await page.goto("http://localhost:2368/ghost/#/pages");
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${SCENARIO}/ListPages1.jpg` });

  //When I Delete such page
  await PageObjects.DeletePage(page, SCENARIO, Properties.PageTitle4);

  // Then, I shouldn't see the deleted page listed
  await page.goto("http://localhost:2368/ghost/#/pages");
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${SCENARIO}/ListPages2.jpg` });

  await browser.close();
};