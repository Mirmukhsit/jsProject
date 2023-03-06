// functions

// Function declaration
// function calcl(a, b) {
//   console.log(a*b);
// };
// calcl(5, 6);

// Function expression
// let calc = function(a, b) {
//   console.log(a*b);
// };
// calc(7, 8);

// Arrow function
// let myFunction = (a, b) => {console.log(a * b);};
// myFunction(4,5)


// 17.02.23

//quotes bizda 3 hil quotes bor "",'',``

// console.log("o'qituvchi");
// console.log('O"qituvchi');
// let a = 12;
// console.log("${a} ning qiymati uning yoshiga teng");
// helpers
// console.log("\t best");
// console.log("this is our \n best lesson");

// string data type
//
// let names = "Abbos";
// let b = names.slice(1, 4); string xarfi ajratib beradi
// console.log(names[4]); string xarfi ajratib beradi
// console.log(names.length); string uzunligi
// console.log(b);
//
// indexOf-string ichida  malum harfning  tartib raqamini olish uchun ishlatiladi
// let str = "Salom";
// let s = str.indexOf("l");
// console.log(s);
//
// toLowerCase() text ichidagi katta harflarni kichikiga aylantirib beradi
// let str = "This Is Just Text";
// console.log(str.toLowerCase());
// 
// toUpperCase() harflarni kattasiga ogirib beradi
// console.log(str.toUpperCase());
//
// typeOf()-malumotlarni qaysii data turiga kirishini aniqlab beradi
// function fff() {}
// let a;
// console.log(typeof a);
// let str = 12;
// let num = "23";
// let r = +num;  stringdan songa o'tkazib beradi
// let r = Number(num);  stringdan songa o'tkazib beradi
// let t = String(str);
// console.log(typeof t);



//
// for
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

//  string tipidagi numlar beriladi uning raqamlari yigindisi topilsin
//
// let num = "123452";
// console.log(typeof num[0]);
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//     sum = sum + (+num[i])
// }
// console.log(sum);


// while
// do while
    // break
    // continue

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// let i = 15;
// do {
//     console.log(i);
//     i--;
// // } while (i > 0)

// let num = "7654383";
// let last;
// for (let i = 0; i < num.length; i++) {
//     if (num[i] == "4") {
//         last = num[i]
//         continue;
//     }
//     console.log("ishladi");

// }
// console.log(last);

// 22.02.23

//array(massiv)-bir vaqtning ozida bir nechta turli tipli 
//qiymatlarni ozida jamlay oladigan toplam hisoblanadi

// Array yaratshning ikki hil usuli bor
//1)usuli
// let arr = [];
// console.log(arr);
//2)usul- new kalit sozi orqali 
// let arr2 = new Array();
// console.log(arr2);

// let arr = [12, 3, 6, "test", undefined, 3, true, false];
// let str = "student";
// console.log(str[3]);

// Array ichidan malumot olish
// console.log(arr[3]);

//Array methods
//arrayga oxiridan elelmetlar qoshish uchun push() methodi ishlatiladi push 
//mrthodi ichiga hohlagancha  malumot yozish mn 
// let arr = [5, 67, 8, 9, 3];
// console.log(arr);
// arr.push(4, 5);
// console.log(arr);

// arrayga boshidan elemntlar qoshish uchun unshift() methodi foydalaniladi
// let arr = [67, 8, 9, 3];
// console.log(arr);
// arr.unshift(9, 4);
// console.log(arr);

// array oxiridan bitta elemnt ochirish uchun pop() 
//methodidan foydalanish kerak
// let arr = [67, 8, 9, 3];
// console.log(arr);
// arr.pop();
// console.log(arr);

// array boshidan bitta elemnt ochirish shift()  
// methodi ham parametr olmaydi



//CRUD
//C - create=>malumot qoshish uchun
//R - (read)=>malumot ni oqib olish uchun 
//U- Update=>malumotni ozgartirish uchun
// D - delete=>malumotni ochirish uchun
//Array elentini ozgartirish
// let arr = ["olma", "behi", "limon", "anor"];
// arr[2] = "mandarin";
// console.log(arr[2]);

// arrayning uzunligini topish uchun(array ichida nechta malunot borligini aniqlash )
// let arr = ["olma", "behi", "limon", "anor", 4, undefined];
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);

//ikkita arrayni qoshish uchun concat() methodidan foydalaniladi
// let arr1 = new Array("olma", "behi");
// let lim = "limon";
// let arr2 = ["mandarin", lim]
// console.log(arr1);
// console.log(arr2);
// let lastArr = arr1.concat(arr2);
// console.log(lastArr);

// 23.02.23

// delete
// array ichidagi istalgan elemntni ochirish  delete vazifasi 
// osha elmntni ochiradi faqat u turgan joy qoladi 
// let arr = ["olma", "behi", "limon", "mandarin"]; //["olma",<empty item>, "limon", "mandarin"];
// console.log(arr);
// delete arr[1];
// delete arr[1];
// console.log(arr);

// splice ushbu method aray ichidan hohlagan elemntni ochirishi
// mumkun istalgan joydan boshlab elemnt qoshishi mumkun
// splice ichida yozilgan parametrlarning birinchi index 
// ikkinchi parametri  count(nechta) 
// keyingi parametrlari hammasi arrayga qoshiladugan elentlar boladi
// let arr = ["olma", "behi", "limon", "mandarin", "banan"];
// arr.splice(2, 1, "tarvuz");
// console.log(arr);

// slice array ichidan elemntlarni kopiravat qilib olib beradi
// let arr = ["olma", "behi", "limon", "mandarin", "banan", 5, 7, 8];
// let arr2 = arr.slice(2);
// let arr3 = arr.slice(2, 5);
// let news = ["olma", "behi", "limon"];
// console.log(arr2);
// console.log(arr3);

//indexOf elemntlarnigindexini aniqlab beradi 
// let arr = ["olma", "behi", "limon", "mandarin", "banan", 5, "olma", 8];
// arr.splice(arr.indexOf("olma"), 1);
// console.log(arr);
// lastindexOf()


// reverse()- array ichidagi malumotlarni teskarti tartibda joylashtrib beradi
// let arr = ["olma", "behi", "limon", "mandarin", "banan", 5, "olma", 8];
// arr.reverse();
// console.log(arr);

//sort() bu method array ichidagi elemntlarni tartiblab beradi
// let arr = [6, 7, 233, 12, 0, 6, -1];
// arr.sort((a, b) => a - b);
// console.log(arr);









// 27.02
// innitial value-boshlang'ich qiymati


// includes()
// let a=["this"];
// console.log(a.includes("this"));  arrayda yoki stringda shu array yoki element borligini aniqlab beradi

// arr2.sort((a, b) => a - b);
// // arr2.reverse();
// console.log(arr2);

// console.log(arr.find((val, inx) => val % 2 == 0 )); // shartga to'g'ri kelgan faqat birinchi qiymatni oladi

// console.log(arr.filter((val, inx) => val % 2 == 0 )); // shartga to'g'ri kelgan barcha qiymatlarni "arrayda" oladi

// let str = "this is a car";
// let a = str.split(""); // arrayga shart boyicha ajratib beradi
// console.log(a);

// let b = a.join(" "); // shart bo'yicha arrayni stringa qo'shib beradi
// console.log(b);

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.map((val, inx) => `${val} ning indexi ${inx} ga teng`)); yangi array qaytaradi, qo'shadi

// console.log(arr2.reduce((sum, val, inx, array) => sum+val, 0)); array ichidagi elementlarni qo'shadi


// biror bir metod yoki funksiyalarda parametr sifatida keladigan metod colback function deyiladi






// 1.03
// Objects

//Objects=> bir nechta malumotlar toplamini key va value
// korinishida saqlashi mumkun bolgan maolumot hisoblanadi

// object ni elon qilish tipi object 
// let objName = {
//     name: "Jasur",
//     address: "Tashkent",
//     email: "example@gmail.com",
//     tel: 9798554955,
// }

// object xosslarini olish 
// object xossalarini olishning hil usuli bor
// 1)
// console.log(objName.address, objName.email);
// 2)
// console.log(objName["name"]);



/// nested object

// let objName = {
//     name: "Jasur",
//     address: {
//         city: "tashkent",
//         viloyat: "Tashkent",
//         street: "naqqoshlik",
//     },
//     email: "example@gmail.com",
//     tel: 9798554955,
// }
// console.log(objName.address.viloyat);

////////////////////////////////
// let arrr = [
//     [1, 2, 3, 4],
//     [2, 3, 4, 6],
//     [45, 56, 67, 0]
// ];
// console.log(arrr[2][2]);

// let arr = [
// { id: 1, name: "Jasur", address: "Tashkent"}, 
// { id: 2, name: "Jamshid", address: { street: "naqqoshlik" }},
// { id: 3, name: "Botir", address: "Jizzax"}];

// console.log(arr[1].address.street);


// let obj = {
//     name: 'Jasur',
//     address: ["toshkent", 12],
// }
// console.log(obj.address[1]);


////object methods

// Object.keys()
// Object.values()
// Object.entries()

// let user = {
//     name: "Temur",
//     email: "example@gmail.com",
//     tel: 952321456
// }
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


// 3.03

//... sread operator

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [5, 6, 7, 8, 9, ...arr];
// console.log(arr);
// console.log(arr2);



// array destructuring

// let arr = ["olma", [1, 2, 3], "olma", "behi", "banan", "anor"];
// let meva = "olma";
// let [yomaloq, [bir, ikki, uch], uchburchak, piramida, an] = arr;
// console.log(uch);


//object destructuring

// let obj = {
//     name: "temur",
//     email: "tyttyyt",
//     address: {
//         num: 3,
//         viloyat: "ppppppppp",
//         city: {
//             tel: 67576576
//         }
//     },
//     street: "naqqoshlik",
// };
// let { name: n, email, address: { num, viloyat, city: { tel } }, street: s } = obj;
// console.log(tel);




//optional chaining(?)

// let obj = {
//     name: "temur",
//     email: "tyttyyt",
//     address: {
//         num: 3,
//         viloyat: "ppppppppp",
//         citys: {
//             tel: 67576576
//         }
//     },
//     street: "naqqoshlik",
// };
// console.log(obj?.address.city.test);
