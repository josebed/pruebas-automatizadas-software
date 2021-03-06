 const { Given, When, Then } = require('@cucumber/cucumber');
 const assert = require("assert");

 When('I click on photo profile', async function(){
     let element = await this.driver.$('.pe-all > div:nth-child(1) > div:nth-child(1)');
     return await element.click();
 });

 When('I click on your profile', async function(){
     let element = await this.driver.$('/html/body/div[1]/div/ul/li[4]/a');
     return await element.click();
 });

 When('I click name', async function(){
     let element = await this.driver.$('#user-name');
     element.click();
     return await element.clearValue();
 });

 Then('I should see name {kraken-string}', async function(pageTitle){
     let element = await this.driver.$('.gh-list > li:nth-child(2) > a:nth-child(1) > h3:nth-child(1)').getText();
     assert.equal(element,pageTitle);
 });
