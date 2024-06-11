[[#1. What is JAVASCRIPT ?]]
[[#2. What is nodejs.]]
[[#3.String in javascript.]]
[[#Methods of string]] 
[[#4. Math Object]]  and math methods.
[[#5. Dates]]


#### 1. What is JAVASCRIPT ?
*Javascript :-*

- Javascript is high-level, interpreted programming language.
- Javascript nature in single-threaded.
- Javascript is dynamic means it won't check strict datatypes etc.
- Runs in web browsers (client-side), but can also run on servers (server-side) with Node.js.

#### 2. What is nodejs.

**Nodejs**

#### 3.String in javascript.

**String**
- Combination of characters.
- Using hacktics for concatenating strings . Modern way for adding strings.

		let fName = "Sarthak";
		console.log(`Hello my name is ${fName}`);

###### Methods of string

		.length
		.toUpperCase
		.toLowerCase
		.charAt
		.indexOf('')
		
	Another useful method :-
		.slice
		.trim		
		.replace
		.includes
		.split
		
*.slice():-* `slice` Gives you characters from the starting index to the ending index.    
syntax:- variable.slice(start,end)

		const fname = "Sarthak";
		console.log(fname.slice(0,4));
											
											result:-
											Sart
											
.trim():- `trim` method is used to remove whitespace from both ends of a string.  
Syntax:- String.trim();
	
		const fname = "    Sarthak Agrawal       ";
		console.log(fname.trim());
		
											result:-
											Sarthak Agrawal

*.replace() :-* -
- `pattern`: A string or a regular expression that is to be replaced.
- `replacement`: The string that replaces the pattern. It can also be a function to generate the replacement.
- Syntax:- `String.replace(pattern , replacement)`

		const fname = "Sarthak Kumar";
		console.log(fname.replace("Kumar", "Agrawal"));

*.include() :-*  Check the string is present or not and give the boolean value.


*.split():-* The `split` method is used to divide a string into an array of substrings based on a specified delimiter. This method does not alter the original string.

- Syntax: - `string.split(separator, limit)`

		const str = 'apple,banana,cherry,dates'; 
		const fruits = str.split(',', 2); 
		console.log(fruits); 
												 Output:-
												  ['apple', 'banana']


#### 4. Math Object 
- JavaScript has a built-in `Math` object.
- It provides a number of mathematical functions and constants.

**Math functions :-**
`.round() :- To roundoff the value`
`.random() :- Provides you random numbers`
`.pow(value, power) :- It calculates according to the power of the value`
`.sqrt() :- Square root the value`
`.min() :- finding the lowest value in the array`


#### 5. Dates


		let myDate = new Date();
		console.log(myDate);

**Dates methods :-**
*Important-*
		`.toLocaleString()`

*Other Methods -*

		.toDateString();
		.getMonth();
		.getDay();
		.now();

NOTE :- When in case you want to calculate time you can define timestamp
example - `let myTimeStamp = Date.now();`
		`console.log(myTimeStamp);`
	Reduce the timestamp with original timestamp.