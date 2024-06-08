# React

#### What is react ?
1.  React is JS library.
2. React is  just an easier way to write normal html/css/javascript.
3. Under the hood , the react compiler converts your code to html/css/javascript/
#### Why do we need react ?
1. For DOM manipulation, it's harder to DOM manipulation the conventional way.
2. VueJS/React creates a new syntax to write better frontend.
3. We usually have to do define all our components once.
	- And then all we need is to update the state of our app , react takes care of re-rendering of the app.

#### What are the things that you need to worry while create react app ?
*React jargons :-*
Main:-
1. State
2. Component 
Other:-
1. Re-rendering

##### State :-
- An object that represents the current `state` of the app.
- It represents the dynamic things in your app (things that can change).
	- Example :- Value of the counter.
	- Example 2 :- For top-bar of LinkedIn the state will be -
	
			{
				topbar: {
					home: 0,
					myNetwork: "99+",
					jobs: 0,
					messaging: 0,
					notifications: 10
				}
			}

##### Component :-
- How a DOM element should render, given a state.
	- It is a re-usable ,dynamic , HTML snippet that changes given the state.

##### Re-rendering :-
- A state change triggers a re-render.
- A ==re-render== represents the actual DOM being manipulated when the state changes.

### What react expects from the developers :-
1. Give me a state of your application (a very big object that represents dynamic parts of your application).
2. Give me all the individual components and how they are structured together.
3. Give me how this state is connected to these components.

**01_Programs:-**
1. Without using react create a counter application that increases the count value every time we click on it. Use concepts of component and state.