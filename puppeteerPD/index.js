const puppeteer = require("puppeteer");
const Scenario31 = require("./scenarios/Scenario31");
const Scenario32 = require("./scenarios/Scenario32");
const Scenario101 = require("./scenarios/Scenario101");
const Scenario33 = require("./scenarios/Scenario33");
const PageObjects = require("../puppeteer/page_objects/PageObjects");
const ScenarioMapper = require("./scenarios/ScenarioMapper");


(async () => {
  const flag = process.argv.slice(2);
  if (Object.keys(ScenarioMapper).includes(flag[0])) {
    console.log("Flag for individual scenario found", flag[0]);
    const response = await ScenarioMapper[flag[0]]();
    console.log(`Scenario${flag[0]} result: ${response}`);
    return
  }
  if (flag == "--clean") {
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
  await Scenario31().then(r => {
    console.log("Scenario31 (Positivo): Login + addNavigation(Datos validos) result: " + r);
  });
  await Scenario32().then(r => {
    console.log("Scenario32 (Negativo): Login + addNavigation(Label vacio) result: " + r);
  });
  await Scenario33().then(r => {
    console.log("Scenario32 (Negativo): Login + addNavigation(url sin protocolo) result: " + r);
  });
  await Scenario101().then(r => {
    console.log("Scenario101 (Positivo): Login + Settings + Nuevo título(Datos aleatorios) reuslt: " + r);
  });
})();
