// EX-1
// 1_تمام اعداد زوج بین صفر تا هفت هزار را چاپ کنید

for (let index = 0; index < 7000; index++) {
    if(index % 2 === 0){
        console.log(index);
    }
}