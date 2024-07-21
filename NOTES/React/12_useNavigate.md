## Issue with window.location.href

-  You cannot use useNavigate outside the component that is not inside browser router.

- When using window.location.href for navigation in a React application, it triggers a full page reload, which is not desirable in client-side routing. A full page reload involves fetching the HTML, CSS, and other assets again, leading to a slower and less efficient user experience.

- To address this issue, React Router DOM provides a solution in the form of the useNavigate hook. This hook is designed for programmatic navigation within a React component without triggering a full page reload. By using useNavigate , you can ensure smoother transitions between different views in a single-page application (SPA) without unnecessary overhead.

example of how to use useNavigate :- https://shorturl.at/O5fTK

**NOTE :-** 
The useNavigate hook in React Router DOM is designed to work within the context of a BrowserRouter . It should be used inside a component that is a descendant of BrowserRouter to ensure access to the correct router context. This limitation is intentional, as useNavigate relies on the router context for scoped navigation, enabling seamless client-side routing without triggering a full page reload. Placing the hook within the correct context ensures its proper functionality for dynamic view and URL updates.

