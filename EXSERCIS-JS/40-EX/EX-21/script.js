//دو عدد رو از کاربر بگیرین و اعداد زوج بین آن ها را نمایش دهید

let num1 = Number(prompt("enter number 1"));
let num2 = Number(prompt("enter number 2"));

for (let index = num1; index <= num2; index++) {
    if((index % 2) == 0){
        console.log(index);
    }

}