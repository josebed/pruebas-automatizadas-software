const puppeteer = require("puppeteer");
const PageObjects = require("../page_objects/PageObjects");
const dataPool = require("./../dataPool");
const dataPoolApriori = require("./../dataPool.json");
const SCENARIO = "./artifacts/scenario47";

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

  // When I Log In and invited a editor staff
  await PageObjects.LogIn(page, SCENARIO);
  const result = await PageObjects.InviteStaff(page, SCENARIO, faker.internet.mail(), dataPoolApriori.staff.author);
  
  // Then I should see it in the list of invited users.
  await page.goto("http://localhost:2368/ghost/#/settings/staff");
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${SCENARIO}/StaffList.jpg` });

  await browser.close();
  return result;
};
