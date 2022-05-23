const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');


When('I click on git name new url', async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/div/form/div[2]/div/span[1]/input');
    return await element.click();
});


When('I click on modify url git name', async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/div/form/div[2]/div/span[2]/input');
    return await element.click();
});

Then('I click on save navigation', async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/div/header/section/button/span');
    return await element.click();
});

Then('I click on trash icon', async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/div/form/div[1]/div[4]/div/button');
    return await element.click();
});

When('I click on name for modifity', async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/section/div[1]/div/form/div[1]/div[5]/div/div/span[1]/input');
    element.click();
    return await element.clearValue();
});


