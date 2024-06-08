[[#For-in loop]]

#### For-in loop

- `for...in` loop in JavaScript is used to iterate over the properties of an object.
-  syntax :- 

		for(var key in object){
			code
		}
- `key` is a variable that will hold the name of the current property in each iteration.
- `object` is the object whose properties are being iterated over.

		const person = { 
		firstName: "John",
		lastName: "Doe", 
		age: 30
		};
		
		for (let key in person) {
		 console.log(key + ": " + person[key]); 
		 }
		 