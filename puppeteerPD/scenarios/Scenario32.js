const { faker } = require('@faker-js/faker');
const puppeteer = require("puppeteer");
const PageObjects = require("../page_objects/PageObjects");
const dataPoolApriori = require("./../dataPool.json");

const SCENARIO = "./artifacts/scenario32";

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

  // When I Log In and create a new link navigation
  await PageObjects.LogIn(page, SCENARIO);
  const result =  await PageObjects.AddPrimaryNavigation(page, SCENARIO, dataPoolApriori.emptyText, faker.internet.url(), "negative")
  
  // Then, I should see the tag listed
  await page.goto("http://localhost:2368/ghost/#/settings/navigation");
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${SCENARIO}/NavigationList.jpg` });

  await browser.close();
  return result;
};
