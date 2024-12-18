// =============== 1-10: Obyektlarni tanlash va chiqarish ===============

// 1-misol:

// Massivda 3 ta obyekt bor. Har bir obyekt name va age maydoniga ega. Massivdagi birinchi obyektning name qiymatini ekranga chiqaring.

// let people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Sami", age: 20 }
// ];

// console.log(people[0].name);


// 2-misol:

// Massivda 5 ta obyekt bor. Har bir obyekt id maydoniga ega. Oxirgi obyektning id qiymatini ekranga chiqaring.

// let items = [
//     { id: 101 },
//     { id: 102 },
//     { id: 103 },
//     { id: 104 },
//     { id: 105 }
// ];

// let res = items.filter(value => {
//     if (value.id == 105) {
//         console.log(value.id);
//     }
// })


// 3-misol:

// 4 ta obyektli massivdagi barcha obyektlarning age qiymatini ekranga chiqaring.

// let people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Sami", age: 20 },
//     { name: "Karim", age: 35 }
// ];

// let res = people.filter(value => {
//     console.log(value.age);
// })


// 4-misol:

// 3 ta obyektli massivning 2-obyektidagi city maydonini konsolga chiqaring.

// let users = [
//     { name: "Ali", city: "Toshkent" },
//     { name: "Vali", city: "Samarqand" },
//     { name: "Sami", city: "Buxoro" }
// ];

// let res = users.filter(value => {
//     if (value.city == "Samarqand") {
//         console.log(value.city);
//     }
// })


// 5-misol:

// Bir massivda obyektlarning job maydonlari bor. Massivdagi barcha obyektlarning job qiymatlarini chiqaring.

// let workers = [
//     { name: "Ali", job: "Dasturchi" },
//     { name: "Vali", job: "O'qituvchi" },
//     { name: "Sami", job: "Haydovchi" }
// ]

// let res = workers.filter(value => {
//     console.log(value.job);
// })


// 6-misol:

// 5 ta obyektli massivning 3-obyektidagi salary qiymatini ekranga chiqaring.

// let employees = [
//     { name: "Ali", salary: 1000 },
//     { name: "Vali", salary: 1200 },
//     { name: "Sami", salary: 900 },
//     { name: "Karim", salary: 1500 },
//     { name: "Asad", salary: 1100 }
// ];

// let res = employees.filter(value => {
//     if (value.salary == 900) {
//         console.log(value.salary);
//     }
// })


// 7-misol:

// 4 ta obyektli massivning birinchi obyektidagi country qiymatini chiqaring.

// let countries = [
//     { country: "Uzbekistan" },
//     { country: "Russia" },
//     { country: "USA" },
//     { country: "China" }
// ];

// let res = countries.filter(value => {
//     if (value.country == "Uzbekistan") {
//         console.log(value.country);
//     }
// })


// 8-misol:

// 6 ta obyektli massivdagi 5-obyektning status qiymatini ekranga chiqaring.

// let orders = [
//     { id: 1, status: "New" },
//     { id: 2, status: "Pending" },
//     { id: 3, status: "Shipped" },
//     { id: 4, status: "Delivered" },
//     { id: 5, status: "Cancelled" },
//     { id: 6, status: "Returned" }
// ];

// let res = orders.filter(value => {
//     if (value.status == "Cancelled") {
//         console.log(value.status);
//     }
// })

// 9-misol:

// 3 ta obyektli massivning oxirgi obyektidagi phone qiymatini konsolga chiqaring

// let contacts = [
//     { name: "Ali", phone: "998901234567" },
//     { name: "Vali", phone: "998902345678" },
//     { name: "Sami", phone: "998903456789" }
// ];

// let res = contacts.filter(value => {
//     if (value.phone == "998903456789") {
//         console.log(value.phone);
//     }
// })

// 10-misol:

// let users = [
//     { name: "Ali", email: "ali@gmail.com" },
//     { name: "Vali", email: "vali@yahoo.com" },
//     { name: "Sami", email: "sami@hotmail.com" },
//     { name: "Karim", email: "karim@outlook.com" }
// ];

// let res = users.filter(value => {
//     console.log(`"${value.email}"`);

// })


// =============== 11-20: Obyektlar qiymatini o'zgartirish ===============

// 1-misol:

// Massivning birinchi obyektidagi name qiymatini "Alisher" qilib o'zgartiring.

// let users = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Sami", age: 20 }
// ];

// let res = users.map((value, index) => {
//     if (index == 0) {
//         value.name = "Alisher"
//     }
//     return value.name
// })
// console.log(res[0]);


// 2-misol:

// Oxirgi obyektning status qiymatini "Updated" qilib o'zgartiring

// let tasks = [
//     { id: 1, status: "New" },
//     { id: 2, status: "In Progress" },
//     { id: 3, status: "Pending" }
// ];

// let res = tasks.map((value, index) => {
//     if (index == 2) {
//         value.status = "Updated"
//     }
//     return value.status
// })
// console.log(res[2]);


// 3-misol:

// 3-obyektning salary qiymatini 2000 ga tenglashtiring.

// let employees = [
//     { name: "Ali", salary: 1000 },
//     { name: "Vali", salary: 1200 },
//     { name: "Sami", salary: 1500 }
// ];

// let res = employees.map((value, index) => {
//     if (index == 2) {
//         value.salary = 2000;
//     }
//     return value.salary
// })
// console.log(res[2]);

// 4-misol:

//  Massivning ikkinchi obyektidagi city qiymatini "Farg'ona" qilib o'zgartiring.

// let cities = [
//     { id: 1, city: "Toshkent" },
//     { id: 2, city: "Namangan" },
//     { id: 3, city: "Samarqand" }
// ];

// let upd = cities.map((value, index) => {
//     if (index == 1) {
//         value.city = "Fergana";
//     }
//     return value.city

// })
// console.log(upd[1]);

// 5-misol:

// 4-obyektning email qiymatini yangi qiymat bilan almashtiring.

// let clients = [
//     { name: "Ali", email: "ali@mail.com" },
//     { name: "Vali", email: "vali@mail.com" },
//     { name: "Sami", email: "sami@mail.com" },
//     { name: "Karim", email: "karim@mail.com" }
// ];

// let client = clients.map((value, index) => {
//     if (index == 3) {
//         value.email = "karim_new@mail.com"
//     }
//     return value.email
// })
// console.log(client[3]);

// =============== 21-30: Yangi maydon qo'shish va qiymatni yangilash ===============

// 1-misol:

//  Massivning birinchi obyektiga yangi status maydonini qo'shing va qiymatini "active" deb belgilang.

// let users = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Sami", age: 20 }
// ];

// let user = users.map((value, index) => {
//     if (index == 0) {

//         value.status = "active"
//     }
//     return value
// })
// console.log(user);

// 2-misol:

// Oxirgi obyektga yangi role maydonini qo'shing va qiymatini "admin" qilib belgilang.

// let people = [
//     { name: "Ali" },
//     { name: "Vali" },
//     { name: "Sami" }
// ];

// let people1 = people.map((value, index) => {
//   if (index == 2) {
//     value.role = "admin"
//   }
//   return value
// })
// console.log(people1);

// 3-misol:

// Massivdagi barcha obyektlarga yangi isVerified maydonini qo'shing va qiymatini false qilib belgilang.

// let users = [
//     { name: "Ali" },
//     { name: "Vali" },
//     { name: "Sami" }
// ];

// users.forEach(value => {
//     value.isVerifid = false;
// })
// console.log(users);

// 4-misol:

// 2-obyektning salary qiymatini 500 ga oshiring.

// let workers = [
//     { name: "Ali", salary: 1000 },
//     { name: "Vali", salary: 1200 },
//     { name: "Sami", salary: 900 }
// ];

// let res = workers.filter((value, index) => {
//     if (index == 1) {
//         value.salary += 500;
//     }
//     return value
// })
// console.log(res);

// 5-misol:

// 4-obyektning phone qiymatining oxiriga " (updated)" qatorini qo'shing.

// let contacts = [
//     { name: "Ali", phone: "998901234567" },
//     { name: "Vali", phone: "998902345678" },
//     { name: "Sami", phone: "998903456789" },
//     { name: "Karim", phone: "998904567890" }
// ];

// let res = contacts.filter((value, index) => {
//     if (index == 3) {
//         value.phone += "(update)"
//     }
//     return value
// })
// console.log(res);

// 6-misol:

// Massivning ikkinchi obyektidagi age qiymatini ikki barobar oshiring.

// let people = [
//     { name: "Ali", age: 20 },
//     { name: "Vali", age: 25 },
//     { name: "Sami", age: 30 }
// ];

// let res = people.filter((value, index) => {
//     if (index == 1) {
//         value.age *= 2
//     }
//     return value
// })
// console.log(res);

// 7-misol:

// Oxirgi obyektga yangi joinedAt maydonini qo'shing va qiymatini "2024-07-01" qilib belgilang

// let employees = [
//     { name: "Ali" },
//     { name: "Vali" },
//     { name: "Sami" }
// ];

// let res = employees.map((value, index) => {
//     if (index == 2) {
//         value.joinedAt = "2024-07-01"
//     }
//     return value
// })
// console.log(res);

// 8-misol:

// Massivdagi 1-obyektning name qiymatiga " (CEO)" qo'shimchasini qo'shing.

// let team = [
//     { name: "Ali" },
//     { name: "Vali" },
//     { name: "Sami" }
// ];

// let team1 = team.filter((value, index) => {
//     if (index == 1) {
//         value.name += "(CEO)"
//     }
//     return value
// })
// console.log(team1);

// 9-misol:

// 3-obyektning price qiymatini 10% kamaytiring.

// let products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Phone", price: 500 },
//     { name: "Tablet", price: 300 }
// ];

// let products1 = products.map((value, index) => {
//     if (index == 2) {
//         value.price /= 10
//     }
//     return value
// })
// console.log(products1);

// 10-misol:

// Barcha obyektlarning isActive qiymatini true qilib o'zgartiring.

// let users = [
//     { name: "Ali", isActive: false },
//     { name: "Vali", isActive: false },
//     { name: "Sami", isActive: false }
// ];

// let user = users.map((value) => {
//     value.isActive = true
// })
// console.log(users);

// =============== Shartli tekshirish va qiymatlar o'zgarishi ===============

// 1-misol:

// Agar 2-obyektning status qiymati "Pending" bo'lsa, uni "Completed" qilib belgilang.

// let data = [
//     { id: 1, name: "Ali", status: "Completed" },
//     { id: 2, name: "Vali", status: "Pending" },
//     { id: 3, name: "Sami", status: "Completed" }
// ];

// data.forEach(value => {
//     if (value.status == "Pending") {
//         value.status = "Completed"
//     }
// } )
// console.log(data);

// 2-misol:

// Masala: 1-obyektning age qiymati 30 dan katta bo'lsa, "Senior" degan yangi maydon qo'shing va qiymatini true qiling.

// let data = [
//     { id: 1, name: "Ali", age: 35 },
//     { id: 2, name: "Vali", age: 25 },
//     { id: 3, name: "Sami", age: 28 }
// ];

// data.forEach(value => {
//     if (value.age > 30) {
//         value.Senior = true
//     }
// })
// console.log(data);

// 3-misol:

// Oxirgi obyektning price qiymati 100 dan kichik bo'lsa, uni 100 ga tenglashtiring.

// let data = [
//     { id: 1, name: "Product1", price: 150 },
//     { id: 2, name: "Product2", price: 80 },
//     { id: 3, name: "Product3", price: 60 },
// ];

// let data1 = data.filter((value, index, arr) => {
//     if (value.price < 100 && index == arr.length - 1) {
//        return value.price = 100
//     }

// })
// console.log(data1);

// 4-misol:

// Masala: Barcha obyektlarning role qiymatini "user" qilib yangilang, lekin oxirgi obyektning role qiymatini "admin" qilib qo'ying.

// let data = [
//     { id: 1, name: "Ali", role: "manager" },
//     { id: 2, name: "Vali", role: "guest" },
//     { id: 3, name: "Sami", role: "supervisor" }
// ];

// let res = data.map((value, index, arr) => {
//     value.role = "user"
//     if (index == arr.length -1) {
//         value.role = "admin"
//         console.log(value.role);
//     }
//     return value
// })
// console.log(res);

// 5-misol:

// Masala: 3-obyektning city qiymati "Toshkent" bo'lsa, uni "Samarqand" qilib o'zgartiring.

// let data = [
//     { id: 1, name: "Ali", city: "Buxoro" },
//     { id: 2, name: "Vali", city: "Namangan" },
//     { id: 3, name: "Sami", city: "Toshkent" }

// ];

// let res = data.map((value, index) => {
//     if (value.city == "Toshkent" && index == 2) {
//         value.city = "Samarqand"
//         console.log(value.city);
//     }
//     return value
// })
// console.log(res);

// 6-misol:

// Massivdagi obyektlarning salary qiymati 1000 dan kichik bo'lgan obyektlarga "low" degan yangi maydon qo'shing.

// let data = [
//     { id: 1, name: "Ali", salary: 900 },
//     { id: 2, name: "Vali", salary: 1200 },
//     { id: 3, name: "Sami", salary: 800 }
// ];

// let res = data.filter((value) => {
//     if (value.salary < 1000) {
//         value.low = ""
//     }
//     return value
// })
// console.log(res);

// 7-misol:

//  2-obyektning email qiymati "@gmail.com" bilan tugasa, " (verified)" qo'shimchasini kiriting.

// let data = [
//     { id: 1, name: "Ali", email: "ali@yahoo.com" },
//     { id: 2, name: "Vali", email: "vali@gmail.com" },
//     { id: 3, name: "Sami", email: "sami@mail.com" }
// ];

// let res = data.map((value) => {
//     if (value.email.includes("@gmail.com")) {
//         value.email = `${value.email} (verified)`
//     }
//     return value
// })
// console.log(res);

// 8-misol:

// Oxirgi obyektga yangi lastLogin maydonini qo'shing va qiymatini hozirgi sanaga tenglashtiring.

// let data = [
//     { id: 1, name: "Ali" },
//     { id: 2, name: "Vali" },
//     { id: 3, name: "Sami" }
// ];

// let res = data.map((value, index, arr) => {
//     if (index == arr.length -1) {
//         value.lastLogin = "2024-12-18"
//         console.log(value);
//     }
//     return value
// })
// console.log(res);

// 9-misol:

//  Agar 1-obyektning stock qiymati 0 bo'lsa, "isAvailable" maydonini false qilib belgilang.

// let data = [
//     { id: 1, name: "Product1", stock: 0 },
//     { id: 2, name: "Product2", stock: 5 },
//     { id: 3, name: "Product3", stock: 10 }
// ];

// let data1 = data.filter((value, index) => {
//     if (value.stock == 0 && index == 0) {
//         value.isAvailable = false
//     }
//     return value
// })
// console.log(data1);

// 1-misol:

// Massivdagi har bir obyektning status qiymatini "Inactive" qilib yangilang, lekin birinchi obyektni "Active" qoldiring.

// let data = [
//     { id: 1, name: "Ali", status: "Pending" },
//     { id: 2, name: "Vali", status: "Active" },
//     { id: 3, name: "Sami", status: "Completed" }
// ];

// let res = data.map((value) => {
//     if (value.status !== "Active") {
//         value.status = "Inactive"
//     }
//     return value
// })
// console.log(res);

// 2-misol:

// Massivdagi obyektlarning price qiymati 500 dan katta bo'lgan obyektlarning isExpensive qiymatini true qilib belgilang.

// let data = [
//     { id: 1, name: "Product1", price: 600 },
//     { id: 2, name: "Product2", price: 400 },
//     { id: 3, name: "Product3", price: 800 }
// ];

// let res = data.filter((value) => {
//     if (value.price > 500) {
//         value.isExpensive = true
//     }
//     else {
//         value.isExpensive = false
//     }
//     return value
// })
// console.log(res);

// 3-misol:

// 2-obyektning salary qiymati >= 1000 bo'lsa, "High salary" degan yangi maydon qo'shing va qiymatini true qilib belgilang.

// let data = [
//     { id: 1, name: "Ali", salary: 900 },
//     { id: 2, name: "Vali", salary: 1000 },
//     { id: 3, name: "Sami", salary: 800 }
// ];

// let data1 = data.map((value) => {
//     if (value.salary >= 1000) {
//         value.HighSalary = true
//     }
//     else {
//         value.HighSalary = false
//     }
//     return value
// })
// console.log(data1);
