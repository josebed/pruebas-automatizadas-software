const puppeteer = require("puppeteer");
const PageObjects = require("./page_objects/PageObjects");
const Scenario31 = require("./scenarios/Scenario31");
const Scenario32 = require("./scenarios/Scenario32");


(async () => {
  const isClean = process.argv.slice(2);
  if (isClean == "--clean") {
    const browser = await puppeteer.launch({
      headless: false,
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
  await Scenario31().then(r => {
    console.log("Scenario31 (Positivo): Login + addNavigation(Datos validos) result: " + r);
  });
  await Scenario32().then(r => {
    console.log("Scenario32 (Negativo): Login + addNavigation(Label vacio) reuslt: " + r);
  });
})();
