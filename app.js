// 1. Palindromik son

// function palindrom(n) {
//   let result = n.toString().split("").reverse().join("");
//   if (n < 10 && n > 0) {
//     return true;
//   } else if (+result === n) {
//     return true;
//   } else {
//     return false;
//   }
// }
// [];
// console.log(palindrom(1231)); // false
// console.log(palindrom(12521)); // true
// console.log(palindrom(5)); // true

// 2. keyingi sonni topish

// function nextNumber(...rest) {
//   let r = rest[1] - rest[0] + rest[rest.length - 1];

//   rest.push(r);

//   return rest;
// }

// console.log(nextNumber(1, 3)); // next number 5
// console.log(nextNumber(10, 20, 30, 40)); // next number 50
// console.log(nextNumber(11, 22, 33)); // next number 50

// 3.  Object ichidagi sonlar yigindisini toping ?

// function objectSum(obj) {
//   return Object.values(obj)
//     .filter((n) => n !== Boolean(n) && !isNaN(n) && n !== [] && n !== {})
//     .reduce((sum, n) => sum + +n, 0);
// }

// console.log(objectSum({ a: 5, b: 6 })); // 11
// console.log(objectSum({ a: 5, b: "6", c: true })); // 11
// console.log(objectSum({ a: 5, b: "65", c: "salom" })); // 11

// 4. Dublicate number

// function dublicateNumber(rest) {
//   return Number(Array.from(new Set(rest.toString().split(""))).join(""));
// }

// console.log(dublicateNumber(1231)); //123
// console.log(dublicateNumber(11122232344545)); //12345

// 5. Oxiridagi ? larni olib tashlang

// function lastStr(str) {
//   let i = str.length - 1;

//   while (i >= 0 && str[i] === "?") {
//     i--;
//   }
//   return str.slice(0, i + 1);
// }

// console.log(lastStr("salom??")); // "salom"
// console.log(lastStr("???sa?lom?????")); // "sa?lom"
