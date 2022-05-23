const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { TIMEOUT } = require('dns');

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
    let tagHref= await this.driver.$('p.ghost-url-preview').getText();
    tagHref=tagHref.substring(tagHref.search("/tag/")+5,tagHref.length -1 );
    let selector = 'a[href="#/tags/' + tagHref + '/"] > h3:nth-child(1)';
    await this.driver.$('a[href="#/tags/"]').click();
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
});

Then('I validate name error message', async function(){
    let element = await this.driver.$('p.response').getText();
    assert.match(element,/You must specify a name for the tag./);
});

Then('I validate overlimit error message', async function(){
    let element = await this.driver.$('p.response').getText();
    assert.match(element, /Tag names cannot be longer than 191 characters./);
});

Then('I validate overlimit description error', async function(){
    let element = await this.driver.$('p.response:nth-child(3)').getText();
    assert.match(element, /Description cannot be longer than 500 characters./);
});

