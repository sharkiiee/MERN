
[[#1. What is the difference between interpreted and compiled language.]]
[[#2. What is stack and heap memory.]]

#### 1. What is the difference between interpreted and compiled language.

*Compiler :-*
- The source code get compiled through the compiler first to translate it into byte code that the machine understand and can execute.
- A compiler reads the whole source code at once.

*Interpreter :-*
- It directly execute instructions written in high level programming language, doesn't need any extra compilation step.
-  It reads the source code line by line.

#### 2. What is stack and heap memory.

**Stack :-**
- Used for primitive data.
- We get the copy of the value.
- Change in the copyVariable does not effect in real variable.

		let value = 1;
		let copyVariable = value;
		copyVariable = 6;
		console.log(value);
		console.log(copyValue);

											Output:-
											1
											6
**Heap :-**
-  Used for non-primitive data.
-  We get the reference of the value.
- Change in reference data leads change in actual value.

		let userOne = {
			username: "sarthak",
			upi: "user@ybl"
		}

		let userTwo = userOne;
		userTwo.username = "Sonakshi"
		console.log(userOne.username);

											Output:-
											Sonakshi
											Sonakshi






