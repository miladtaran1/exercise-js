//EX-4
//4_آرایه زیر را در نظر بگیرید و تک تک مقدار های آن را با حلقه حذف کنید که در انتها یک ارایه خالی با قی بماند
// توضیح یک دستور اماده ای برای حذف مقدار ارایه وجود داره که با سرچ پیداش کنید

var numbersArray = [1,13,22,123,49];

for (let index = 0; index < numbersArray.length; index++) {
    delete numbersArray[index];
}
console.log(numbersArray);
