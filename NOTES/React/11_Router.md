**Jargons**
1. Single page application
2. Client side bundle
3. Client side routing
### 1. **SPA (Single Page Application):**

A Single Page Application (SPA) is a type of web application or website that interacts with the user by dynamically rewriting the current page, rather than loading entire new pages from the server.

- **Key Characteristics:**

- Loads a single HTML page initially.
- Subsequent interactions and navigation are handled by dynamically updating the content on the page through JavaScript.
- Utilizes AJAX or Fetch API to communicate with the server and fetch data without reloading the entire page.
- Provides a more fluid and seamless user experience by avoiding full-page reloads.
### 2. **Client-side Bundle:**

In the context of web development, a client-side bundle refers to a collection of JavaScript files and other assets bundled together to be delivered to the client's web browser.

- **Key Components:**

- **JavaScript Files:** The application's logic and functionality are written in JavaScript files. Bundling involves combining these files into a single or multiple bundles.
- **Stylesheets, Images, and Other Assets:** Along with JavaScript, other assets like stylesheets, images, and fonts may be included in the bundle for efficient delivery to the client.

- **Advantages:**

- Reduces the number of HTTP requests, improving loading times.
- Enables code splitting and lazy loading for optimizing performance.
- Simplifies deployment and maintenance by organizing code into manageable bundles.

### 3. **Client-side Routing:**

Client-side routing refers to the process of managing navigation within a Single Page Application (SPA) entirely on the client side, without making additional requests to the server for each new view.

- **Key Features:**

- Utilizes the browser's History API to manipulate the URL without triggering full page reloads.
- Enables dynamic content updates based on the route, improving user experience.
- Typically implemented using libraries like React Router for React applications or Vue Router for Vue.js applications.

- **Advantages:**

- Enhances the performance of SPAs by avoiding the need for server round-trips during navigation.
- Allows for a smoother and more responsive user interface as content is updated dynamically.
- Enables bookmarking, sharing, and direct linking to specific views within the SPA.



