const puppeteer = require("puppeteer");
const PageObjects = require("./page_objects/PageObjects");
const scenario1 = require("./scenarios/Scenario1");

(async () => {
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
  await new Promise((r) => setTimeout(r, 1000));
  await PageObjects.CreateBlog(page, "./artifacts/scenario1");

  await browser.close();

  scenario1();
  /*   scenario1();
  scenario1();
  scenario1();
  scenario1(); */
})();
