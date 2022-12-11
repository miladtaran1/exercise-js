//EX-5
//5_برنامه ای بنویسید که خروجی زیر را چاپ کند

let number = prompt("enter your number");
for (let index = 0; index < number; index++) {
    let all = "";
    for (let i = 1; i < index; i++) {
        all = all + i;
    }    
    console.log(all);
}
