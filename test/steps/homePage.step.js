const { Given, When, Then } = require('cucumber')
var homePage = require('../pages/home.page.js');
var productPage = require('../pages/product.page.js');
var basePage = require('../pages/base.page')

//Comenting on homePage.Step
Given('user navigates to the site', function() {
  browser.url('./');
  console.log("Navigating to the site..!");
  // browser.pause(10000)
  basePage.waitToLoad(2)
})

When(/^user clicks on the \"(.*)\" button$/, (item) => {
  console.log(`Clicking on the ${item} button..!`);
  if(item=="product"){
     //browser.click('.shop-callout a');
      basePage.webClick(homePage.productButton);
   }else if(item=="buy"){
    basePage.webClick(homePage.buyButton);
   }else if(item=="Buy Now"){
     basePage.webWaitForEnabled(productPage.buyNowBtn)
    basePage.webClick(productPage.buyNowBtn);
   }

  //  basePage.waitToLoad(2)
});

Then(/^user should be seeing the \"(.*)\" page$/, (url) => {
   console.log(`Then I should be seeing ${url} page`);
});

Then('user should be seeing the review label', ()=> {
  console.log("seeing the review label....!");
  basePage.waitToLoad(2)
  // var ifExisting = common.isExisting(product.reviewLblSelector);
  basePage.webScrollIntoView(productPage.addAReviewLabel)
  let isDisplayed = basePage.webWaitForDisplayed(productPage.addAReviewLabel);
   console.log("***In Then - isDisplayed : "+isDisplayed);
  // var ifVisible = browser.isVisible('#comment-form > h3');
  
  //assert.equal(ifVisible,true);
  expect(isDisplayed).to.equal(true, 'Visible is true..!');
  basePage.waitToLoad()
})

When(/^user clicks on "(.*)" accordion$/, (accordNo) => {
    accordNo = accordNo.match(/\d+/g)[0]
    console.log(`user clicks on ${accordNo} accordion..!`);
    // const accordionEle = homePage.getAccordionLiNo(accordNo)
    // homePage.getAccordionLiNo(accordNo).waitForDisplayed({timeout:5000,interval:500})
    basePage.webScrollIntoView(homePage.getAccordionLiNo(accordNo))
    basePage.webClick(homePage.getAccordionLiNo(accordNo));
    //  basePage.waitToLoad(2)
  // basePage.webClick(homePage.getAccordionNo(2));
});

Then(/^user should see "(.*)" accordion is open and other two are closed$/,(accordNo) => {
   accordNo=accordNo.match(/\d+/g)[0]
   console.log(`Then user should see ${accordNo} accordion is open and other two are closed..!`);
   let accordion3rdDisplayed=false;
   let accordion1Displayed ;
 
 //** Checking if the Second Accordion expanded 
   const accordionExpandedDisplayed = basePage.webWaitForDisplayed(homePage.getAccordionNoDiv(accordNo))
   //  console.log('Accordion 2 Not displayed :',accordionExpandedDisplayed)
 
 //** Checking if the First Accordion collapsed using waitUntil   
   const accordion2WaitUntil = basePage.webWaitUntil(
                                       ()=>{ return basePage.webWaitForDisplayed(homePage.getAccordionActiveNoDiv(accordNo))}
                                            ,5)
   console.log('***Accordion 2 is  active - waitUntil :',accordion2WaitUntil)
   
  //*  "getElementCSSValue(selector,cssProperty) not working.."
   /* const accorion1DisplayCSSProp = browser.getElementCSSValue(homePage.getAccordionNoDivSel(2),'display');
      console.log('***Accordion 2 display **CSS*** Property :',accorion1DisplayCSSProp)
   */   

 //* Workaround to get the Element CSS Property 
   /*  const accorionExpandDisplay = browser.execute(`return $("ul.accordion li:nth-child(1) div").css('display')`);
    console.log('***Accordion 1 display property :',accorionExpandDisplay)
   */

    if(accordNo=="2"){
   //** Checking if the First Accordion collapsed
      const isExisted =   basePage.webWaitForExist(homePage.getAccordionNoDiv(3))     //--> true
      accordion3rdDisplayed = basePage.webIsDisplayed(homePage.getAccordionNoDiv(3))  //--> false
      console.log(`***isExisted : ${isExisted}  - isDisplayed : ${accordion3rdDisplayed}`)
  
    }else if(accordNo=="3"){
      accordion3rdDisplayed = !basePage.webWaitForDisplayed(homePage.getAccordionNoDiv(2),10000,true)
    }
    expect(accordionExpandedDisplayed, "Assertion Failed...Accordion "+accordNo+" not expanded..!!").to.be.true
    expect(accordion2WaitUntil,'Assertion Failed...Accordion '+accordNo+' not expanded..!!').to.be.true  
    expect(accordion3rdDisplayed,'Assertion Failed...Accordion 3rd one not collapsed..!!').to.be.false  
  basePage.waitToLoad(2)
});
