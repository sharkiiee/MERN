`useCallback` is a React hook that allows you to memoize a callback function. It is useful when you want to prevent a function from being re-created on every render, which can help optimize performance in certain scenarios, particularly when passing callbacks to child components that rely on referential equality to prevent unnecessary re-renders.

**Easy definition**
Basically used for function performing.
- Used to prevent rendering of child element when parent element renders.
- You want some function to run only when it satisfy certain condition.
- React consider same function call as different function call, what i mean is something like this:-
  `function1(){console.log(a)==function2(){console.log(a)}} `
  `RESULT :- false` as even the value are same the ref is different.
  - Every time a function is called a new function is created with same definition so prevent that we use useCallback().

syntax:- Certain function that will only render when dependency array data will change

	const onClick = useCallback(()=>{
		console.log("render")
	},[])

