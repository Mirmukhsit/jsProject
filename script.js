// let a=3
// let b=4
// let c=((a**2)+(b**2))**0.5
// let c=(a+b)*2
// let d=a*b

// console.log((a+b)*2)
// console.log(a*b)

// console.log(c)
// console.log(d)

// 12-question
// console.log(Math.sqrt((a**2)+(b**2)))
// console.log(a+b+c)

// 11-question
// let c=a+b
// let d=a*b
// console.log(c)
// console.log(d)
// console.log(Math.abs(a))
// console.log(Math.abs(b))

// 1-question
// console.log(4*a)

// 3-question
// let s=a*b
// let p=2*(a+b)
// console.log(s,p)

// quetion 4
// let L=3.14*(a)
// console.log(L)

// question 5
// let V=a**3
// let S=6*a*2
// console.log(V,S)

// let a=13
// if (a % 2==0) {
//     console.log("even");
// }
// else {
//     console.log("odd");
// }

// 9.02.2023

// let a=11
// let b="11"
// if (a===b) {
//     console.log("true");
// }
// else {
//     console.log("false");
// }


// let a= 60;
// if (a<=100 && a>=86) {
//     console.log("5");
// }
// if (a<=85 && a>=75) {
//     console.log("4");
// }
// if (a<=74 && a>=60) {
//     console.log("3");
// }
// if (a<=59) {
//     console.log("fail");
// }


// let a=4;
// let b=2;
// let c=a**2+b**2;
// if (c % 2==0) {
//     console.log("even");
// }
// else {
//     console.log("odd");
// }
// console.log(c);



// 4 ta ozgaruvchi mavjud agar birinchi ozgaruvchi va ikkinchi ozgaruvchilar 3ga bolgandagi qoldiqlari yigindisi  juft bolsa va uchunchi tortinchi 
// ozgaruvchilar 4 ga bolgandagi qoldiqlari yigindisi 15 dan katta bolsa egranga barcha ozgaruvchilar yigindisi chiqarilsin aks holda yaroqsiz ozgaruvchilar 
// degan soz chiqarilsin

// let a=2;
// let b=2;
// let c=3;
// let d=4;

// let sum=a+b+c+d;

// if ((a%3+b%3)%2==0 && c%4+d%4>2) {
//     console.log(sum);
// }
// else {
//     console.log("yaroqsiz");
// }



// 10.02.2023

// let a="5", b=8;
// if (a/5==1 && b%2==0) {
//     console.log(a);
// }
// else {
//     console.log(b);
// }

// let a=45;
// if (a%3==0 && a%5==0) {
//     console.log("3 ga ham 5 ga ham bolinadi");
// }
// else if (a%5==0) {
//     console.log("5 ga bolinadi");
// }
// else if (a%3==0) {
//     console.log("3 ga bolinadi ");
// }
// else {
//     console.log("3 ga ham 5 ga ham bolinmaydi");
// }


// 13.02.23

// let key=3;
// switch (key) {
//     case 1:
//         console.log("bu bir");
//         break;
//     case 2:
//         console.log("bu ikki soni");
//         break;

//     default:
//         console.log("bu noto'g'ri son");
//         break;
// }

// let key="olma";
// switch (key) {
//     case "olma":
//         console.log("undan sharbat tayyorlash kk");
//         break;
//     case "behi":
//         console.log("undan osh tayyorlash kk");
//         break;
//     case "anor":
//         console.log("uni yeyish kerak");
//         break;
//     case "limon":
//         console.log("u bilan choy ishish kerak");
//          break;

//     default:
//         console.log("bunday meva yo'q");
//         break;
// }

// let d = key == "olma" ? "undan sharbat tayyorlash kk" :
//     key == "behi" ? "undan osh tayyorlash kk" :
//     key == "anor" ? "uni yeyish kerak" :
//     key == "limon" ? "u bilan choy ishish kerak" :
//     "bunday meva yo'q";
// console.log(d);



// let lkm = 450;
// let llitr = 45;
// let Lacetti = lkm*10/100 ? llitr : ;
// console.log(llitr);


// let Damas = 8;
// let dkm = 50;
// let dlitr = 4;
// if (dkm*Damas/100==dlitr) {
//     console.log("4 litr sarflaydi");  
// }
// else {
//     console.log("0");
// }

// let Matiz = 7;
// let makm = 50;
// let malitr = 3.5;
// if (makm*Matiz/100==malitr) {
//     console.log("3.5 litr sarflaydi");
// }
// else {
//     console.log("0");
// }

// 14.02.23

// let a = Math.floor(3.6);
// console.log(a);
 
// console.log(Math.floor(Math.random()*50+51));

// let a = Math.floor(Math.random()*51+50)
// if (a % 2 == 0) {
//     console.log(a, "juft son");
// }
// else {
//     console.log(a, "toq son");
// }

// console.log(((null && false) ?? true) || (false ?? undefined) && null);



// let a = Math.random()*21+50;
// let b = Math.random()*31+100;
// let c = Math.floor(a + b) ;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(Math.pow(c, 1/4));


// 15.02.23

// functions

// Function declaration
// function calcl(a, b) {
//   console.log(a*b);
// };
// calcl(5, 6);

// Function expression
// const calc = function(a, b) {
//   console.log(a*b);
// };
// calc(7, 8);

// Arrow function
// let myFunction = (a, b) => console.log(a * b);
// myFunction(4,5)


// 16.02.23

// 1-misol

// Function declaration
// function compare(a, b) {
//   if (a == b) {
//     console.log("bu sonlar teng");
//   }
//   else if (a > b) {
//     console.log(a, "soni", b, "sonidan katta va bular teng emas");
//   }
//   else if (a < b) {
//     console.log(b, "soni", a, "sonidan katta va bular teng emas");
//   }
// }
// compare(9, 9);

// Function expression
// let compare = function(a, b) {
//   if (a == b) {
//     console.log("bu sonlar teng");
//   }
//   else if (a > b) {
//     console.log(a, "soni", b, "sonidan katta va bular teng emas");
//   }
//   else if (a < b) {
//     console.log(b, "soni", a, "sonidan katta va bular teng emas");
//   }
// };
// compare(25, 9);

// Arrow function
// let compare = (a, b) => {
//   if (a == b) {
//   console.log("bu sonlar teng");
// }
// else if (a > b) {
//   console.log(a, "soni", b, "sonidan katta va bular teng emas");
// }
// else if (a < b) {
//   console.log(b, "soni", a, "sonidan katta va bular teng emas");
// }};
// compare(5, 9);

// 2-misol

// function cubesum(a, b, c, d) { 
//   console.log(Math.pow(a, 3)+Math.pow(b, 3)+Math.pow(c, 3)+Math.pow(d, 3));
//   if ((Math.pow(a, 3)+Math.pow(b, 3)+Math.pow(c, 3)+Math.pow(d, 3)) %2 == 0) {
//     console.log("bu sonlarning kublarining yeg'indisi juft son");
//   }
//   else{
//     console.log("bu sonlarning kublarining yeg'indisi toq son");
//   }
// };
// cubesum(1, 2, 5, 4);


// 3-misol

// function sumDigits(n) {
//   let a = Math.trunc(n/100);
//   let b = Math.trunc(n/10)-Math.trunc(n/100)*10;
//   let c = n-Math.trunc(n/10)*10;
//   console.log(c+b+a);
// }
// sumDigits(123);

// 17.02.23

// let a = "Abbos";
// console.log(a.slice(0, 5));

// let str="Student";
// console.log(str.slice(3, 7));
// console.log(str.indexOf("d"));
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// 24579 raqamlar yig'indisini topish

// let a = 24579;
// let sum = 0;
// for (let i = 0; i < (String(a)).length; i++) {
//   sum = sum + (Number(String(a)[i]))
// }
// console.log(sum);




// let sum = 0;
// for (let i = 0; i<=120; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
    
//   }
//   sum += i
// }
// console.log(sum);
// if (sum % 2 == 0) {
//   console.log("even");
// }
// else {
//   console.log("odd");
// }


// 20.02.23

// let num = "252383";
// if (num.length % 2 == 1) {
//   console.log(+num[Number.parseInt(num.length / 2)]);
// }
// else {
//   let a = Number(num[num.length / 2 - 1]);
//   let b = Number(num[num.length / 2]);
//   console.log(a,b);
//   console.log((a+b)/2);
// }

// let num = "46873";
// let max = num[0];
// let min = num[0];

// for (let i = 0; i<num.length; i++) {
//   if (max<num[i]) {
//     max=num[i]
//   }
//   if (min>num[i]) {
//     min=num[i]
//   }
  
// }
// console.log(max, min);

// function findAll(a) {
//   let s = 0
//   while (a>0) {
//     a=Number.parseInt(a/10);
//     s++
//   }
//   return s;
// }
// console.log(findAll(984564364576454));

// function findAll(a) {
//   let s = 0;
//   while (a>0) {
//     s = s + a % 10
//     a = Number.parseInt(a/10);
//   }
//   return s;
// }
// console.log(findAll(455));

// 21.02.23

// function str(a) {
//     let s = 0;
//     let i = 0;
//     while (i<a.length) {
//         if (a[i]=="a" || a[i]=="A") {
//             s++
//         }
//         i++
//     }
//     return s;
// }
// console.log(str("WebBrainAcadAmya"));

// 2
// let str = "WebBrainAcadAmya"
// let s = "";
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == str[i].toUpperCase()) {
//       s = s + str[i]
//     }
// }
// console.log(s);

// 1
// let str = "WebBrainAcadAmya"
// let s = '';
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == str[i].toUpperCase()) {
//         s = s + str[i]
//         s++
//     }
    
// }
// console.log(s);


// 3
// let s = "3608d75h";
// let b = "";
// for (let i = 0; i < s.length; i++) {
//     if (s[i]*0 == 0 ) {
//         b = b + s[i]
//     }
//     else{ 
//         break;}
    
// }
// console.log(b);


// 4
// let i = 1;
// while (i<100) {
//     if (i % 3 == 0 && i % 7 == 0) {

//         console.log(i);
//     }
//     i++
// }


// 6
// let s = "3608d75h";
// let b = 0;
// for (let i = 0; i < s.length; i++) {
//     if (s[i]*0 == 0 ) {
//         b = b + Number(s[i]);
        
//     }
    
// }
// console.log(b);

//7
// let str = "39aopjp156ca64";
// let a = "";
// for (let i = 0; i < str.length; i++) {
//     if (str[i] != Number(str[i])) {
//         a +=  str[i]
//     }
    
// }console.log(a);

// 22.02.23

// let arr = [2, 5, "Begzod", "Madina", "test", undefined, 3, true]//, "olma", "banan"];
// console.log(arr);
// console.log(arr.length);
// arr.push(5, "anor");
// console.log(arr);
// arr.unshift("Olim", 2);
// console.log(arr);
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);
// arr.shift()
// arr.shift()
// arr.shift()
// console.log(arr);
// arr[5] = "b"
// console.log(arr);
// let arr2 = ["Temur","Rashid","Jasur"];
// console.log(arr.concat(arr2));

// let arr = ["Temur", "Rashid", "Jasur"];
// let len = arr[1].length
// console.log(len);
// let s=0;
// for (let i = 0; i < arr[0].length; i++) {
//     s++
    
// }
// console.log(s);

// o'zida 10 ta malumot saqlaydigan arrray yarating, ulardan 4 tasi "number", 
// 4 tasi "string"  va qolgan 2 tasi true va false bo'lsin.
// arraydan sonlarni ajratib olib yeg'indisini hisoblang.

// var arr = [45, "sabzi", 70, "uzum", 5, "pomidor", 24, "behi", true, false];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "number") {
//         sum += arr[i];
//     }

// }
// console.log(sum);
