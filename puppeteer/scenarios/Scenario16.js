const puppeteer = require("puppeteer");
const PageObjects = require("../page_objects/PageObjects");
const Properties = require("../properties.json");

const SCENARIO = "./artifacts/scenario16";

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

  // When I Log In and add a member
  await PageObjects.LogIn(page, SCENARIO);
  await PageObjects.AddMember(page, SCENARIO);
  
  // Then, I should see the member listed
  await page.goto("http://localhost:2368/ghost/#/members");
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${SCENARIO}/MemberList.jpg` });

  await browser.close();
};
