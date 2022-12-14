//تابعی بنویسید که عددی را دریافت کرده و زوج یا فرد بودن آن را نمایش دهد

let personNumber = Number(prompt("pleas enter your number"));

function myFunc(personNumber) {
    if (personNumber % 2 === 0) {
        alert(personNumber + "is zoj");
    }else{
       alert(personNumber + "is fard")
    };
};
myFunc(personNumber);