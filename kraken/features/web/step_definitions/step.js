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

Then('I click on create post', async function(){
    let element = await this.driver.$('#ember27');
    return await element.click();
});

Then('I click on write post title', async function(){
    let element = await this.driver.$('.gh-editor-title');
    return await element.click();
});
Then('I click on editor', async function(){
    let element = await this.driver.$('.koenig-editor__editor');
    return await element.click();
});
Then('I click on preview', async function(){
    let element = await this.driver.$('button.gh-btn');
    return await element.click();
});
Then('I click on back', async function(){
    let element = await this.driver.$('button.gh-editor-back-button');
    return await element.click();
});
Then('I should see post {kraken-string}', async function(postTitle){
    let element = await this.driver.$('.posts-list > li:nth-child(2) > a:nth-child(1) > h3:nth-child(1)').getText();
    assert.equal(element,postTitle);
    console.log(element);
});
Then('I click on posts', async function(){
    let element = await this.driver.$('a[href="#/posts/"]');
    return await element.click();
})