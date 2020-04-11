const  getFormattedDate=() =>{
    var date = new Date();
    var str = date.getFullYear() + "_" + (date.getMonth() + 1) + "_" + date.getDate() + "_" + 
              date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds();

    return str;
}

module.exports={getFormattedDate}