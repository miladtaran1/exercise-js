//فرض کنید یک وب سایت فروشگاهی دارید که کاربر 5 محصول از فروشگاه را انتخاب کرده است

// قیمت 5 محصول را از کاربر گرفته و مجموع مبلغ کل سبد خرید رو نمایش دهید

let personPrice = 0;
for (let index = 0; index < 5; index++) {
     personPrice =personPrice + Number(prompt('lotfan geymat mahsole '));
}
console.log('all price is : ' , personPrice);