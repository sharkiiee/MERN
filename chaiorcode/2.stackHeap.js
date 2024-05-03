
//Stack memory:- 

//Stackmemory is used for primitive datatypes. - 7types - String,Number, Boolean, null, undefined, Symbol, BigInt 
//copy of the data is been stored in stack.

//Example:-

console.log("StackMemory:-")

let firstValue = "Sarthak";

let secondValue = "Rohit";
secondValue = "muskan";

//ONLY ONE NAME IS CHANGED.
console.log(firstValue);
console.log(secondValue);

/////////////////////////////////////////////////////

//Heap memory:- 

//Heap memory is used for non-primitive type data.-Array
//Reference of the data is been stored.

console.log("Heap memory:-");

let hFirstValue = {
    name: "Sarthak"
}

let hSecondValue = hFirstValue;


hSecondValue.name = "Rohit";

//Result both the name is been as changed.
console.log(hFirstValue.name);
console.log(hSecondValue.name);

