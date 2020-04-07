class HomePage{

 get robotSelectBtn(){return $('//a[.="See our Vast Robot Selection"]')}
 get buyButton(){return $("//a[.='Buy']")}
 get productButton(){return $(".shop-callout a")}

/* --------Acoordion Elements-------- */
 
 getAccordionLiNo(accordNo){
     return $("ul.accordion li:nth-child("+accordNo+")")
 }

 getAccordionNoDiv(accordNo){
    return $("ul.accordion li:nth-child("+accordNo+") div")
}

 getAccordionNoSel(accordNo){
    return "ul.accordion li:nth-child("+accordNo+") div"
 }

 getAccordionActiveNoDiv(accordNo){
    return $("ul.accordion li:nth-child("+accordNo+")[aria-hidden=false]")
}
}
module.exports = new HomePage();
