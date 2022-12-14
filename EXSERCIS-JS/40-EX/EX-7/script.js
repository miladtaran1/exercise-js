//یک زمان را بر حسب دقیقه از کاربر دریافت کرده و آن را به ساعت تبدیل کنید و سپس نمایش دهید

let personTime = Number(prompt("pleas enter your time" , "min"));

let sum = personTime / 60;
alert("the hours is " + sum.toFixed(2) + "AM")