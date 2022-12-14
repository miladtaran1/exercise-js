//از کاربر سن و جنسیت را دریافت کنید.
// در صورتی که جنسیت کاربر مونث بوده یا سن کمتر از 18 را دارد، به اون خطا نمایش داده
// و در غیر این صورت به اون مجوز ورود به پنل را نمایش دهید.

let personAge = Number(prompt("pleas enter your Age"));
let personGender = prompt("pleas enter your Gender");

if ((personAge < 18) || (personGender != "female")) {
    alert("welcome")
}else{
    alert("shoma sharayet vorod ra nadarin");
}
