const puppeteer = require("puppeteer");
const PageObjects = require("../page_objects/PageObjects");
const dataPool = require("./../dataPool");
const dataPoolApriori = require ("./../dataPool.json");
const { faker } = require('@faker-js/faker');

const SCENARIO = "./artifacts/scenario54";

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

  // When I Log In and edit the profile
  await PageObjects.LogIn(page, SCENARIO);
  const result = await PageObjects.EditProfile(page, SCENARIO, dataPool.profile.name, dataPool.profile.slug, undefined, dataPool.profile.location);
  
  // Then, I shouldn see the profile edited
  await page.click('.gh-user-avatar');
  await page.click('.dropdown-menu[role="menu"] > li:nth-child(4)');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${SCENARIO}/ProfileView.jpg` });

  await browser.close();
  return result;
};
