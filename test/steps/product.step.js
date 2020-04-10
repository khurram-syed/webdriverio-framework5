const {Given, When, Then} = require('cucumber')
const productPage = require('../pages/product.page')
const basePage =require('../pages/base.page')

Then(/^user should see "Thank you" message displayed underneath$/,()=>{
   console.log('user should see "Thank you" message displayed underneath');
   const isTextDisplayed=basePage.webWaitForDisplayed(productPage.thankYouMsg);
   console.log('***isTextDisplayed : ',isTextDisplayed)
 
   expect(isTextDisplayed).to.be.true;
})