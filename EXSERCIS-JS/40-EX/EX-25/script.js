//یک سامانه ثبت نام پیاده سازی کنید

// به این شکل که یک آرایه برای ذخیره اطلاعات کاربران داشته باشید (3 کاربر را بطور دیفالت در آرایه داشته باشید)
// و از کاربری که قصد ثبت نام دارد نام، نام خانوادگی، سن و ایمیل را دریافت کرده
// و داخل آبجکتی مجزا در آرایه کاربران ذخیره کنید
// پس از انجام عمل ثبت نام، اطلالاعات تک تک کاربران را لاگ بگیرید

// :نکات قابل توجه
// نام حداقل باید 3 کاراکتر و حداکثر 10 کاراکتر داشته باشد
// نام خانوادگی حداقل باید 3 کاراکتر و حداکثر باید 15 کاراکتر داشته باشد
// سن حتما باید عدد بوده و حداکثر 3 رقم باشد


let defaultArray = ['ali','hamed','farid'];

let Fname = prompt('enter your fname');
let Lname = prompt('enter your lname');
let Age = prompt('enter your age');
let Email = prompt('enter your email');


let personObj = {firstname:Fname, lastname:Lname, Age:Age, Email:Email,}

if ((Fname < 3) && (Lname < 3)) {
    alert("name va family eshtebah ast eslah shavad");
}else{
    alert("name ");
}
if(Age > 3){
    alert("sen khod ra doroste vared konid");
}else{
    alert("welcome age")
}
if((Fname > 15) && (Lname > 15)){
    alert("name va family eshtebah ast eslah shavad")
}else{
    alert("name");
}


console.log("firstname : " , personObj.firstname);
console.log("lastname : " , personObj.lastname);
console.log("Age : " , personObj.Age);
console.log("Email : " , personObj.Email);
console.log("default Array : " , personObj);