const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I click on create post', async function(){
    let element = await this.driver.$('#ember27');
    return await element.click();
});

When('I click on write title', async function(){
    let element = await this.driver.$('textarea.gh-editor-title');
    return await element.click();
});
When('I click on editor', async function(){
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
});
Then('I click on posts', async function(){
    let element = await this.driver.$('a[href="#/posts/"]');
    return await element.click();
});