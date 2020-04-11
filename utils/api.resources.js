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

module.exports ={apiBaseURL,createRequestObj}