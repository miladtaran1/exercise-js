//EX-9
// برنامه ای بنویسید یک رشته از ورودی بگیرد و ان را به صورت معکوس چاپ کند
// مثال rahkar = rakhar
// نکته : از حلقه و تابع substring استفاده کنید

var rahkarReverse = 'rahkar';
for (let index = 0; index < rahkarReverse.length; index++) {
    var sum = rahkarReverse.substring(rahkarReverse , 6);
}
console.log(rahkarReverse);
console.log(sum.split('').reverse().join('')); 
