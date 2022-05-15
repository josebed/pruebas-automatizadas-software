const puppeteer = require("puppeteer");
const PageObjects = require("./page_objectsv3_42/PageObjects");
const Scenario1v3_42 = require("./scenarios/Scenario1v3_42");
const Scenario4v3_42 = require("./scenarios/Scenario4v3_42");
const Scenario7v3_42 = require("./scenarios/Scenario7v3_42");
const Scenario13v3_42 = require("./scenarios/Scenario13v3_42");
const Scenario20v3_42 = require("./scenarios/Scenario20v3_42");

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
  await Scenario1v3_42();
  console.log("Escenario 1 v3.42: Login + Create post - Done!");
  await Scenario4v3_42();
  console.log("Escenario 4 v3.42: Login + Create page - Done!");
  await Scenario7v3_42();
  console.log("Escenario 7 v3.42: Login + Crate tag - Done!");
  await Scenario13v3_42();
  console.log("Escenario 13 v3.42: Login + Invited staff - Done!");
  await Scenario20v3_42();
  console.log("Escenario 20 v3.42: Login + Edit profile - Done!");
})();
