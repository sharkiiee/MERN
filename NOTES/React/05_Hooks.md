Two main jargons of the react :-

1. Side effects
2. Hooks

### Side Effects
- In react we have functional components, we creates the function inside which we implement some logic, so anything that is not related to rendering (putting things in the DOM taking things out of the DOM) are called ==side effects==.
- Things like fetching a data from backend or trying out setTimeout and setInterval .
- These are not really the part of react rendering cycle

## HOOKS

1. Introduced in react 16.8.
2.  Anything starts with use in react will mostly are identified as hooks.
3. Allow you to use state and other React feature without writing class.
4. They enable functional components to have access to stateful logic and lifecycle features, which were previously only possible in class component.
5. This has lead to a more concise and readable way of writing components in react.

#### Common Hooks
Some common hooks are :-
1. useState
2. useEffect
3. useCallback
4. useMemo
5. useRef
6. useContext

#### 1. useState
- Let’s you describe the state of your app Whenever state updates, it triggers a re-render which finally results in a DOM update.

**Programs :-**
1. Connect the frontend and backend using axios in react. Title and description should be printed.

3. Try to put 4 button and whenever the button the button is clicked to respect to todo id the todo of that id will get render.