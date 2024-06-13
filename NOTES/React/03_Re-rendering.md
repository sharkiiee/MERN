###### Why a component can only return a single top level xml?
1. Make it easy to do reconciliation. --> Process of figuring out when what DOM updates need to happened as the application grows.

**React Return**
You can return elements in multiple ways without even adding additional parent to it.
1. Using empty element boxes.  `<></>`
2. Using fragment. `<fragment>Data</fragment>`

### IMPORTANT : ==Re-rendering==
#### Re-rendering in react :-
A re-render means that :
- React did some work to calculate what all should update in this component.
- The component actually got called (you can put a log to confirm this).
- The inspector shows you a bounding box around the component.

**When re-rendering happens -**
1. A state variable that is being used inside a component changes.
2. State changes parent triggered.
3. A parent component re-render triggers all children re-rendering.
**Note :-** You want to minimize the number of re-renders to make a highly optimal react app.
The more the components that are getting re-rendered, the worse.

###### HOW TO DECREASE THE RE-RENDERING
1. Push the state into the component that you want to change.
2. Using memo in react. --> `memo lets you skip re-rendering a component when props are unchanged` 
**NOTE** :- You need to wrap re-rendering component in div to perform re-rendering.
`<div><HeaderComponent></HeaderComponent></div>`

###### How to memoize the component

Normal Component

	function Header({title}){
		return <div>{title}</div>
	}

Memo component
	`import React, {memo} from "react"`

	const Header = memo(function Header({title}){
		return <div>{title}</div>
	})



**Programs :-**
1. Create a react app that has a -
   - Header component that takes a title as a prop and renders it inside a div.
   - The top level App component render 2 headers.
2. Write the program :-
   1. Create a button on top.
   2. Create two headers with some title .
   3. Every time a button is clicked the title of one header will change.
   4. Important :- Reduce the re-rendering of the components.
3. Write program using memo and show limiting in re-rendering, u can display multiple headers and show re-rendering in few elements only.
	
   

