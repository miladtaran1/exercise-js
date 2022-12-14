//1. عددی رو از کاربر گرفته و مجموع ارقام آن را حساب کنید

var personNum = Number(prompt("entter your number"));
var sum = 0;
for(;personNum / 10 != 0;){
    sum = sum + (personNum % 10);
    personNum = Math.floor(personNum / 10);
};
console.log("sum is :" , sum);