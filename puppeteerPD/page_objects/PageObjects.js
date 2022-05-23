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
  AddPrimaryNavigation: async (page, basePath, label, URL) => {
    
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
    const errorLabel = await page.$(".gh-blognav-label.error > p.response");
    const errorUrl = await page.$(".gh-blognav-url.error > p.response");
    const resultErrorLabel =  await page.evaluate(el => el === null, errorLabel);  
    const resultErrorUrl = await page.evaluate(el => el === null, errorUrl);  
    return  await resultErrorLabel && resultErrorUrl ? "Saved": "Error"
  },  
  InviteStaff: async (page, basePath, mail, role) => {
    await page.click('[href="#/settings/"]');
    await new Promise((r) => setTimeout(r, 500));

    await page.click('[href="#/settings/staff/"]');
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/1-Staff.jpg` });

    await page.click(".view-actions > button");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/2-StaffInvitePeople.jpg` });

    if(mail !== undefined) {
      await page.type("#new-user-email", mail);
    }
    if(role !== undefined) {
      await page.click(`.gh-roles-container > .gh-radio:nth-child(${role})`);
    }    
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/3-StaffFillForm.jpg` });

    await page.click(".modal-footer > button");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/4-StaffInvited.jpg` });
    const errorMail = await page.$(".modal-body .error > p");
    const resultErrorMail = await page.evaluate(el => el === null, errorMail);  
    return  await resultErrorMail? "Saved": "Error"
  },
  AddMember: async (page, basePath, name, mail, notes) => {
    await page.click('[href="#/members/"]');
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/1-Member.jpg` });

    await page.click('[href="#/members/new/"]');
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/2-MemberNew.jpg` });

    if(name !== undefined) {
      await page.type("#member-name", name);
    }
    if(mail !== undefined) {
      await page.type("#member-email", mail);
    }
    if(notes !== undefined) {
      await page.type("#member-note", notes);
    }
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/3-MemberFillForm.jpg` });

    await page.click(".view-actions > button");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/4-MemberSave.jpg` });

    const errorName = await page.$(".gh-cp-member-email-name > div.max-width > p[hidden]");
    const errorMail = await page.$(".gh-cp-member-email-name > div.max-width.error > p");
    const errorNotes = await page.$(".gh-member-note.error > p");
    const resultErrorName =  await page.evaluate(el => el !== null, errorName);  
    const resultErrorMail = await page.evaluate(el => el === null, errorMail);
    const resultErrorNotes = await page.evaluate(el => el === null, errorNotes);
    return  await resultErrorName && resultErrorMail && resultErrorNotes ? "Saved": "Error"
  },
  EditProfile: async (page, basePath, name, slug, mail, location) => {
    await page.click(".gh-user-avatar");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/1-Profile.jpg` });

    await page.click('.dropdown-menu[role="menu"] > li:nth-child(4)');
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/2-ProfileMenu.jpg` });
    if(name !== undefined) {
      await page.evaluate(() =>document.querySelector("#user-name").value = '');
      await page.type("#user-name", name);
    }
    if(slug !== undefined) {
      await page.evaluate(() =>document.querySelector("#user-slug").value = '');
      await page.type("#user-slug", slug);
    }
    if(mail !== undefined) {
      await page.evaluate(() =>document.querySelector("#user-email").value = '');
      await page.type("#user-email", mail)
    }
    if(location !== undefined) {
      await page.evaluate(() =>document.querySelector("#user-location").value = '');
      await page.type("#user-location", location);
    }

    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/3-ProfileEditField.jpg` });

    await page.click(".view-actions > button");
    await new Promise((r) => setTimeout(r, 500));
    await page.screenshot({ path: `${basePath}/4-ProfileSave.jpg` });

    const errorName = await page.$(".gh-cp-member-email-name > div.max-width > p[hidden]");
    const errorSlug = await page.$(".gh-member-note.error > p");
    const errorMail = await page.$(".gh-cp-member-email-name > div.max-width.error > p");
    const errorLocation = await page.$(".gh-cp-member-email-name > div.max-width.error > p");
    const resultErrorName =  await page.evaluate(el => el !== null, errorName);  
    const resultErrorSlug = await page.evaluate(el => el === null, errorSlug);
    const resultErrorMail = await page.evaluate(el => el === null, errorMail);
    const resultLocation = await page.evaluate(el => el === null, errorLocation);
    return  await resultErrorName && resultErrorSlug && resultErrorMail && resultLocation ? "Saved": "Error"
  },
  TypeFormFields: async(page, fields, basePath) => {
    await page.screenshot({ path: `${basePath}/formPre.jpg` });
    for (const fieldName in fields) {
      const fieldValue = fields[fieldName];
      await page.type(fieldName, fieldValue);
    }
    await page.screenshot({ path: `${basePath}/formPost.jpg` });
  },
  GetSiblingInputByP: async(page, value, fieldType="INPUT") => {
    const ID = await page.evaluate((value, fieldType) => {
      const allP = Array.from(document.querySelectorAll("p"));
      const currentP = allP.find(
        (element) => element.textContent.includes(value)
      );
      const parentNode = currentP.parentNode;
      const siblings = Array.from(parentNode.childNodes);

      return siblings.find(
        (element) => element.tagName === fieldType
      ).id;
    }, value, fieldType);

    return ID;
  },
  ClearInputByID: async(page, ID) => {
    await page.evaluate((ID) => {
      document.getElementById(ID).value = "";
    }, ID);
  }
};
