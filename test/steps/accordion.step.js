const {Given,When,Then} = require('cucumber')
const basePage = require('../pages/base.page')
const prodPage = require('../pages/product.page')
const homePage = require('../pages/home.page')
Given(/^user opens the url$/,()=>{
   console.log('user opens the url ')
   browser.url('./')
   browser.pause(3000);
})


When(/^user clicks "(.*)" button$/,(btnText)=>{
    console.log(`user clicks on ${btnText} button`)
    basePage.webClick(homePage.productButton);
    const pordLblText = basePage.webGetText(prodPage.productLbl);
    console.log('******Product Label Text ******  : ',pordLblText)
    expect('Totally Not Evil Sentient Robot').to.equal(pordLblText)

    // browser.pause(3000);
})


Then(/^user should the product page with page url "(.*)"$/,(productUrl)=>{
    console.log(`user should the product page with page url ${productUrl}`)
    browser.pause(1000);
})