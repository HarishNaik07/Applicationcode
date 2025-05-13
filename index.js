const radius = [3,2,4,2];

const area = function (radius){
    return Math.PI*radius*radius;
};

const calculate = function(radius,logic){
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output;
}
console.log(calculate(radius,area));
// const ccalculatedArea = function (radius){
//     const output = [];
//     for(i=0;i<radius.length;i++){
//         output.push(Math.PI*radius[i]*radius[i]);
//     }
//     return output;
// }
// console.log(ccalculatedArea(radius));


//function declaration
// function tipper(a){
//     var bill = parseInt(a);
//     console.log(bill+5)
// }
// tipper("5");

//Variable declaration
// var bigTipper = function (a){
//     var bill = parseInt(a)
//     console.log(bill+15);
// };
// bigTipper("200");

//this keyword

//slice and splice method
var users=['Ted','Tim','Ton','Sam','Sor','Sood'];
console.log(users.slice(1,4));
users.splice(2,4);
console.log(users);

//Arrays
var countries = ["India","USA","USA","Russia"];
var states = ("Bangalore","Mysore","Chikkamaglore","Balliganur");

var users = ["harish","harish@gmail.com",3,34,"true"];
console.log(users);
users.pop();
users.pop();
//console.log(users);
users.unshift("New Value");
//console.log(users);
users.shift();
//console.log(users);
console.log(users.indexOf(3));

console.log(Array.from("harish"));


//callback and arrow function
var isEven=(element)=>{
// if(element % 2 ===0){
//     return true;
// }else{
//     return false;
// }
return element % 2 === 0 ;
}
//console.log(isEven(3));
//  var result = [2,4,6,8,11].every(isEven);
// console.log(result);

var result = [2,4,6,8].every((e)=>(e % 2 ===0));
console.log(result);

//Fill and Filter array in js
const user =[2,4,6,8,10,11];
console.log(user.fill("hii",2));

//forloop
//Debouncing
// // A function that makes an API call with the search query
// function searchHandler(query) {
//     // Make an API call with search query
//     getSearchResults(query);
// }
// // A debounce function that takes a function and a delay as parameters
// function debounce(func, delay) {
//     // A timer variable to track the delay period
//     let timer;
//     // Return a function that takes arguments
//     return function(...args) {
//         // Clear the previous timer if any
//         clearTimeout(timer);
//         // Set a new timer that will execute the function after the delay period
//         timer = setTimeout(() => {
//             // Apply the function with arguments
//             func.apply(this, args);
//         }, delay);
//     };
// }
// // A debounced version of the search handler with 500ms delay
// const debouncedSearchHandler = debounce(searchHandler, 500);
// // Add an event listener to the search bar input

// searchBar.addEventListener("input", (event) => {
//     // Get the value of the input
//     const query = event.target.value;
//     // Call the debounced search handler with the query
//     debouncedSearchHandler(query);
// });


let num = [2,4,5,0,0,2,5];

const nonZeros =[];
const zeros = [];
for(let i=0;i<num.length;i++){
    if(num[i]!==0){
        nonZeros.push(num[i]);
    }else{
        zeros.push(num[i])
    }
}
const result1 =[...nonZeros,...zeros];
console.log(result1);

function add(x){
    return function(y){
        return x+y;
    } 
}
const addTwo=add(2);
console.log(addTwo(3));
console.log(add(3)(6));


const no = [2,3,4,5,6,7,8];
console.log(no.slice(1,5));
console.log(no.splice(1,4));
console.log(no);


console.log("5" == 5);
console.log("5"===5);


//Polyfills In JavaScript

//1.map Method polyfill

// Array.prototype.myMap = function(cb){
//     let temp =[];
//     for(let i=0;i<this.length;i++){
//         temp.push(cb(this[i],i,this));
//     }
//     return temp;
// };
// const array = [1,2,3,4,5];
// const res = array.myMap((num,i,arr)=>{
//     return num*2;
// });
// console.log(res);

//2. filter method in polyfill

// Array.prototype.myFilter = function(cb){
//     let temp = [];
//     for(let i=0;i<this.length;i++){
//         if(cb(this[i],i,this)) temp.push(this[i]);
//     }
//     return temp;
// };
// const array = [1,2,3,4,5];
// const res = array.myFilter((num,i,arr)=>{
//     return num > 2;
// });
// console.log(res);

//3.reduce method in polyfill
// syntax for reduce method---> arr.reduce((acc,curr,i,arr)=>{},initialValue)

// Array.prototype.myReduce=function(cb,initialValue){
//     var accumulator = initialValue;

//     for (let i=0; i<this.length; i++){
//         accumulator = accumulator ? cb(accumulator,this[i],i,this):this[i];
//     }
//     return accumulator;
// }
// const array = [1,2,3,4,5];
// const res = array.myReduce((acc,curr,i,arr)=>{
//     return acc+curr
// },0);
// console.log(res);

//.5 call method in polyfill
let car = {
    color:"Red",
    company:"Ferrari",
}

function purchaseCar(currency,price){
    console.log(`I have purchased ${this.color},${this.company} car for ${currency} ${price}`);
}

// Function.prototype.myCall = function(context = {}, ...args){
//     if(typeof this !=='function'){
//         throw new Error (this + "Its not callable function");
//     }
//     context.fn = this;
//     context.fn(...args);
// }
// purchaseCar.myCall(car,"₹",5000000);
//purchaseCar.call(car,"₹",5000000);

//6.apply method in polyfill
// function purchaseCar(currency,price){
//     console.log(`I have purchased ${this.color} - ${this.company} car for ${currency} ${price}`);
// }

// Function.prototype.myApply = function(context = {},args=[]){
//     if(typeof this !=='function'){
//         throw new Error (this + "Its not callable function");
//     }

//    if(!Array.isArray(args)){
//     throw new TypeError("createList Format like called on non-object")
//    }

//     context.fn = this;
//     context.fn(...args);
// }
// purchaseCar.myApply(car,["₹",5000000]);


//7.bind method in polyfill

// Function.prototype.myBind = function(context = {},...args){
//     if(typeof this !=='function'){
//         throw new Error (this + "cannot be bound as its not callable");
//     }
//     context.fn = this;
//     return function(...newArgs){
//         return context.fn(...args,...newArgs);
//     }
// };

// const newFunc = purchaseCar.myBind(car,"5000000");
// console.log(newFunc("₹",5000000));

//8. promise method in polyfilly


function capitalLetter(){
    let str = "geeksforGeeks";
    let result = str.charAt(0).toUpperCase() + str.slice(1);
    return result;
}
capitalLetter();


const Firstel = document.getElementById("demo");
console.log(Firstel);

const SecondEl = document.getElementsByClassName("name");
console.log(SecondEl);

const Paragraph = document.getElementsByTagName("P");
console.log(Paragraph);


// let ele = document.querySelector("h2");

// console.log(ele.innerText);

// ele.innerText = ele.innerText + "from apna colleage students";


// let divs = document.querySelectorAll(".box");

// let idx = 1;
// for(div of divs){
//  div.innerText = `new unique value ${idx}`;
//  idx++
// }
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[3].innerText = "new unique value 3";

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);


let name  = div.getAttribute("name");
console.log(name);


function sum(a,b,c){
    return a+b+c;
}
console.log(sum(2,2,2));

const obj={
    'name':"Harish",
    'age':25,
    'street':"Bangalore"
}
const{age,street}=obj;
console.log(obj);

//Deep copy

let employee={
    ename:"Harish",
    eid:"E102",
    eaddress:"New York",
    salary:100000
}
console.log(employee);

let newEmployee= employee;
console.log("New Employee:",newEmployee);
newEmployee.ename="Naik";
console.log("Employee:",employee);
console.log("New Employee:",newEmployee);


let employee1={
    ename:"Jack",
    eid:"E103",
    eaddress:"New York",
    salary:100000
}


let newEmployee1= JSON.parse(JSON.stringify(employee1));

console.log(employee1);
console.log(newEmployee1);

newEmployee1.ename="Jones";
newEmployee1.eid="E104";
newEmployee1.salary=200000;

console.log(employee1);
console.log(newEmployee1);


function sum(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(sum(2)(3)(5));

console.log("Hello Harish");