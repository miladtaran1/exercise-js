//EX-3
//3_ارایه زیر را در نظر بگیرید و مجموع همه ی مقدار های آن را چاپ کنید

var numbersArray = [1,13,22,123,49];
let sum = 0
for (let index = 0; index < numbersArray.length; index++) {
    sum = sum + numbersArray[index]
}
console.log(sum);