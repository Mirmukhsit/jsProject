
// let arr=[ "olma", "behi", "anorlar", "olcha", "limonlar", true, false, "Tarvuz", 12, 16];

// // 1
// console.log(arr.filter((val, inx) => val.length>5 ));

// // 2
// console.log(arr.map((val, inx) => val+" "+typeof val));

// // 3
// console.log(arr.find((val, inx) => val.length == 8));

// 4
// let str="this is my favourite IT Course"; //=>(Course IT favourite my is this);
// let arra=str.split(" ");
// console.log(arra);
// let reverse=arra.reverse();
// console.log(reverse);
// let add=reverse.join(" ");
// console.log(add);

// 5

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "number" || arr[i][0]=="o") {
//         delete arr[i]
//     }
// }
// console.log(arr);


// console.log(arr.filter(val => typeof val != "number" && val[0]!="o"));
// 1ta olib tashlash
// shift     boshi
// pop       oxiri

// lar qo'shish
// unshift   boshi
// push      oxiri

// let arr2 = [1, 2, 3, 4, 5, 6];

// console.log(arr2.reduce((sum, val) => sum+val, 0));
// let a = arr2.filter(val=> val%2==0).reduce((sum, val) => val+sum, 0);
// console.log(a);

// console.log(arr2.map(val => `${val} ${val%2==1 ? "toq":"juft"} `));
// console.log(arr2.map(val => `${val} ${val%2==0 && "juft" || "toq"} `));


// let a = 12;
// let b = 16;
// a=b+a;
// b=a-b;
// a=a-b;
// console.log(a);
// console.log(b);

