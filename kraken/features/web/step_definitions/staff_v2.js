const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');


When('I click on ref staff', async function(){
    let element = await this.driver.$('/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[5]/a');
    return await element.click();
});


When('I click green on invite people', async function(){
    let element = await this.driver.$('/html/body/div[2]/div/main/section/header/section/button/span');
    return await element.click();
});


Then('I click on sent2 invitation', async function(){
    let element = await this.driver.$(
        '/html/body/div[4]/div[1]/div/div/div/div[2]/section/div[2]/button/span'
    );
    return await element.click();
});

When('I enter email2 new user {kraken-string}',async function(username){
    let element= await this.driver.$('//*[@id="new-user-email"]');
    return await element.setValue(username+'@fake.com');
});



