 const { Given, When, Then } = require('@cucumber/cucumber');

 When('I click on night shift', async function(){
     let element = await this.driver.$('.nightshift-toggle-container > div.nightshift-toggle ');
     return await element.click();
 });

