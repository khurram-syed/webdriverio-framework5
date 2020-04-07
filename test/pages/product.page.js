class ProductPage {
  //var reviewLblSelector ='#comment-form > h3';
   /* ------ Selectors Reviews Element ----- */
  get reviewLblSelector(){return '#comment-form > h3';};
  get errorEmailTextSelector(){return 'p.form-error';}
  get errorReviewTextSelector(){return "//p[contains(.,'A review')]";}


  /* ------Reviews Element ----- */
  get addAReviewLabel(){return $('#comment-form > h3');}
  get reviewEmailTxtBox(){return $('#review-email');}
  get reviewTextTxtBox(){return $('label > textarea');}
  get submitBtn(){return $("//button[.='Submit Review']");}
  get errorEmailText(){return $('p.form-error');}
  get errorReviewText(){return $("//p[contains(.,'A review')]");}

  /* ----Product Form Element---------- */

  get productLbl(){return $('div.cart h3');}
  get qtyTxtBox(){return $('div.cart h3');}
  get buyNowBtn(){return $('div.cart button');}
}
module.exports= new ProductPage();
