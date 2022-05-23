const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');


When('I click on invite people', async function(){
    let element = await this.driver.$('button.gh-btn.gh-btn-primary');
    return await element.click();
});


Then('I click on sent invitation', async function(){
    let element = await this.driver.$(
        '/html/body/div[5]/div/div/div/div/div[2]/section/div/div[2]/button/span'
    );
    return await element.click();
});

When('I enter email new user {kraken-string}',async function(username){
    let element= await this.driver.$('//*[@id="new-user-email"]');
    return await element.setValue(username+'@fake.com');
});

When('I reload page',async function(){
    this.driver.refresh();
});


Then('I revoke invitation', async function(){
    let element = await this.driver.$(
        '/html/body/div[2]/div/main/section/section/section[1]/div/div/article/div[2]/div/a[1]'
    );
    return await element.click();
});


Then('I click on author', async function(){
    let element = await this.driver.$(
        '/html/body/div[5]/div/div/div/div/div[2]/section/div/div[1]/fieldset/div[2]/div[2]/div[1]'
    );
    return await element.click();
});

Then('I click on editor publish', async function(){
    let element = await this.driver.$(
        '/html/body/div[5]/div/div/div/div/div[2]/section/div/div[1]/fieldset/div[2]/div[3]/div[1]'
    );
    return await element.click();
});
