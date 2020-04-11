const apiBaseURL = "https://jsonplaceholder.typicode.com/"
const createRequestObj = (dataTable)=>{
    const obj={}
    const data = dataTable.hashes()
    for(let row=0; row<data.length ; row++){
       obj[data[row]['FieldName']] = data[row]['FieldValue']
    }
    console.log('*** Object Created : ',obj)
    return obj
    
 }

 const createReqArg = (method,reqBody)=>{
    return reqArg = {
        method : method,
        headers : { Accept : 'application/json' },
        body: reqBody
     } 
}

module.exports ={
       apiBaseURL,
      createRequestObj,
      createReqArg
    }