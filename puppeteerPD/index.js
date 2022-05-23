const puppeteer = require("puppeteer");
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
const Scenario46 = require("./scenarios/Scenario46");
const Scenario47 = require("./scenarios/Scenario47");
const Scenario48 = require("./scenarios/Scenario48");
const Scenario49 = require("./scenarios/Scenario49");
const Scenario50 = require("./scenarios/Scenario50");
const Scenario51 = require("./scenarios/Scenario51");
const Scenario52 = require("./scenarios/Scenario52");
const Scenario53 = require("./scenarios/Scenario53");
const Scenario54 = require("./scenarios/Scenario54");
// const Scenario55 = require("./scenarios/Scenario55");
// const Scenario56 = require("./scenarios/Scenario56");
// const Scenario57 = require("./scenarios/Scenario57");
// const Scenario58 = require("./scenarios/Scenario58");
// const Scenario59 = require("./scenarios/Scenario59");
// const Scenario60 = require("./scenarios/Scenario60");
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
const Scenario123 = require("./scenarios/Scenario123");
const Scenario124 = require("./scenarios/Scenario124");
const Scenario125 = require("./scenarios/Scenario125");
const Scenario126 = require("./scenarios/Scenario126");
const Scenario127 = require("./scenarios/Scenario127");
const Scenario128 = require("./scenarios/Scenario128");
const Scenario129 = require("./scenarios/Scenario129");
const Scenario130 = require("./scenarios/Scenario130");
const PageObjects = require("./page_objects/PageObjects");
// const PageObjects = require("../puppeteer/page_objects/PageObjects");
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
      headless: false,
      slowMo: 50,
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
  await Scenario46().then(r => {
    console.log("Scenario46 (Positivo): Login + invited contributer(valid data) result: " + r);
  });
  await Scenario47().then(r => {
    console.log("Scenario47 (Positivo): Login + invited author(valid data) result: " + r);
  });
  await Scenario48().then(r => {
    console.log("Scenario48 (Positivo): Login + invited editor(valid data) result: " + r);
  });
  await Scenario49().then(r => {
    console.log("Scenario49 (Positivo): Login + invited adiministrator(valid data) result: " + r);
  });
  await Scenario50().then(r => {
    console.log("Scenario50 (Positivo): Login + invited contributor (mail long = 190) result: " + r);
  });
  await Scenario51().then(r => {
    console.log("Scenario51 (Positivo): Login + invited contributor (mail long = 191) result: " + r);
  });
  await Scenario52().then(r => {
    console.log("Scenario52 (Positivo): Login + invited contributor (mail long = 192) result: " + r);
  });
  await Scenario53().then(r => {
    console.log("Scenario53 (Positivo): Login + invited contributor (invalid mail) result: " + r);
  });
  */
  await Scenario54().then(r => {
    console.log("Scenario54 (Positivo): Login + edit profile (valid data) result: " + r);
  });
  /*
   await Scenario55().then(r => {
    console.log("Scenario55 (Positivo): Login + edit profile (valid data) result: " + r);
  });
   await Scenario56().then(r => {
    console.log("Scenario56 (Positivo): Login + edit profile (valid data) result: " + r);
  });
   await Scenario57().then(r => {
    console.log("Scenario57 (Positivo): Login + edit profile (valid data) result: " + r);
  });
   await Scenario58().then(r => {
    console.log("Scenario58 (Positivo): Login + edit profile (valid data) result: " + r);
  });
   await Scenario59().then(r => {
    console.log("Scenario59 (Positivo): Login + edit profile (valid data) result: " + r);
  });
   await Scenario60().then(r => {
    console.log("Scenario60 (Positivo): Login + edit profile (valid data) result: " + r);
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
  await Scenario123().then(r => {
    console.log("Scenario123 (Negativo): Login + Settings + Nuevo Facebook Link(Datos con mal formato) result: " + r);
  });
  await Scenario124().then(r => {
    console.log("Scenario124 (Negativo): Login + Settings + Nuevo Facebook Link(Datos vacíos) result: " + r);
  });
  await Scenario125().then(r => {
    console.log("Scenario125 (Negativo): Login + Settings + Nuevo Facebook Link(Datos inválidos) result: " + r);
  });
  await Scenario126().then(r => {
    console.log("Scenario126 (Positivo): Login + Settings + Nuevo Facebook Link(Datos fijos) result: " + r);
  });
  await Scenario127().then(r => {
    console.log("Scenario127 (Negativo): Login + Settings + Nuevo Twitter Link(Datos con mal formato) result: " + r);
  });
  await Scenario128().then(r => {
    console.log("Scenario128 (Negativo): Login + Settings + Nuevo Twitter Link(Datos vacíos) result: " + r);
  });
  await Scenario129().then(r => {
    console.log("Scenario129 (Negativo): Login + Settings + Nuevo Twitter Link(Datos inválidos) result: " + r);
  });
  await Scenario130().then(r => {
    console.log("Scenario130 (Positivo): Login + Settings + Nuevo Twitter Link(Datos fijos) result: " + r);
  });
  */
})();
