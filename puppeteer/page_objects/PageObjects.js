const properties = require("../properties.json");
const Constants = require("./Constants");
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
  CreatePost: async (page, basePath, postTitle) => {
    await page.click(`a[id="${constants.CreatePost.Links.Posts}"]`);
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
    await page.click(
      `button[class="${Constants.CreatePost.Buttons.PublishMenu}"]`
    );
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/PublishPost3.jpg` });
    await page.click(`button[class="${Constants.CreatePost.Buttons.Publish}"]`);
    await new Promise((r) => setTimeout(r, 1000));
    await page.screenshot({ path: `${basePath}/PublishPost4.jpg` });
  },
  EditPost: async (page, basePath, postTitle, newTitle) => {
    const postID = await page.evaluate((postTitle) => {
      return Array.from(document.querySelectorAll("h3")).find(
        (element) => element.innerText === postTitle
      ).parentElement.id;
    }, postTitle);
    await page.click(`a[id="${postID}"]`);
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/EditPostPre.jpg` });
    await page.evaluate(() => {
      document.getElementsByTagName("textarea")[0].value = "";
    });
    await page.type("textarea", newTitle);

    const updateID = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("span")).find(
        (element) => element.innerText === "Update "
      ).parentElement.id;
    });

    await page.click(`div[id="${updateID}"]`);
    await new Promise((r) => setTimeout(r, 100));
    await page.click(`button[class="${Constants.EditPost.Buttons.Update}"]`);
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/EditPostPost.jpg` });
  },

  DeletePost: async (page, basePath, postTitle) => {
    const postID = await page.evaluate((postTitle) => {
      return Array.from(document.querySelectorAll("h3")).find(
        (element) => element.innerText === postTitle
      ).parentElement.id;
    }, postTitle);
    await page.click(`a[id="${postID}"]`);
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/EditPostPre.jpg` });
    await page.click(
      `button[title="${Constants.DeletePost.Buttons.Settings}"]`
    );
    await new Promise((r) => setTimeout(r, 100));
    await page.screenshot({ path: `${basePath}/SettingsMenu.jpg` });
    await page.click(
      `button[class="${Constants.DeletePost.Buttons.DeletePost}"]`
    );
    await new Promise((r) => setTimeout(r, 100));
    await page.screenshot({ path: `${basePath}/Confirmation.jpg` });
    await page.click(`button[class="${Constants.DeletePost.Buttons.Delete}"]`);
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
    await page.click(
      `button[class="${Constants.CreatePage.Buttons.PublishMenu}"]`
    );
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/PublishPost3.jpg` });
  },
  EditPage: async (page, basePath, pageTitle, newTitle) => {
    const pageID = await page.evaluate((pageTitle) => {
      return Array.from(document.querySelectorAll("h3")).find(
        (element) => element.innerText === pageTitle
      ).parentElement.id;
    }, pageTitle);
    await page.click(`a[id="${pageID}"]`);
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/EditPagePre.jpg` });
    await page.evaluate(() => {
      document.getElementsByTagName("textarea")[0].value = "";
    });
    await page.type("textarea", newTitle);

    const updateID = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("span")).find(
        (element) => element.innerText === "Update "
      ).parentElement.id;
    });

    await page.click(`div[id="${updateID}"]`);
    await new Promise((r) => setTimeout(r, 100));
    await page.click(`button[class="${Constants.EditPage.Buttons.Update}"]`);
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/EditPagePost.jpg` });
  },
  DeletePage: async (page, basePath, pageTitle) => {
    const pageID = await page.evaluate((pageTitle) => {
      return Array.from(document.querySelectorAll("h3")).find(
        (element) => element.innerText === pageTitle
      ).parentElement.id;
    }, pageTitle);
    await page.click(`a[id="${pageID}"]`);
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/EditPagePre.jpg` });
    await page.click(
      `button[title="${Constants.DeletePage.Buttons.Settings}"]`
    );
    await new Promise((r) => setTimeout(r, 100));
    await page.screenshot({ path: `${basePath}/SettingsMenu.jpg` });
    await page.click(
      `button[class="${Constants.DeletePage.Buttons.DeletePage}"]`
    );
    await new Promise((r) => setTimeout(r, 100));
    await page.screenshot({ path: `${basePath}/Confirmation.jpg` });
    await page.click(`button[class="${Constants.DeletePage.Buttons.Delete}"]`);
  },
  CreateTag: async (page, basePath, tagTitle) => {
    await page.click(`a[id="${constants.CreateTags.Links.Tags}"]`);
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
    await page.click(`button[class="${constants.CreateTags.Buttons.Save}"]`);
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/PublishPost.jpg` });
  },
  EditTag: async (page, basePath, tagTitle, newTitle) => {
    const tagID = await page.evaluate((tagTitle) => {
      return Array.from(document.querySelectorAll("h3")).find(
        (element) => element.innerText === tagTitle
      ).parentElement.id;
    }, tagTitle);
    await page.click(`a[id="${tagID}"]`);
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/EditTagPre.jpg` });
    await page.evaluate((constants) => {
      document.querySelector(
        `input[id="${constants.EditTag.Inputs.TagName}"]`
      ).value = "";
    }, constants);
    await page.type(
      `input[id="${constants.EditTag.Inputs.TagName}"]`,
      newTitle
    );
    await page.click(`button[class="${constants.EditTag.Buttons.Save}"]`);
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/EditPagePost.jpg` });
  },
  DeleteTag: async (page, basePath, tagTitle, newTitle) => {
    const tagID = await page.evaluate((tagTitle) => {
      return Array.from(document.querySelectorAll("h3")).find(
        (element) => element.innerText === tagTitle
      ).parentElement.id;
    }, tagTitle);
    await page.click(`a[id="${tagID}"]`);
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/DeleteTagPre.jpg` });
    await page.click(`button[class="${constants.DeleteTag.Buttons.Delete}"]`);
    await new Promise((r) => setTimeout(r, 100));
    await page.screenshot({ path: `${basePath}/DeleteTagPost.jpg` });
    await page.click(
      `button[class="${constants.DeleteTag.Buttons.ConfirmDelete}"]`
    );
    await new Promise((r) => setTimeout(r, 100));
    await page.screenshot({ path: `${basePath}/ConfirmDelete.jpg` });
  },
 AddPrimaryNavigation: async(page, basePath) => {
  await page.click('[href="#/settings/"]');
  await new Promise((r) => setTimeout(r, 500));

  await page.screenshot({ path: `${basePath}/1-Navigation.jpg` });
  await page.click('[href="#/settings/navigation/"]');
  await new Promise((r) => setTimeout(r, 500));

  await page.type('#settings-navigation > .gh-blognav-item .ember-text-field', 'newLink');
  await page.type('#settings-navigation > .gh-blognav-item .gh-blognav-url > .ember-text-field', 'newLink');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/2-NavigationTypeInput.jpg` });

  await page.click('.view-actions > button');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/3-NavigationAdd.jpg` });
 },
 EditPrimaryNavigation: async(page, basePath) => {
  await page.click('[href="#/settings/"]');
  await new Promise((r) => setTimeout(r, 500));

  await page.screenshot({ path: `${basePath}/1-Navigation.jpg` });
  await page.click('[href="#/settings/navigation/"]');
  await new Promise((r) => setTimeout(r, 500));

  await page.type('#settings-navigation > .sortable-objects > .js-draggableObject.draggable-object:last-child .ember-text-field', 'Edit');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/2-NavigationEditInput.jpg` });
  
  await page.click('.view-actions > button');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/3-NavigationEdit.jpg` });
 },
 DeletePrimaryNavigation: async(page, basePath) => {
  await page.click('[href="#/settings/"]');
  await new Promise((r) => setTimeout(r, 500));

  await page.screenshot({ path: `${basePath}/1-Navigation.jpg` });
  await page.click('[href="#/settings/navigation/"]');
  await new Promise((r) => setTimeout(r, 500));

  await page.click('#settings-navigation > .sortable-objects > .js-draggableObject.draggable-object:last-child > .gh-blognav-item > button');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/2-NavigationDeleteElement.jpg` });
  
  await page.click('.view-actions > button');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/3-NavigationDelete.jpg` });
 },
 InviteEditorStaff: async(page, basePath) => {
  await page.click('[href="#/settings/"]');
  await new Promise((r) => setTimeout(r, 500));

  await page.click('[href="#/settings/staff/"]');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/1-Staff.jpg` });

  await page.click('.view-actions > button');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/2-StaffInvitePeople.jpg` });

  await page.type('#new-user-email', 'puppeteer@gmail.com');
  await page.click('.gh-roles-container > .gh-radio:nth-child(3)');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/3-StaffFillForm.jpg` });

  await page.click('.modal-footer > button');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/4-StaffInvited.jpg` });
 },
 InviteEditorStaffAgain: async(page, basePath) => {
  await page.click('[href="#/settings/"]');
  await new Promise((r) => setTimeout(r, 500));

  await page.click('[href="#/settings/staff/"]');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/1-Staff.jpg` });

  await page.click('.view-actions > button');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/2-StaffInvitePeople.jpg` });

  await page.type('#new-user-email', 'puppeteer@gmail.com');
  await page.click('.gh-roles-container > .gh-radio:nth-child(3)');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/3-StaffFillForm.jpg` });

  await page.click('.modal-footer > button');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/4-StaffInvitedError.jpg` });
 },
 RevokeInviteStaff: async(page, basePath) => {
  await page.click('[href="#/settings/"]');
  await new Promise((r) => setTimeout(r, 500));

  await page.click('[href="#/settings/staff/"]');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/1-Staff.jpg` });

  await page.click('a[href="#revoke"]');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/0-StaffRevokeInvitation.jpg` });
 },
 AddMember: async(page, basePath) => {
  await page.click('[href="#/members/"]');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/1-Member.jpg` });

  await page.click('[href="#/members/new/"]');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/2-MemberNew.jpg` });
  
  await page.type('#member-name', 'puppeteer');
  await page.type('#member-email', 'puppeteer@gmail.com');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/3-MemberFillForm.jpg` });

  await page.click('.view-actions > button');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/4-MemberSave.jpg` });
 },
 EditMember: async(page, basePath) => {
  await page.click('[href="#/members/"]');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/1-Member.jpg` });

  await page.click('tbody > tr');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/2-MemberEdit.jpg` });
  
  await page.type('#member-name', 'Edited');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/3-MemberEditForm.jpg` });

  await page.click('.view-actions > button');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/4-MemberSave.jpg` });
 },
 DeleteMember: async(page, basePath) => {
  await page.click('[href="#/members/"]');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/1-Member.jpg` });

  await page.click('tbody > tr');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/2-MemberSelected.jpg` });
  
  await page.click('.view-actions > .dropdown > button');
  await page.click('.view-actions > .dropdown > .dropdown > li:last-child');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/3-MemberDelete.jpg` });

  await page.click('.modal-footer > button:last-child');
  await page.click('.view-actions > button');
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${basePath}/4-MemberSaveChange.jpg` });
 },

};
