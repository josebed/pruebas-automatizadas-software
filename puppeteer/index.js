const puppeteer = require("puppeteer");
const PageObjects = require("./page_objects/PageObjects");
const scenario1 = require("./scenarios/Scenario1");
const scenario2 = require("./scenarios/scenario2");
const scenario3 = require("./scenarios/scenario3");
const Scenario4 = require("./scenarios/Scenario4");

(async () => {
  const isClean = process.argv.slice(2);
  if (isClean == "--clean") {
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
  }

  await scenario1();
  console.log("Scenario 1 Done!");
  await scenario2();
  console.log("Scenario 2 Done!");
  await scenario3();
  console.log("Scenario 3 Done!");
  await Scenario4();
  console.log("Scenario 4 Done!");
})();
