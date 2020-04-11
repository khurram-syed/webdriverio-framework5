const {Given, When, Then} = require('cucumber');
var product = require('../pages/product.page.js');
var basePage = require('../pages/base.page');


When(/^user sets the "(.*)" value "(.*)"$/,(inputName,value)=>{
   if(inputName==="email"){
      console.log("Email Value :"+value);
      basePage.webSetValue(product.reviewEmailTxtBox,value);
   }else if (inputName==="quantity"){
      console.log("Quantity Value :"+value);
      basePage.webSetValue(product.qtyTxtBox,parseInt(value));
   }   
});

When(/^user clicks on review text box with (.*) and (.*)$/,function(username, password){
   console.log("Clicking on Review Text Box..! :");
   console.log(`Username : ${username} and Password : ${password}`);
   basePage.webClick(product.submitBtn);
});

When(/^user clicks on review text box$/,function(){
   basePage.webClick(product.submitBtn);
});
When(/^user sets the following login credentials$/,function(dataTable){
//   console.log("Data : "+dataTable);
   var data = dataTable.hashes();
   console.log("data raw :"+data);
   console.log("loginName :",data[0]['loginName'])
   console.log("loginPassword :",data[0]['loginPassword'])

});

Then(/^user should see error message \"(.*)\" for email$/,(errorMessage)=>{
   console.log("Expected Email Error Message :"+errorMessage);
   const isErrorTextDisplayed=basePage.webWaitForDisplayed(product.errorEmailText);
   console.log('***isErrorTextDisplayed : ',isErrorTextDisplayed)
   const errorText=basePage.webGetText(product.errorEmailText);
   console.log("Actual Email ErrorText :"+errorText);
   expect(errorText).to.equal('Please enter a valid email address.','Error Text is not Matching..!');
});

Then(/^user should see error message \"(.*)\" for review$/,(errorMessage)=>{
   console.log("Expected Review Error Message :"+errorMessage);
   var isVisible = basePage.webWaitForDisplayed(product.errorReviewText);
   console.log("Error Review Text Selector Visible : "+isVisible);
   errorText=basePage.webGetText(product.errorReviewText);
   console.log("Actual Review ErrorText :"+errorText);
   
   expect(errorText).to.equal('A review without text isn\'t much of a review.');

});

Then(/^user should see the "(.*)" button enabled$/,(btnName)=>{
   console.log(`user should see the ${btnName} button enabled`);
   let isEnabled = basePage.webWaitForEnabled(product.buyNowBtn);
   console.log("***Button is enabled..!!! : "+isEnabled);
   
   expect(isEnabled).to.be.true
   basePage.waitToLoad()
});
