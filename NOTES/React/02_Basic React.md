
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


**02_Programs**

1.  Create you own custom react and create link to the google in it.
2.  Create counter button using react 
	- Must have cleaner syntax
	  
