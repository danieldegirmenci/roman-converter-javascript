function convertToRoman(num) {
    let romanArabic = {
      M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1,
    };
  let conclusion="";
  for(let elem in romanArabic){
    let repeatCount=Math.floor(num/romanArabic[elem]);
    if(repeatCount!==0){
      conclusion+=elem.repeat(repeatCount);
      num%=romanArabic[elem];
    }
    if(num===0){
      console.log(conclusion);
      return conclusion;
    }
  }
  
  }
  
  convertToRoman(6);