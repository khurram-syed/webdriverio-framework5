const {Given, When, Then} = require('cucumber')
const apiResources = require('../../utils/api.resources')
const basePage =require('../pages/base.page')
//const fetch = require('sync-fetch')
const fetch = require('node-fetch')

var requestURL =apiResources.apiBaseURL;
var response;
var responseData;

/*  NOTE : RUNNING ALL FOURT TESTS WOULD FAIL AS IT IS RESTRICTION FROM API SERVER BUT INDIVIDUAL TEST WILL BE PASSING */

 Given(/^user has set the api request for "(.*)" api$/, (apiResource) =>{
   browser.url('./')
   requestURL += apiResource.toLowerCase()+"/";
   console.log("***API Request ..! :",requestURL);
   basePage.waitToLoad(2)
 })
 
 When(/^user runs the "(.*)" request for following posts values$/, async (requestType,dataTable) => {
   console.log(`user runs the ${requestType} request for following posts values`);
   
   var reqObj=apiResources.createRequestObj(dataTable)
   if(requestType==="GET"){
      console.log('=======================>>>> In the GET')
      requestURL = requestURL+reqObj.id
      response = await fetch(requestURL)
      responseData = await response.json()
   }else if(requestType==="POST"){
      console.log('=======================>>>> In the POST')
      const reqArg = apiResources.createReqArg('POST',reqObj)
      console.log('***reqArg :',reqArg)
      response = await fetch(requestURL,reqArg)
      responseData = await response.json()
   }else if(requestType==="PUT"){
      console.log('=======================>>>> In the PUT')
      requestURL = requestURL+reqObj.id
      const reqArg = apiResources.createReqArg('PUT',reqObj)
      console.log('***reqArg :',reqArg)
      response = await fetch(requestURL,reqArg)
      responseData = await response.json()

   }else if(requestType==="DELETE"){
      console.log('=======================>>>> In the DELETE')
      requestURL = requestURL+reqObj.id
      const reqArg = apiResources.createReqArg('DELETE',null)
      console.log('***reqArg :',reqArg)
      response = await fetch(requestURL,reqArg)
      responseData = await response.json()
   }
   console.log('*****Response status**** : ',response.status)

 });

 Then(/^user should receive "(.*)" response with "(.*)" response body$/,(respStatus,expctedResponse,dataTable)=>{
   console.log(`user should receive ${respStatus} response with ${expctedResponse} response body`);
   expect(respStatus).to.equal(response.status.toString())
   if(expctedResponse==="NO"){
      return;
   }  
   let data = dataTable.hashes();
   // response=response.json()
   response = responseData
   console.log('*****Response Body **** : ',response)
   console.log('*****data First Row**** : ',data[0])
      for (let row=0 ; row<data.length ; row++){
            var fieldName=data[row]['FieldName']
            var actualFieldName= response[fieldName].length>1?response[fieldName].slice(0,15):response[fieldName]
            var expectFieldName=data[row]['FieldValue'].length>1?data[row]['FieldValue'].split('.')[0]:data[row]['FieldValue']
            console.log(`actualFieldName : ${actualFieldName}  - expectFieldName : ${expectFieldName}`)
            expect(actualFieldName.toString()).to.equal(expectFieldName)
      }
//      basePage.waitToLoad(2); 
  })

