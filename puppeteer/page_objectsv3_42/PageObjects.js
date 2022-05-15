const properties = require("../properties.json");
const Constants = require("../page_objects/Constants");
const constants = require("../page_objects/Constants");

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
  LogIn: async (page, basePath) => {
    await page.screenshot({ path: `${basePath}/LoginPre.jpg` });
    await page.type(
      `input[name="${constants.Login.Inputs.Identification}"]`,
      properties.email
    );
    await page.type(
      `input[name="${constants.Login.Inputs.Password}"]`,
      properties.password
    );
    await page.screenshot({ path: `${basePath}/LoginPost.jpg` });
    await page.click("button[type=submit]");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/LoggedIn.jpg` });
  },
  CreateBlog: async (page, basePath) => {
    await page.screenshot({
      path: `${basePath}/CreateBlogPre.jpg`,
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
      path: `${basePath}/CreateBlogPost.jpg`,
    });

    await page.click("button[type=submit]");

    await new Promise((r) => setTimeout(r, 1000));

    await page.screenshot({
      path: `${basePath}/AdminScreenPre.jpg`,
    });
    await page.click(`a[href="${constants.Setup.Links.GhostAdmin}"]`);
    await page.screenshot({
      path: `${basePath}/AdminScreenPost.jpg`,
    });

    await new Promise((r) => setTimeout(r, 500));
  },
  //=======================================================================
  //Test Ghost v3.42
  //=======================================================================
  CreatePost: async (page, basePath, postTitle) => {
    await page.click('a[href="#/posts/"]');
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/PostsPre.jpg` });
    await page.click(`a[href="${constants.CreatePost.Links.NewPost}"]`);
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/PostsPost.jpg` });
    await page.type("textarea", postTitle);
    await page.screenshot({ path: `${basePath}/PublishPre.jpg` });
    await page.keyboard.press("Enter");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/PublishPost1.jpg` });
    await page.click(`div[tabindex="${constants.CreatePost.Divs.Publish}"]`);
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/PublishPost2.jpg` });
    await page.click('button.gh-btn.gh-publishmenu-button');
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/PublishPost3.jpg` });
    await page.click('button.gh-btn.gh-publishmenu-button');
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: `${basePath}/PublishPost4.jpg` });
  },
  CreatePage: async (page, basePath, pageTitle) => {
    await page.click(`a[href="${constants.CreatePage.Links.Pages}"]`);
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/PagePre.jpg` });
    await page.click(`a[href="${constants.CreatePage.Links.NewPage}"]`);
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/PagePost.jpg` });
    await page.type("textarea", pageTitle);
    await page.screenshot({ path: `${basePath}/PublishPre.jpg` });
    await page.keyboard.press("Enter");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/PublishPost1.jpg` });
    await page.click(`div[tabindex="${constants.CreatePage.Divs.Publish}"]`);
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/PublishPost2.jpg` });
    await page.click('button.gh-btn.gh-publishmenu-button');
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/PublishPost3.jpg` });
  },
  CreateTag: async (page, basePath, tagTitle) => {
    await page.click('a[href="#/tags/"]');
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/TagsPre.jpg` });
    await page.click(`a[href="${constants.CreateTags.Links.NewTag}"]`);
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/TagsPost.jpg` });
    await page.type(
      `input[id="${constants.CreateTags.Inputs.TagName}"]`,
      tagTitle
    );
    await page.screenshot({ path: `${basePath}/PublishPre.jpg` });
    await page.click('button.gh-btn.ember-view');
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/PublishPost.jpg` });
  },
  InviteEditorStaff: async (page, basePath) => {
    await page.click('[href="#/staff/"]');
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/1-Staff.jpg` });

    await page.click(".view-actions > button");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/2-StaffInvitePeople.jpg` });

    await page.type("#new-user-email", "puppeteer@gmail.com");
    const roleValue = await page.$eval('select#new-user-role > option:nth-child(2)', (option) => option.value);
    await page.select('select#new-user-role', roleValue);
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/3-StaffFillForm.jpg` });

    await page.click(".modal-footer > button");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/4-StaffInvited.jpg` });
  },
  EditProfile: async (page, basePath) => {
    await page.click(".gh-user-avatar");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/1-Profile.jpg` });

    await page.click('.dropdown-menu[role="menu"] > li:nth-child(4)');
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/2-ProfileMenu.jpg` });

    await page.type("#user-name", " Edited");
    await page.type("#user-location", "Un lugar del mundo");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/3-ProfileEditField.jpg` });

    await page.click(".view-actions > button");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/4-ProfileSave.jpg` });
  },
};
