const puppeteer = require("puppeteer");
const dataPool = require("../dataPool");
const PageObjects = require("../page_objects/PageObjects");

const SCENARIO = "./artifacts/scenario31";

module.exports = async () => {
  // Given a Browser with an account created
  const browser = await puppeteer.launch({
    headless: true,
  // slowMo: 100,
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

  // When I Log In and create a new link navigation
  await PageObjects.LogIn(page, SCENARIO);
  const result = await PageObjects.AddPrimaryNavigation(page, SCENARIO, dataPool.primaryNavigation.label, dataPool.primaryNavigation.URL);
  
  // Then, I should see the tag listed
  await page.goto("http://localhost:2368/ghost/#/settings/navigation");
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${SCENARIO}/NavigationList.jpg` });

  await browser.close();
  return result;
};

