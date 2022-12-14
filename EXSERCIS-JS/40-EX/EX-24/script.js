//اعدادی را به تعداد دلخواه از کاربر گرفته و داخل آرایه ای ذخیره کنید
// و سپس میانگین آن ها را محاسبه کرده و نمایش دهید

var userNumber = 0
var sum = 0
var counter = 0
var marr= [];
while (userNumber != -1) {
	sum += userNumber
	userNumber = Number(prompt('Enter The Number: \n if you dont have a number, enter -1'))
	if (userNumber != -1) {
		counter++
	}
}
marr.push(sum);

console.log(marr / counter);