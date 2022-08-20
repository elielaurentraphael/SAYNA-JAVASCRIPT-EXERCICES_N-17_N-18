/*
const elet = document.getElementsByTagName("h1")[0];
let value = elet.childNodes[0].nodeValue;
console.log(value);
const para = document.createElement("p");
para.textContent = value;
document.querySelector("body").appendChild(para);
*/

const elet = document.querySelectorAll("h1")[0];
let value = elet.childNodes[0].nodeValue;
console.log(value);
const para = document.createElement("p");
para.textContent = value;
document.querySelector("body").appendChild(para);
