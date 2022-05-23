const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');


When('I click on icon members', async function(){
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/div/section/div[1]/ul[2]/li[4]/a');
    return await element.click();
});


When('I click on new member', async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/header/section/div[2]/a/span');
    return await element.click();
});

When('I click on git name new member', async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[1]/input');
    return await element.click();
});

When('I click on git email new member {kraken-string}',async function(username){
    let element= await this.driver.$('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[1]/div[2]/input');
    return await element.setValue(username+'@fake.com');
});

Then('I click on save new member', async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/header/section/button/span');
    return await element.click();
});


Then('I click on new member created', async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/table/tbody/tr/a[1]');
    return await element.click();
});

Then('I click on settings member', async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/header/section/span/button/span');
    return await element.click();
});

Then('I click on delete member', async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div[1]/header/section/span/ul/li[2]/button/span');
    return await element.click();
});

Then('I click on confirm delete member', async function(){
    let element = await this.driver.$('/html/body/div[5]/div/div/div/div/div[2]/section/div[2]/button[2]/span');
    return await element.click();
});


When('I click on note new member {kraken-string}',async function(note){
    let element= await this.driver.$('/html/body/div[2]/div/main/section/div[2]/form/div/section/div/div[1]/div/div[3]/textarea');
    return await element.setValue(note);
});