const {Given, When, Then} = require('cucumber');
var home = require('../pages/home.page.js');
var product = require('../pages/product.page.js');
var common = require('../pages/common.page.js');


When(/^I set the email value \"(.*)\"$/,(emailValue)=>{
   console.log("Email Value :"+emailValue);
   product.reviewEmailTxtBox.setValue(emailValue);
});

When(/^I click on review text box with (.*) and (.*)$/,function(username, password){
   console.log("Clicking on Review Text Box..! :");
   console.log(`Username : ${username} and Password : ${password}`);
   product.submitBtn.click();
});

When(/^I click on review text box$/,function(){
    product.submitBtn.click();
});
When(/^I set the following login credentials$/,function(dataTable){
//   console.log("Data : "+dataTable);
   var data = dataTable.raw();
   console.log("data raw :"+data);
     // data.forEach(function(element) {
     //        console.log("Element[0]:" + element[0]);
     //        console.log("Element[1]:" + element[1]);
     //    });
});

Then(/^I should see error message \"(.*)\" for email$/,(errorMessage)=>{
   console.log("Expected Email Error Message :"+errorMessage);
   var errorText=product.errorEmailText.getText();
   browser.pause(3000);
   console.log("Actual Email ErrorText :"+errorText);
   expect(errorText).to.equal('Pleas enter a valid email address.','Error Text is not Defined..!');
});

Then(/^I should see error message \"(.*)\" for review$/,(errorMessage)=>{
   console.log("Expected Review Error Message :"+errorMessage);
   var isVisible = common.waitForVisible(product.errorReviewTextSelector);
   console.log("Error Review Text Selector Visible : "+isVisible);
  errorText=product.errorReviewText.getText();
  console.log("Actual Review ErrorText :"+errorText);
  //assert.equal(errorText,'A review without text isn\'t much of a review.');
  expect(errorText).to.equal('A review without text isn\'t much of a review.');

});
