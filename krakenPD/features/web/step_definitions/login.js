const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');


Then('I validate login successful', async function(){
    let element = await this.driver.getUrl();
    assert.match(element,/dashboard/);
})

Then('I validate fill the form message', async function(){
    
    let element = await this.driver.$('.main-error').getText();
    assert.match(element,/Please fill out the form to sign in./);
})

Then('I validate username does not exist', async function(){
    
    let element = await this.driver.$('.main-error').getText();
    assert.match(element, /There is no user with that email address./);
})

Then('I validate wrong password', async function(){
    
    let element = await this.driver.$('.main-error').getText();
    assert.match(element, /Your password is incorrect./);
})