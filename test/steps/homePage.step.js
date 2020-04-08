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
  // browser.pause(10000)
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
   basePage.waitToLoad(4)
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
    accordNo = accordNo.match(/\d+/g)[0]
    console.log(`user clicks on ${accordNo} accordion..!`);
    // const accordionEle = homePage.getAccordionLiNo(accordNo)
    // homePage.getAccordionLiNo(accordNo).waitForDisplayed({timeout:5000,interval:500})
    basePage.webClick(homePage.getAccordionLiNo(accordNo));
    //  basePage.waitToLoad(2)
  // basePage.webClick(homePage.getAccordionNo(2));
});

Then(/^user should see "(.*)" accordion is open and other two are closed$/,(accordNo) => {
   accordNo=accordNo.match(/\d+/g)[0]
   console.log(`Then user should see ${accordNo} accordion is open and other two are closed..!`);
   let accordion3rdCollapsed=false;
 // Checking if the Second Accordion expanded
   const accordionExpandedDisplayed = basePage.webWaitForDisplayed(homePage.getAccordionNoDiv(accordNo))
    //  console.log('Accordion 2 Not displayed :',accordionExpandedDisplayed)
 // Checking if the First Accordion collapsed
   const accordion1Displayed = basePage.webWaitForDisplayed(homePage.getAccordionNoDiv(1),2,true)
   console.log('Accordion 1 displayed :',accordion1Displayed)
   
  /*  "getElementCSSValue(selector,cssProperty) not working.."
  const accorion1DisplayCSSProp = browser.getElementCSSValue(homePage.getAccordionNoDivSel(2),'display');
   console.log('***Accordion 2 display **CSS*** Property :',accorion1DisplayCSSProp)
 */   

   /* Workaround to get the Element CSS Property */
  /*  const accorionExpandDisplay = browser.execute(`return $("ul.accordion li:nth-child(1) div").css('display')`);
   console.log('***Accordion 1 display property :',accorionExpandDisplay)
  */

    if(accordNo=="2"){
      // Checking if the First Accordion collapsed
      const isExisted = homePage.getAccordionNoDiv(3).isExisting()     //--> true
      const isDisplayed = homePage.getAccordionNoDiv(3).isDisplayed()  //--> false
      console.log(`***isExisted : ${isExisted}  - isDisplayed : ${isDisplayed}`)
      accordion3rdCollapsed = basePage.webWaitForDisplayed(homePage.getAccordionNoDiv(3),2,true)
    }else if(accordNo=="3"){
      accordion3rdCollapsed = basePage.webWaitForDisplayed(homePage.getAccordionNoDiv(2),2,true)
    }
    expect(accordionExpandedDisplayed, "Assertion Failed...Accordion "+accordNo+" not expanded..!!").to.be.true
    expect(accordion1Displayed,'Assertion Failed...Accordion 1 not collapsed..!!').to.be.true  
    expect(accordion3rdCollapsed,'Assertion Failed...Accordion 3rd one not collapsed..!!').to.be.true  
  basePage.waitToLoad(2)
});
