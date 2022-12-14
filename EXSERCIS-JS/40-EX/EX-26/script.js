//دیتابیسی برای ذخیره اطلاعات کاربران داشته باشید (آرایه ای از آبجکت ها)
// و سپس به کمک متد فورایچ، اطلاعات هر یوزر را به صورت جداگانه در کنسول نمایش دهید

let personObj = [

    {id:1 , name:"hadi" , family:"taran" , age:18},
    {id:1 , name:"ali" , family:"reklaran" , age:39},
    {id:1 , name:"malek" , family:"abdi" , age:24},
    {id:1 , name:"milad" , family:"taran" , age:22}

];
personObj.forEach(function(user){
    console.log("  first name is :" , user.name , "   last name is :" , user.family ,"  AGE is :" , user.age);

});