// const {After, Status} =  require('cucumber');

// After((scenarioResult)=>{
//   // Here it is added to a failed step, but each time you call `browser.saveScreenshot()` 
//   //  it will automatically bee added to the report
//   if (scenarioResult.result.status === 'failed') {
//     // It will add the screenshot to the JSON
//     console.log("==================*****HOOKS****========================")
//     let filePath = join(process.cwd(),'./screenshots/Error_'+reportSufix+'.png')
//               console.log("File Path ------>>>> :",filePath)
//               browser.saveScreenshot(filePath)
//     //browser.saveScreenshot()
//   }
//   return scenarioResult.status;
// });
