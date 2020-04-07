const { Given, When, Then } = require('cucumber')
//const { expect } = require('chai')
var homePage = require('../pages/home.page.js');
var product = require('../pages/product.page.js');
var common = require('../pages/common.page.js');
var basePage = require('../pages/base.page')

//Comenting on homePage.Step
Given('user navigates to the site', function() {
  browser.url('./');
  console.log("Navigating to the site..!");
  basePage.waitToLoad(2)
})

When(/^I click on the \"(.*)\" button$/, (item) => {
  console.log(`Clicking on the ${item} button..!`);
  if(item=="product"){
     //browser.click('.shop-callout a');
      basePage.webClick(homePage.productButton);
   }else if(item=="buy"){
    basePage.webClick(homePage.buyButton);
   }
   basePage.waitToLoad(6)
});

Then(/^I should be seeing the \"(.*)\" page$/,url => {
   console.log(`Then I should be seeing ${url} page`);
});

Then('I should be seeing the review label', function() {
  console.log("seeing the review label....!");
  basePage.waitToLoad(2)
  // var ifExisting = common.isExisting(product.reviewLblSelector);
  var ifExisting = basePage.webVaitForDisplayed(product.addAReviewLabel);
   console.log("***In Then - IfExisting : "+ifExisting);
  // var ifVisible = browser.isVisible('#comment-form > h3');
   var ifVisible = common.isVisible(product.reviewLblSelector);
   console.log("ifVisible : "+ifVisible);
  //assert.equal(ifVisible,true);
  expect(ifVisible).to.equal(false, 'Visible is true..!');

})

When(/^user clicks on "(.*)" accordion$/, (accordNo) => {
   console.log(`user clicks on ${accordNo} accordion..!`);
    basePage.webClick(homePage.getAccordionLiNo(accordNo.match(/\d+/g)[0]));
    //  basePage.waitToLoad(2)
  // basePage.webClick(homePage.getAccordionNo(2));
});

Then(/^user should see "(.*)" accordion is open and other two are closed$/,(accordNo) => {
   console.log(`Then user should see ${accordNo} accordion is open and other two are closed..!`);
   const accordion2Displayed = homePage.getAccordionNoDiv(2).isDisplayed()
   console.log('Accordion 2 displayed :',accordion2Displayed)
     const accordion1Displayed = homePage.getAccordionNoDiv(1).isDisplayed()
   console.log('Accordion 1 displayed :',accordion1Displayed)
  //  const accorion1Display = browser.getElementCSSValue(homePage.getAccordionNoSel(1),'display');
   const accorion1Display = browser.execute(`return $("ul.accordion li:nth-child(1) div").css('display')`);
   console.log('***Accordion 1 display property :',accorion1Display)
   const accorion2Display = browser.execute(`return $("ul.accordion li:nth-child(2) div").css('display')`);
   console.log('***Accordion 2 display property :',accorion2Display)


     //  if(accordNo=="2nd"){
       

  //   }else if(accordNo=="3rd"){
  //      basePage.webClick(homePage.buyButton);
  //   }
  basePage.waitToLoad(2)
});
