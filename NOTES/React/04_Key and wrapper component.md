### Keys

1. Keys tell React which array item each component corresponds to, so that it can match them up later.
2. This becomes important if your array items can move (e.g. due to sorting), get inserted, or get deleted.
3. Whenever you are rendering a array in react , to make sure react knows about their component with their index so whenever we update our array react becomes confused about element position so we add key or id.
4. Way to uniquely identify element.

` <component key={state.id}/>`

### Wrapper Component
As the name suggest we can wrap components with one another.
**Note :-**
Don't know why but the component that is passed as argument must be specify as children.
- MMM.. maybe because in the end this is going to be children only.

		function WrapperComponent({children}){
		return <div>{children}</div>
		}



