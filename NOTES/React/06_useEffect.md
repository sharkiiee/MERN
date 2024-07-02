- The `useEffect` hook is a feature in react , a purpose Javascript library for building user interfaces. It allows you to perform side effects are operations that can affect other components or can't be done during rendering, such as fetching a data, subscriptions, or manually changing the DOM in React components.

- The `useEffect` hook serves the same purpose as `componentDidMount` , `componentDidUpdate` in react class component, but unified into a single memory.

- Takes state variable as input in `dependency array` and whenever this state variable changes the code inside useEffects runs.

**Note :-** Function inside the useEffect cannot be async (the top level function ) but yeah function outside the useEffect can be async. 

Example :-

	useEffect(() => {
		fetch("https://sum-server.100xdevs.com/todos")
		.then(async function(res) {
			const json = await res.json();
			setTodos(json.todos);
			}
		}, [])

