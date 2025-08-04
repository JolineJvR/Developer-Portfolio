# Developer-Portfolio

Freelance Web Developer Portfolio
This project is a personal portfolio for a freelance web developer, built to showcase skills in web development using HTML, CSS, and JavaScript. The portfolio includes a static webpage with information about the developer, services offered, testimonials, and a dedicated section for projects. The main project showcased is a dynamic restaurant ordering system built with JavaScript, which interacts with an external API.

1. Developer Portfolio Webpage
This is the main landing page, index.html, which serves as the portfolio. It's built with semantic HTML and styled with CSS to be clean and responsive.

Key Features:

Menu: A navigation bar at the top of the page that links to the different sections.

About: An introductory section with a profile picture, name, and a brief description of the developer’s skills and value proposition.

Services: A list of the web development services provided, such as front-end development, responsive design, and API integration.

Testimonials: Fictitious testimonials from satisfied clients to build trust.

Portfolio: A section to display and link to a showcase of projects. This is where the JavaScript restaurant ordering system is featured.

Technologies Used:

HTML: Semantic HTML elements (<header>, <main>, <section>, etc.) are used to ensure a well-structured and accessible page.

CSS: A separate stylesheet, style.css, provides custom styling for the layout, colors, and fonts. It is designed to be responsive, ensuring a good user experience on both desktop and mobile devices.

2. Restaurant Ordering System (JavaScript Project)
This is a standalone JavaScript application designed to demonstrate skills in API interaction, user input handling, and local storage management. The system simulates a simple restaurant order process using The Meal DB API.

How it Works:

Taking an Order: The user is prompted to enter a main ingredient. The application converts the input (e.g., "Garlic Powder" becomes "garlic_powder") to match the API's format. It then calls The Meal DB API to get a list of meals that use that ingredient.

Random Meal Selection: Using the Math.random() function, one of the returned meals is randomly selected to be the "chef's favourite" for the order.

Order Details: Each order is a JSON object with a unique order number, the meal's description, and a completion status (either 'complete' or 'incomplete').

Storage: All orders are stored in sessionStorage as a single JSON array, and the last generated order number is stored separately for efficient tracking.

Completing an Order: The application prompts the user with a list of all incomplete orders. The user can then enter an order number to mark it as complete. The application updates the sessionStorage accordingly. If a user enters an invalid order number, they receive an appropriate alert.

Error Handling: The system handles cases where the API returns null for an invalid ingredient by prompting the user for a new one.

Technologies Used:

JavaScript (ES6): The core logic of the application.

prompt() and alert(): Used for user interaction and displaying messages.

Fetch API: For making asynchronous calls to The Meal DB API.

sessionStorage: To store and manage order details locally within the user's browser session.

The Meal DB API: An external, public API used to fetch meal data.

JSON: Used to format the data stored in sessionStorage.

3. Portfolio Integration
The completed JavaScript project is packaged and linked in the "Portfolio" section of the main webpage. This allows potential clients to see a practical example of a dynamic, interactive application that utilizes modern web development techniques.

How to View and Run the Project
This project consists of two parts: a static portfolio website and a dynamic JavaScript application. Here’s how you can see them in action.

1. Viewing the Portfolio Page

The portfolio page is a standard HTML and CSS website. To view it, simply open the index.html file in your web browser. You can do this by:

Right-clicking the index.html file and selecting "Open with", then choosing your preferred browser (e.g., Chrome, Firefox, Safari).

Dragging the index.html file directly into an open browser window.

2. Running the JavaScript Project

The JavaScript project (the restaurant ordering system) is integrated into the portfolio page. To see it work, you need to open your browser’s developer console.

First, open the index.html file as described above.

Once the page is loaded, open the developer console by pressing:

Ctrl + Shift + J (on Windows/Linux)

Cmd + Option + J (on macOS)

With the console open, refresh the page. The JavaScript code will automatically start running, and you'll see a prompt() window appear asking for an ingredient.

Follow the prompts to place an order, and watch the output in the console to see the order details and messages.
