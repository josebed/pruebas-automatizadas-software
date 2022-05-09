const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');


When('I click on icon settings', async function(){
    let element = await this.driver.$('a[href="#/settings/"]');
    return await element.click();
});


When('I click on navigations', async function(){
    let element = await this.driver.$('a[href="#/settings/navigation/"]');
    return await element.click();
});

When('I click on staff', async function(){
    let element = await this.driver.$('a[href="#/settings/staff/"]');
    return await element.click();
});


When('I click on invite people', async function(){
    let element = await this.driver.$('button.gh-btn.gh-btn-primary');
    return await element.click();
});


When('I click on sent invitation', async function(){
    let element = await this.driver.$('button.gh-btn.gh-btn-black.gh-btn-icon.ember-view > span.nth-child(1)');
    return await element.click();
});

