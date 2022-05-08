const properties = require("../properties.json");
const constants = require("./Constants");

function findSingleelementByTagName(tag) {
  return document.getElementsByTagName(tag)[0];
}

module.exports = {
  IsLoggedIn: async (page) => {
    const h1 = await page.evaluate(() => {
      return document.getElementsByTagName("h1")[0].innerHTML;
    });

    return h1 !== "Sign in to Testing.";
  },
  LogIn: async (page, scenario) => {
    await page.screenshot({ path: `../artifacts/${scenario}/LoginPre.jpg` });
    await page.type(
      `input[name="${constants.Login.Inputs.Identification}"]`,
      properties.email
    );
    await page.type(
      `input[name="${constants.Login.Inputs.Password}"]`,
      properties.password
    );
    await page.screenshot({ path: `../artifacts/${scenario}/LoginPost.jpg` });
    await page.click("button[type=submit]");
  },
  CreateBlog: async (page) => {
    await page.screenshot({
      path: `../artifacts/${scenario}/CreateBlogPre.jpg`,
    });
    await page.type(
      `input[name="${constants.Setup.Inputs.title}"]`,
      properties.title
    );
    await page.type(
      `input[name="${constants.Setup.Inputs.name}"]`,
      properties.name
    );
    await page.type(
      `input[name="${constants.Setup.Inputs.email}"]`,
      properties.email
    );
    await page.type(
      `input[name="${constants.Setup.Inputs.password}"]`,
      properties.password
    );

    await page.screenshot({
      path: `../artifacts/${scenario}/CreateBlogPost.jpg`,
    });

    await page.click("button[type=submit]");

    await new Promise((r) => setTimeout(r, 1000));

    await page.screenshot({
      path: `../artifacts/${scenario}/AdminScreenPre.jpg`,
    });
    await page.click(`a[id="${constants.Setup.Links.GhostAdmin}"]`);
    await page.screenshot({
      path: `../artifacts/${scenario}/AdminScreenPost.jpg`,
    });

    await new Promise((r) => setTimeout(r, 1000));
  },
};
