
// // 1. setTimeout()


// console.log("This is the first line");

// function findSum(){
//     let ans = 0;
//     for(i=1; i<=1 ;i++){
//         ans = ans + i;
//     }
//     console.log("Answer: ", ans);
// }

// function findSumTill100(){
//     console.log("Inside findSumTill");
//     return findSum(100);

// }

// console.log("hello world");
// setTimeout(findSumTill100 , 4000);


// // 2. fs.readFile()

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8",function(err,data){
//     console.log(data);
// })

// console.log("hii,there");


// // 3. Ugly way of making our own async function - we don't actually make asyn function without promises , we make a wrapper around some pre-defined asyn-functions and force them to work asynchronously.


// const fs = require('fs')

// //my own async function
// function kiratReadFile(cb){
//     fs.readFile("a.txt", "utf-8", function(err, data){
//         cb(data);
//     })
// }

// //callback function to call
// function onDone(data){
//     console.log("Data: ", data);
// }

// kiratReadFile(onDone);
// console.log("Hii there!!!!!");


// // 4. Write a promise function that shows pending of a promise.
// //Promise {pending}

// var a = promise(function(resolve){

// })

// console.log(a);


// // 5. Create a program that show complete resolve  and pending state of a promise()

// var d = new Promise(function(resolve){
//     setTimeout(function(){
//         resolve("Sarthak");
//     }, 1000)
// })

// function callback(){
//     console.log(d);
// }

// console.log(d);
// d.then(callback);


// 6. Simple promise program that immediately resolves 

let p = new Promise(function(resolve){
    resolve("Hello World");
});

p.then(function(){
    console.log(p);
})
