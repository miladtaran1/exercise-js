//EX-10
//10_برنامه ای بنویسید که جدول ضرب یک رقم در یک رقم را چاپ کند

let result = '\n'
for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        result += (i*j) + '  ';
    }    
    result += '\n'
}
console.log(result);