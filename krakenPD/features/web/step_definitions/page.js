const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I click on pages', async function(){
    let element = await this.driver.$('a[href="#/pages/"]');
    return await element.click();
});

When('I click on new page', async function(){
    let element = await this.driver.$('a[href="#/editor/page/"]');
    return await element.click();
});


Then('I should see page {kraken-string}', async function(pageTitle){
    let element = await this.driver.$('.gh-list > li:nth-child(2) > a:nth-child(1) > h3:nth-child(1)').getText();
    assert.equal(element,pageTitle);
});

Then('I should see page published', async function(){
    let element = await this.driver.$('.gh-editor-post-status > span:nth-child(1) > div:nth-child(1)').getText();
    assert.equal(element, "Published");
});

Then('I click on latest page', async function(){
    let element = await this.driver.$('.gh-list > li:nth-child(2) > a:nth-child(1) > h3:nth-child(1)');
    return await element.click();
});

Then('I should see page error', async function(){
    let element = await this.driver.$('/html/body/div[2]/aside/article/div').getText();
    assert.equal(element, "Saving failed: Title cannot be longer than 255 characters.");
});