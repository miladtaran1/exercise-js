//EX-8
//8_برنامه بنویسید که دومین عدد کوچک یک ارایه را چاپ کند

var numbersArray = [1,13,22,123,49];
var min = Infinity;
var secondMin = Infinity; 
for (var index= 0; index< numbersArray.length; index++) {
    if (numbersArray[index]< min) {
        secondMin = min;
        min = numbersArray[index]; 
    } else if (numbersArray[index]< secondMin) {
        secondMin = numbersArray[index]; 
    }
}
console.log(secondMin);