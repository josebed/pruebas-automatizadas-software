const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I enter username {kraken-string}',async function(username){
    let element= await this.driver.$('input[name="identification"]');
    return await element.setValue(username);
});

Given('I enter password {kraken-string}',async function(password){
    let element= await this.driver.$('input[name="password"]');
    return await element.setValue(password);
});

Given('I click on sign in', async function(){
    let element = await this.driver.$('.login');
    return await element.click();
});

When('I take one screenshot {kraken-string}', async function(path){
    this.driver.saveScreenshot(path);
});