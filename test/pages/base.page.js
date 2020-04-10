class BasePage{
  
  //***** This Class is used to do all the Automation Functionality(like click, setValue, IsEnabled etc.) with highlighting the control */   

    waitToLoad(timeInSec=2){
        browser.pause(timeInSec*1000)
    }
  
    highLightControl(element){
        browser.execute("arguments[0].style.border='4px solid blue'", element);
    }
    
    webFindElement(selector){
        this.waitToLoad(2)
        try
          { var element = $(selector)
             this.highLightControl(element)
            return element;
          }catch(error){
              console.log("Find Element Error : "+error)
              return false; 
          } 
         
    }
    
    webClick(element){
         this.highLightControl(element);
         element.click(); 
    }

   webClickSel(sel,waitTime=2000){
        this.webWaitUntilAppeared(sel,10000)
        //this.highLightControl(element);
        return this.webFindElement(sel).click();
    }  

    webLeftClick(element){
        this.highLightControl(element);
        element.leftClick(); 
   }

   webSetValue(element,value){
        this.webWaitForDisplayed(element)
        element.setValue(value); 
    }

    webGetText(element){
        this.highLightControl(element);
       return  element.getText();
    }
/* ------------------ Is(Exist/Displayed/Exist) commands -------------- */
    webIsExisting(element){
      this.highLightControl(element);
        return element.isExisting(); 
    }
    
    webIsEnabled(element){
            this.highLightControl(element);
            return element.isEnabled();
    }

    webIsDisplayed(element){
        this.highLightControl(element);
        return element.isDisplayed();
    }

/* ------------------ WaitFor(Exist/Displayed/Exist) commands -------------- */

    webWaitForExist(element,timeout=10000,reverse=false,timeoutMsg='waitForExit false',interval=250){
        const isExisting = element.waitForExist({timeout:timeout,reverse:reverse,timeoutMsg:timeoutMsg,interval:interval});
        if(isExisting){
               this.highLightControl(element);
        }
         return isExisting;
    }

    webWaitForDisplayed(element,timeout=10000,reverse=false,timeoutMsg='waitForDisplayed false',interval=250){
        console.log(`*** In webWaitForDisplayed --> timeout : ${timeout} - reverse:${reverse}`)
        const isDisplayed = element.waitForDisplayed({timeout:timeout,reverse:reverse,timeoutMsg:timeoutMsg,interval:interval});
        console.log('****webWaitForDisplayed - isDisplayed :',isDisplayed)
        if(isDisplayed){
            this.highLightControl(element);
        }
         return isDisplayed;
    }
    
    webWaitForEnabled(element,timeout=10000,reverse=false,timeoutMsg='waitForEnabled false',interval=250){
        var isEnabled = element.waitForEnabled({timeout:timeout,reverse:reverse,timeoutMsg:timeoutMsg,interval:interval});
        if(isEnabled){
            this.highLightControl(element);
        }
      return isEnabled
    }

    webWaitUntil(condition,timeout=10,timeoutMsg='waitUntil false',interval=250){
        var flag = browser.waitUntil(condition,{timeout:timeout*1000,timeoutMsg,interval});
      return flag
    }

 /* ----------------Miscellanous------------------------------- */
    webScrollIntoView(element){
           this.webWaitForDisplayed(element)
           element.scrollIntoView();
           this.waitToLoad(1)
    }
 
  
     webDragAndDrop(selector1,selector2){
        this.webFindElement(selector1);
        this.webFindElement(selector2);
        browser.dragAndDrop(selector1,selector2); 
        
       }
   
    webWaitUntilDisappear(element,waitTime=2000){
       var flag=browser.waitUntil(()=>{
           console.log("**************")
          return element.isVisible()!==true;
       },waitTime);
       return flag;
    }
 
    
     webMouseOver(element,waitTime=2000){
        this.highLightControl(element);
        element.moveToObject(1,1);
    }

    webWaitForAlert(waitTime=10000){
        var flag=false;
        flag=browser.waitUntil(()=>{
            try {
                if(browser.alertText()){
                    return true;
                }
            }catch (e){

            }
        }, waitTime);
        return flag;
    }

    webgetAlertText(){
       if(this.webWaitForAlert()){
          return browser.alertText();
       }
       
        return null;
     }

     webacceptAlertText(){
        if(this.webWaitForAlert()){
           return browser.alertAccept();
        }
         return false;
      }

      webacceptAlertText(){
        if(this.webWaitForAlert()){
           return browser.alertDismiss();
        }
         return false;
      }

      webIsAlertDisappeared(){
       try{ if(this.webWaitForAlert(2000)){
           return false;
          }
        }catch(exception) {

         }
         return true;
      }
    
    
}
module.exports = new BasePage();