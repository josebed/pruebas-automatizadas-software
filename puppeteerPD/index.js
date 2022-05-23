const puppeteer = require("puppeteer");
const PageObjects = require("./page_objects/PageObjects");
const Scenario31 = require("./scenarios/Scenario31");
const Scenario32 = require("./scenarios/Scenario32");
const Scenario33 = require("./scenarios/Scenario33");
const Scenario34 = require("./scenarios/Scenario34");
const Scenario35 = require("./scenarios/Scenario35");
const Scenario36 = require("./scenarios/Scenario36");
const Scenario37 = require("./scenarios/Scenario37");
const Scenario38 = require("./scenarios/Scenario38");
const Scenario39 = require("./scenarios/Scenario39");
const Scenario40 = require("./scenarios/Scenario40");
const Scenario41 = require("./scenarios/Scenario41");
const Scenario42 = require("./scenarios/Scenario42");
const Scenario43 = require("./scenarios/Scenario43");
const Scenario44 = require("./scenarios/Scenario44");
const Scenario45 = require("./scenarios/Scenario45");
const ScenarioMapper = require("./scenarios/ScenarioMapper");

(async () => {
  const flag = process.argv.slice(2);
  if (Object.keys(ScenarioMapper).includes(flag[0])) {
    console.log("Flag for individual scenario found", flag[0]);
    await ScenarioMapper[flag[0]]();
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
    console.log("Scenario31 (Positivo): Login + addNavigation(valid data) result: " + r);
  });
  await Scenario32().then(r => {
    console.log("Scenario32 (Negativo): Login + addNavigation(invalid label) result: " + r);
  });
  await Scenario33().then(r => {
    console.log("Scenario33 (Negativo): Login + addNavigation(invalid url) result: " + r);
  });
  await Scenario34().then(r => {
    console.log("Scenario34 (Positivo): Login + add member(valid data) result: " + r);
  });
  await Scenario35().then(r => {
    console.log("Scenario35 (Positivo): Login + add member(Just mail) result: " + r);
  });
  await Scenario36().then(r => {
    console.log("Scenario36 (Positivo): Login + add member(name long = 190) result: " + r);
  });
  await Scenario37().then(r => {
    console.log("Scenario37 (Positivo): Login + add member(name long = 191) result: " + r);
  });
  await Scenario38().then(r => {
    console.log("Scenario38 (Negativo): Login + add member(name long = 192) result: " + r);
  });
  await Scenario39().then(r => {
    console.log("Scenario39 (Positivo): Login + add member(mail long = 190) result: " + r);
  });
  await Scenario40().then(r => {
    console.log("Scenario40 (Positivo): Login + add member(mail long = 191) result: " + r);
  });
  await Scenario41().then(r => {
    console.log("Scenario41 (Negativo): Login + add member(mail long = 192) result: " + r);
  });
  await Scenario42().then(r => {
    console.log("Scenario42 (Negativo): Login + add member(invalid domain mail) result: " + r);
  });
  await Scenario43().then(r => {
    console.log("Scenario43 (Positivo): Login + add member(note long = 499) result: " + r);
  });
  await Scenario44().then(r => {
    console.log("Scenario44 (Positivo): Login + add member(note long = 500) result: " + r);
  });
  await Scenario45().then(r => {
    console.log("Scenario45 (Negativo): Login + add member(note long = 501) result: " + r);
  });
})();
