const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I enter username {kraken-string}',async function(username){
    let element= await this.driver.$('#ember7');
    return await element.setValue(username);
});

When('I enter password {kraken-string}',async function(password){
    let element= await this.driver.$('#ember9');
    return await element.setValue(password);
});

When('I click on sign in', async function(){
    let element = await this.driver.$('#ember11');
    return await element.click();
});