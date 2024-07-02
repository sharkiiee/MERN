
**How to use variables in React ?**
Variables in react is used by using `{}` (expression or evaluated expression).

*Declaring* :-

		const username = "sarthak";

*Using variable:-*

		<>
		 <h1>Myself {username} </h1>
		 </>

**NOTE :-** ==Evaluation expression only give you final result.==

# JSX

JSX file is the JS file in which you can write XML.

#### Creating element in the JSX
Their is the particular syntax to create element in the JSX which takes parameters.
*Parameters are:- *
1. Tag
2. Object containing properties
3. Inline text

		const reactElement = React.createElement(
			'a',
				{href: 'https://google.com',target: '_blank'},
				'click me to visit google'
		)

#### How to define state in JSX file
React have a special syntax that helps us to define state and addition method as state updater.

Following is the example of state :-

		 const [count, setCount] = useState(0);
- Count is the state.
- set count function is state updater.
- useState() method provides value to the state.

#### How to define state as good developer
- Define state 
- Define component and connect state to the component.
- re-render the component.

		import { useState } from "react"
		function App()
		{
			//Defining State
		    const [count,setCount] = useState(0);
			//Rerendering
		    return(
		        <>
		            <CustomButton count={count} setCount = {setCount} ></CustomButton>
		        </>
				 )
		}
			
		// component
		
		function CustomButton(props)
		{
			 function onclickHandler()
		    {
				 props.setCount(props.count +1);
		    }
		    return <button onClick={onclickHandler}>Counter {props.count}</button>
		}
		
		export default App
\
#### How to display array of objects

`JSON.stringify(nameOftheObject)`

**How to add another element to the array**
Their is this spread syntax `...` using this we can add another element to the array.

	arr ---> [2,3]
	[...arr,4] ---> [2,3,4]
	  
