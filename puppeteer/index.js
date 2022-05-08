const puppeteer = require("puppeteer");
const PageObjects = require("./page_objects/PageObjects");
const scenario1 = require("./scenarios/Scenario1");
const scenario2 = require("./scenarios/scenario2");
const scenario3 = require("./scenarios/scenario3");
const Scenario4 = require("./scenarios/Scenario4");
const Scenario5 = require("./scenarios/Scenario5");
const Scenario6 = require("./scenarios/Scenario6");
const Scenario7 = require("./scenarios/Scenario7");
const Scenario8 = require("./scenarios/Scenario8");
const Scenario9 = require("./scenarios/Scenario9");
const Scenario10 = require("./scenarios/Scenario10");
const Scenario11 = require("./scenarios/Scenario11");
const Scenario12 = require("./scenarios/Scenario12");

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
    console.log("Blog Creation Done!");
  }
  /*
  await scenario1();
  console.log("Scenario 1 Done!");
  await scenario2();
  console.log("Scenario 2 Done!");
  await scenario3();
  console.log("Scenario 3 Done!");
  await Scenario4();
  console.log("Scenario 4 Done!");
  await Scenario5();
  console.log("Scenario 5 Done!");
  await Scenario6();
  console.log("Scenario 6 Done!");
  await Scenario7();
  console.log("Scenario 7 Done!");
  await Scenario8();
  console.log("Scenario 8 Done!");
  await Scenario9();
  console.log("Scenario 9 Done!");
  await Scenario10();
  console.log("Escenario 10: Add navigation link - Done!");
  await Scenario11();
  console.log("Escenario 11: Edit navigation link - Done!");
  */
  await Scenario12();
  console.log("Escenario 12: Delete navigation link - Done!");
})();
