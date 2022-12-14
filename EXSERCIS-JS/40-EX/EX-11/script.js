//یک برنامه ثبت نام بنویسید

// به این شکل که کاربر برای ثبت نام در سایت باید یوزرنیم و پسورد را ثبت کند

// محدودیت موجود این است که یوزرنیم حداقل باید 3 کاراکتر و پسورد حداقل باید 8 کاراکتر داشته باشد

// در غیر این صورت پیغام مناسب را به کاربر نمایش دهید

// (: موفق باشید 

let personUserName = prompt("pleas enter your userName");
let personPassword = Number(prompt("pleas enter your password"));


    if((personUserName.length > 3) || (personPassword.length > 8)){
        console.log("username formate is : t");
    }
    else{
        console.log("pass is : f");
    }

