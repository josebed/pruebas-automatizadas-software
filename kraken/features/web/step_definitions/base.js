const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('I enter username {kraken-string}',async function(username){
    let element= await this.driver.$('#ember7');
    return await element.setValue(username);
});

Given('I enter password {kraken-string}',async function(password){
    let element= await this.driver.$('#ember9');
    return await element.setValue(password);
});

Given('I click on sign in', async function(){
    let element = await this.driver.$('#ember11');
    return await element.click();
});