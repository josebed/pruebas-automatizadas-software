const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

When('I click on tags', async function(){
    let element = await this.driver.$('a[href="#/tags/"]');
    return await element.click();
});

When('I click on new tag', async function(){
    let element = await this.driver.$('a[href="#/tags/new/"] > span:nth-child(1)');
    return await element.click();
});

When('I click on tag name', async function(){
    let element = await this.driver.$('#tag-name');
    return await element.click();
});

When('I click on tag description', async function(){
    let element = await this.driver.$('#tag-description');
    return await element.click();
});

When('I click on save', async function(){
    let element = await this.driver.$('button.gh-btn');
    return await element.click();
});

Then('I should see tag {kraken-string}', async function(tagName){
    let selector = 'a[href="#/tags/' + tagName.toLowerCase() + '/"] > h3:nth-child(1)';
    let element = await this.driver.$(selector).getText();
    assert.equal(element,tagName);
});

When('I click on delete tag', async function(){
    let element = await this.driver.$('.gh-btn-red');
    return await element.click();
});

Then('I click on confirm delete tag', async function(){
    let element = await this.driver.$('.modal-footer > button:nth-child(2)');
    return await element.click();
})