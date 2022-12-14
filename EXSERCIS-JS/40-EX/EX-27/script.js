//یک فروشگاه آنلاین پیاده سازی کنید

// به این شکل که محصولات فروشگاه خود را در دیتابیسی ذخیره کرده (آرایه) و آرایه ای برای سبد خرید کاربر داشته باشید
// و از کاربر اسم محصولی را که قصد اضافه کردن به سبد خرید دارد ، دریافت کنید

// اگر محصول درخواستی کاربر در انبار فروشگاه شما موجود بود، آن را به سبد خرید کاربر اضافه کنید
// و سپس مبلغ کل سبد خرید را محاسبه کرده و به کاربر نمایش دهید
// و در غیر این صورت به کاربر پیغام اتمام موجودی نمایش دهید

// :نکات قابل توجه
// بعد از اضافه محصول به سبد خرید کاربر، سبد را در کنسول نمایش دهید
// به طور دیفالت 3 محصول با قیمت های مختلف در سبد خرید کاربر موجود باشد


var allProducts = [
	{id: 1, name: 'Laptop', price: 17000000},
	{id: 2, name: 'Phone', price: 7000000},
	{id: 3, name: 'Pen', price: 12000},
	{id: 4, name: 'Pencil', price: 9000},
	{id: 5, name: 'Eraser', price: 6000},
	{id: 6, name: 'Milk', price: 35000},
]

var userBasket = [
	{id: 1, name: 'pen', price: 12000},
	{id: 2, name: 'pencil', price: 9000},
]

var userProduct = prompt("Enter The Name Of Product: ") // 'Phone'

var requestProduct;

var isInShop = allProducts.some(function (product) {
	if (product.name === userProduct) {
		requestProduct = product
		return true
	}
})


if (isInShop === true) {
	var newProduct = {
		id: 3,
		name: requestProduct.name,
		price: requestProduct.price
	}
	userBasket.push(newProduct)

	var sum = 0

	userBasket.forEach(function (product) {
		sum = sum + product.price
	})
	console.log(userBasket)
	alert("Total Price: " + sum)
} else {
	console.log("موجودی نیست")
}