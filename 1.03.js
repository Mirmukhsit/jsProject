
// let arr = ["test12a", "best13b", "test14larc", "last4d", "car9devise", "com1pyuter", "okay5"];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j]*0==0) {
//             sum=sum+ +arr[i][j];
//         }
//     }
// }
// console.log(sum);

// Objects

// let user = {
//     name: "Jasur",
//     sayHello: function() {
//         console.log("Hi", this.name);
//     },
//     saybye: () => {
//         console.log("bye");
//     }
// }
// user.sayHello();
// user.saybye();


// let arr = [
//     { id: 1, age: 23, name: "Davron", address: "Toshkent" },
//     { id: 2, age: 19, name: "Botir", address: "Samarqand" },
//     { id: 3, age: 22, name: "Rashid", address: "Jizzax" },
//     { id: 4, age: 16, name: "Islom", address: "Buxoro" },
//     { id: 5, age: 21, name: "Ilyoz", address: "Namangan" },
//     { id: 6, age: 20, name: "Hasan", address: "Andijon" },
//     { id: 7, age: 11, name: "Azizbek", address: "Buxoro" },
// ];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].age >= 20) {
//         console.log(`${arr[i].name} ${arr[i].address}dan id si ${arr[i].id}ga teng`);
//     }
// }

// 2.03

// let arr = [
//     { id: 1, age: 23, name: "Davron", address: "Toshkent" },
//     { id: 2, age: 19, name: "Botir", address: "Samarqand" },
//     { id: 3, age: 22, name: "Rashid", address: "Jizzax" },
//     { id: 4, age: 16, name: "Islom", address: "Buxoro" },
//     { id: 5, age: 21, name: "Ilyoz", address: "Namangan" },
//     { id: 6, age: 20, name: "Hasan", address: "Andijon" },
//     { id: 7, age: 11, name: "Azizbek", address: "Buxoro" },
// ];

// ism bo'yicha qidirish

// function onSearch(x) {
//     let arr2 = arr.filter(val => val.name.toLowerCase().includes(x.toLowerCase()) || 
//                                 val.name.toUpperCase().includes( x.toUpperCase()) );
//     return arr2;
// }
// let a = onSearch("i");
// console.log(a);

// function onDelete(id) {
//     let arr2 = arr.filter(val => val.id != id);
//     return arr2;
// }
// let a = onDelete(2);
// console.log(a);


// id boyicha o'chirish

// function onDelete(id) {
//     let a = arr.filter(val => val.id == id)[0];
//     arr.splice(arr.indexOf(a), 1);
//     return arr;
// }
// let a = onDelete(2);
// console.log(a);


// obyekt qo'shish

// function onCreate(create) {
//     arr.push(create);
//     return arr;
// }

// let a = onCreate({id: 8, age: 33, name: 'Olim', address: 'Samarqand'});
// console.log(a);

// function onCreate(a, b, c) {
//     arr.push({ id: arr.length+1, age: a, name: b, address: c });
//     console.log(arr);
// }
// onCreate(55, "Komil", "Andijon");
