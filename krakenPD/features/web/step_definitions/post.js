const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I click on create post', async function(){
    let element = await this.driver.$('a[href="#/editor/post/"]');
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

Then('I click on publish', async function(){
    let element = await this.driver.$('div.ember-basic-dropdown-trigger');
    return await element.click();
});

Then('I click on set it live now', async function(){
    let element = await this.driver.$('.gh-publishmenu-radio-button');
    return await element.click();
});

Then('I click on publish button', async function(){
    let element = await this.driver.$('.gh-publishmenu-button');
    return await element.click();
});

Then('I click on confirm publish', async function(){
    let element = await this.driver.$('.gh-btn-black ');
    return await element.click();
});

Then('I should see post published', async function(){
    let element = await this.driver.$('.gh-editor-post-status > span:nth-child(1) > div:nth-child(1)').getText();
    assert.equal(element, "Published");
});

When('I click on settings', async function(){
    let element = await this.driver.$('button[title="Settings"]');
    return await element.click();
});

When('I click on delete', async function(){
    let element = await this.driver.$('.settings-menu-delete-button');
    return await element.click();
});
Then('I click on confirm delete', async function(){
    let element = await this.driver.$('.gh-btn-red');
    return await element.click();
});

Then('I click on latest post', async function(){
    let element = await this.driver.$('.posts-list > li:nth-child(2) > a:nth-child(1) > h3:nth-child(1)');
    return element.click();
});

Then('I click on custom-excerp', async function(){
    let element = await this.driver.$('#custom-excerpt');
    return element.click();
});

Then('I click on feature post', async function(){
    let element = await this.driver.$('label[for="featured"]');
    return element.click();
});

Then('I should see status published', async function(){
    let element = await this.driver.$('span.fw4 > div:nth-child(1)').getText();
    assert.equal(element, "Published");
});