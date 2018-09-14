const min = (number1, number2) => {
    while(number1.typeof === 'number' && number2.typeof === 'number'){
        if (number1 > number2) {
            return `${number2} is minimum`    
        } else {
            return `${number1} is minimum`      
        }
    }
    return 'Your input should be of type Numbers'
    
}
 console.log(min("14", 70));

 const getMin = (number1, number2) => Math.min(number1, number2)
 console.log(getMin(90, 70));
  

 function isEven(number){
     if (number < 0) {
        return isEven(-number)    
     } else if (number == 1){
         return false
     } else if (number == 0){
         return true
     } else {
         return isEven(number - 2)
     }
 }

 console.log(isEven(-9));


 const countBs = (string) => {
     let counter = 0;
     for (var i=0; i < string.length; i++){
            if (string.charAt(i) === 'B') {
                counter++;            
            }
    }
    return counter;

 }

 console.log(countBs("BaBboon"));
 