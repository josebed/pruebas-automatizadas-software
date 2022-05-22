const dataPoolApriori = require("./../dataPool.json");
const dataPool = require("./../dataPool");
const constants = require("./Constants");

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
      dataPoolApriori.login.successful.email
    );
    await page.type(
      `input[name="${constants.Login.Inputs.Password}"]`,
      dataPoolApriori.login.successful.password
    );
    await page.screenshot({ path: `${basePath}/LoginPost.jpg` });
    await page.click("button[type=submit]");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/LoggedIn.jpg` });
  },
  /*====================================*/
  /*-----> Escenarios modificados <-----*/
  /*====================================*/
  AddPrimaryNavigation: async (page, basePath, label, URL, typeScenario) => {
    
    await page.click('[href="#/settings/"]');
    await new Promise((r) => setTimeout(r, 500));

    await page.screenshot({ path: `${basePath}/1-Navigation.jpg` });
    await page.click('[href="#/settings/navigation/"]');
    await new Promise((r) => setTimeout(r, 500));
    await page.type("#settings-navigation > .gh-blognav-item .ember-text-field", label);
    await page.evaluate(() =>document.querySelector("#settings-navigation > .gh-blognav-item .gh-blognav-url > .ember-text-field").value = '');
    await page.type("#settings-navigation > .gh-blognav-item .gh-blognav-url > .ember-text-field", URL);
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/2-NavigationTypeInput.jpg` });

    await page.click(".view-actions > button");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/3-NavigationAdd.jpg` });
    const errorMessage = await page.$(".gh-blognav-label.error > p.response");
     return await page.evaluate(el => el!== null ?"Error" : "Saved", errorMessage);  
  },
  EditPrimaryNavigation: async (page, basePath, typeScenario) => {
    await page.click('[href="#/settings/"]');
    await new Promise((r) => setTimeout(r, 500));

    await page.screenshot({ path: `${basePath}/1-Navigation.jpg` });
    await page.click('[href="#/settings/navigation/"]');
    await new Promise((r) => setTimeout(r, 500));

    await page.type(
      "#settings-navigation > .sortable-objects > .js-draggableObject.draggable-object:last-child .ember-text-field",
      "Edit"
    );
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/2-NavigationEditInput.jpg` });

    await page.click(".view-actions > button");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/3-NavigationEdit.jpg` });

    if(typeScenario === "positive") {
      return await page.evaluate(el => el === null, errorMessage);  
    }else if(typeScenario === "negative")
      return await page.evaluate(el => el !== null, errorMessage);
  },
  DeletePrimaryNavigation: async (page, basePath) => {
    await page.click('[href="#/settings/"]');
    await new Promise((r) => setTimeout(r, 500));

    await page.screenshot({ path: `${basePath}/1-Navigation.jpg` });
    await page.click('[href="#/settings/navigation/"]');
    await new Promise((r) => setTimeout(r, 500));

    await page.click(
      "#settings-navigation > .sortable-objects > .js-draggableObject.draggable-object:last-child > .gh-blognav-item > button"
    );
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({
      path: `${basePath}/2-NavigationDeleteElement.jpg`,
    });

    await page.click(".view-actions > button");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/3-NavigationDelete.jpg` });
  },
  InviteEditorStaff: async (page, basePath) => {
    await page.click('[href="#/settings/"]');
    await new Promise((r) => setTimeout(r, 500));

    await page.click('[href="#/settings/staff/"]');
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/1-Staff.jpg` });

    await page.click(".view-actions > button");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/2-StaffInvitePeople.jpg` });

    await page.type("#new-user-email", "puppeteer@gmail.com");
    await page.click(".gh-roles-container > .gh-radio:nth-child(3)");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/3-StaffFillForm.jpg` });

    await page.click(".modal-footer > button");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/4-StaffInvited.jpg` });
  },
  InviteEditorStaffAgain: async (page, basePath) => {
    await page.click('[href="#/settings/"]');
    await new Promise((r) => setTimeout(r, 500));

    await page.click('[href="#/settings/staff/"]');
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/1-Staff.jpg` });

    await page.click(".view-actions > button");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/2-StaffInvitePeople.jpg` });

    await page.type("#new-user-email", "puppeteer@gmail.com");
    await page.click(".gh-roles-container > .gh-radio:nth-child(3)");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/3-StaffFillForm.jpg` });

    await page.click(".modal-footer > button");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/4-StaffInvitedError.jpg` });
  },
  RevokeInviteStaff: async (page, basePath) => {
    await page.click('[href="#/settings/"]');
    await new Promise((r) => setTimeout(r, 500));

    await page.click('[href="#/settings/staff/"]');
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/1-Staff.jpg` });

    await page.click('a[href="#revoke"]');
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/0-StaffRevokeInvitation.jpg` });
  },
  AddMember: async (page, basePath) => {
    await page.click('[href="#/members/"]');
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/1-Member.jpg` });

    await page.click('[href="#/members/new/"]');
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/2-MemberNew.jpg` });

    await page.type("#member-name", "puppeteer");
    await page.type("#member-email", "puppeteer@gmail.com");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/3-MemberFillForm.jpg` });

    await page.click(".view-actions > button");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/4-MemberSave.jpg` });
  },
  EditMember: async (page, basePath) => {
    await page.click('[href="#/members/"]');
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/1-Member.jpg` });

    await page.click("tbody > tr");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/2-MemberEdit.jpg` });

    await page.type("#member-name", "Edited");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/3-MemberEditForm.jpg` });

    await page.click(".view-actions > button");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/4-MemberSave.jpg` });
  },
  DeleteMember: async (page, basePath) => {
    await page.click('[href="#/members/"]');
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/1-Member.jpg` });

    await page.click("tbody > tr");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/2-MemberSelected.jpg` });

    await page.click(".view-actions > .dropdown > button");
    await page.click(".view-actions > .dropdown > .dropdown > li:last-child");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/3-MemberDelete.jpg` });

    await page.click(".modal-footer > button:last-child");
    await page.click(".view-actions > button");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/4-MemberSaveChange.jpg` });
  },
  ActivateDarkMode: async (page, basePath) => {
    await page.screenshot({ path: `${basePath}/1-DarkMode.jpg` });
    await page.click(".nightshift-toggle");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/2-DarkModeActived.jpg` });
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
  TypeFormFields: async(page, fields, basePath) => {
    await page.screenshot({ path: `${basePath}/formPre.jpg` });
    for (const fieldName in fields) {
      const fieldValue = fields[fieldName];
      await page.type(fieldName, fieldValue);
    }
    await page.screenshot({ path: `${basePath}/formPost.jpg` });
  },
  GetSiblingInputByP: async(page, value) => {
    const ID = await page.evaluate((value) => {
      return Array.from(Array.from(document.querySelectorAll("p")).find(
        (element) => element.innerHTML === value
      ).parentNode.childNodes).find(
        (element) => element.tagName === "INPUT"
      ).id;
    }, value);

    return ID;
  },
  ClearInputByID: async(page, ID) => {
    await page.evaluate((ID) => {
      document.getElementById(ID).value = "";
    }, ID);
  }
};
