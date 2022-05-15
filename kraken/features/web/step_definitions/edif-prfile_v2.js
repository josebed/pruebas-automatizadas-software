 const { Given, When, Then } = require('@cucumber/cucumber');
 const assert = require("assert");

 When('I click on photo profile2', async function(){
     let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[2]/div[1]/div/div[1]');
     return await element.click();
 });

 When('I click on your profile2', async function(){
     let element = await this.driver.$('/html/body/div[1]/div/ul/li[4]/a');
     return await element.click();
 });

 When('I click name2', async function(){
     let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div/form[1]/div/fieldset/div[1]/input');
     element.click();
     return await element.clearValue();
 });


