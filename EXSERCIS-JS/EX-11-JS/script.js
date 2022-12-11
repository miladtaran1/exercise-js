//EX-11
//11_برنامه ای بنویسید مقدار تکراری را از آرایه زیر تشخیص دهد و چاپ کند

let tekrariArr = [1,13,22,13,49];
let sortArr = tekrariArr.sort();

let newArr = [];
for(let i = 0; i < tekrariArr.length; i++) {
  if(sortArr[i + 1] == sortArr[i]){
    newArr.push(sortArr[i]);
  }
}
  console.log(newArr);