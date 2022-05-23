const puppeteer = require("puppeteer");
const Scenario31 = require("./scenarios/Scenario31");
const Scenario32 = require("./scenarios/Scenario32");
const Scenario33 = require("./scenarios/Scenario33");
const Scenario101 = require("./scenarios/Scenario101");
const Scenario102 = require("./scenarios/Scenario102");
const Scenario103 = require("./scenarios/Scenario103");
const Scenario104 = require("./scenarios/Scenario104");
const Scenario105 = require("./scenarios/Scenario105");
const Scenario106 = require("./scenarios/Scenario106");
const Scenario107 = require("./scenarios/Scenario107");
const Scenario108 = require("./scenarios/Scenario108");
const Scenario109 = require("./scenarios/Scenario109");
const Scenario110 = require("./scenarios/Scenario110");
const Scenario111 = require("./scenarios/Scenario111");
const Scenario112 = require("./scenarios/Scenario112");
const Scenario113 = require("./scenarios/Scenario113");
const Scenario114 = require("./scenarios/Scenario114");
const Scenario115 = require("./scenarios/Scenario115");
const Scenario116 = require("./scenarios/Scenario116");
const Scenario117 = require("./scenarios/Scenario117");
const Scenario118 = require("./scenarios/Scenario118");
const Scenario119 = require("./scenarios/Scenario119");
const Scenario120 = require("./scenarios/Scenario120");
const Scenario121 = require("./scenarios/Scenario121");
const Scenario122 = require("./scenarios/Scenario122");
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
    console.log("Scenario101 (Positivo): Login + Settings + Nuevo título(Datos aleatorios) result: " + r);
  });
  await Scenario102().then(r => {
    console.log("Scenario102 (Positivo): Login + Settings + Nuevo título(Datos vacíos) result: " + r);
  });
  await Scenario103().then(r => {
    console.log("Scenario103 (Positivo): Login + Settings + Nueva Descripción(Datos aleatorios) result: " + r);
  });
  await Scenario104().then(r => {
    console.log("Scenario104 (Positivo): Login + Settings + Nueva Descripción(Datos vacíos) result: " + r);
  });
  await Scenario105().then(r => {
    console.log("Scenario105 (Positivo): Login + Settings + Nuevo Idioma(Datos aleatorios) result: " + r);
  });
  await Scenario106().then(r => {
    console.log("Scenario106 (Negativo): Login + Settings + Nuevo Idioma(Datos vacíos) result: " + r);
  });
  await Scenario107().then(r => {
    console.log("Scenario107 (Positivo): Login + Settings + Nuevo Meta Title(Datos aleatorios) result: " + r);
  });
  await Scenario108().then(r => {
    console.log("Scenario108 (Negativo): Login + Settings + Nuevo Meta Title(Datos vacíos) result: " + r);
  });
  await Scenario109().then(r => {
    console.log("Scenario109 (Positivo): Login + Settings + Nuevo Meta Description(Datos aleatorios) result: " + r);
  });
  await Scenario110().then(r => {
    console.log("Scenario110 (Negativo): Login + Settings + Nuevo Meta Description(Datos vacíos) result: " + r);
  });
  await Scenario111().then(r => {
    console.log("Scenario111 (Positivo): Login + Settings + Nuevo Twitter Title(Datos aleatorios) result: " + r);
  });
  await Scenario112().then(r => {
    console.log("Scenario112 (Negativo): Login + Settings + Nuevo Twitter Title(Datos vacíos) result: " + r);
  });
  await Scenario113().then(r => {
    console.log("Scenario113 (Negativo): Login + Settings + Nuevo Twitter Title(Datos demasiado largos) result: " + r);
  });
  await Scenario114().then(r => {
    console.log("Scenario114 (Positivo): Login + Settings + Nuevo Twitter Title(Datos aleatorios) result: " + r);
  });
  await Scenario115().then(r => {
    console.log("Scenario115 (Negativo): Login + Settings + Nuevo Twitter Description(Datos vacíos) result: " + r);
  });
  await Scenario116().then(r => {
    console.log("Scenario116 (Negativo): Login + Settings + Nuevo Twitter Description(Datos demasiado largos) result: " + r);
  });
  await Scenario117().then(r => {
    console.log("Scenario117 (Positivo): Login + Settings + Nuevo Facebook Title(Datos aleatorios) result: " + r);
  });
  await Scenario118().then(r => {
    console.log("Scenario118 (Negativo): Login + Settings + Nuevo Facebook Title(Datos vacíos) result: " + r);
  });
  await Scenario119().then(r => {
    console.log("Scenario119 (Negativo): Login + Settings + Nuevo Facebook Title(Datos demasiado largos) result: " + r);
  });
  await Scenario120().then(r => {
    console.log("Scenario120 (Positivo): Login + Settings + Nuevo Facebook Description(Datos aleatorios) result: " + r);
  });
  await Scenario121().then(r => {
    console.log("Scenario121 (Negativo): Login + Settings + Nuevo Facebook Description(Datos vacíos) result: " + r);
  });
  await Scenario122().then(r => {
    console.log("Scenario122 (Negativo): Login + Settings + Nuevo Facebook Description(Datos demasiado largos) result: " + r);
  });
})();
