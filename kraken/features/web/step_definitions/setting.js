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


