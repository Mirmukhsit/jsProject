// let car = "Matiz"; // "Damas", "Matiz", "Lacetti";
// let d = 125; // 125, 50, 450;
// let litr = 3.5; // 10, 3.5, 45;
// if ("Lacetti" && d*10/100 == 45) {
//     console.log("Lacetti", litr, "litr sarflaydi");
// }
// else if ("Damas" && d*8/100 == 10) {
//     console.log("Damas", litr, "litr sarflaydi");
// }
// else if ("Matiz" && d*7/100 == 3.5) {
//     console.log("Matiz", litr, "litr sarflaydi");
// }
// else {
//     console.log("topa olmadi");
// }

let a = Math.floor(Math.random()*21+50)
let b = Math.floor(Math.random()*31+100)
let c = a + b
let d = Math.pow(c, 1/4)
console.log("a=",a);
console.log("b=",b);
console.log("(a+b)^1/4=",d);

let e = Math.floor(d)
console.log("shu sonning yaxlitlangani:",e);

if (e % 2 == 0) {
    console.log("juft");
}
else {
    console.log("toq");
}
