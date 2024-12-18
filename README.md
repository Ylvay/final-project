
# Front-End Bootcamp Final Project

## Overview

Welcome to my final project for the Front-End Development Bootcamp! This project represents the culmination of the skills and concepts I've learned throughout the course, including HTML, CSS, JavaScript, Vue and Pinia. For this project, I’ve created an Online Book Store, which aims to help users track and manage their reading list for the year 2025. 

### Key Features
- **Responsive Design**: The app is fully responsive, providing an optimal user experience on desktop, tablet, and mobile devices.
- **Interactive UI**: Dynamic elements that allow users to add, remove, and filter (in the future) items in the reading list.
- **API Integration**: Fetching book data from the Google Books API to populate the store and therefore reading list.
- **State Management**: Implementing state management with Pinia to manage the app's state across components.
- **Search Functionality**: Allows users to search for books based on title and author, and add them to their personalized reading list.

---

## Technologies Used

- **HTML5** – For creating the structure and layout of the app.
- **Tailwind CSS** – For styling the application and ensuring it is responsive.
- **JavaScript** – For interactivity and dynamic content handling.
- **Vue.js** – Used for building the user interface and managing the application’s reactive state.
- **Pinia** – State management library used to manage and store the user's reading list.
- **Google Books API** – External API used to fetch data related to books (e.g., title, author, description, image).

---

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   ```

2. **Navigate into the project folder**:
   ```bash
   cd your-repository-name
   ```

3. **Install the required dependencies**:
   If you're using npm:
   ```bash
   npm install
4. **Run the development server**:
   ```bash
   npm run dev
   ```


5. **Open your browser** and go to [http://localhost:3000](http://localhost:3000) (or the relevant port) to see the app in action.

---

## Features
   
### 1. **Search for Books**
   - Users can search for books using the Google Books API and add them to their reading list.
   
### 2. **Reading List Management**
   - Users can:
     - Add books to their list
     - Remove books from their list
     - View details of the books in their list, including title, author, and image
     
### 3. **Responsive Design**
   - The application is fully responsive and looks great on all devices (desktop, tablet, and mobile).

---

## Challenges and Solutions

- **API Integration**: Integrating external APIs (like Google Books API) for the first time was a bit challenging, but I learned how to handle asynchronous data fetching using `async/await` and how to handle errors gracefully.
  
- **State Management**: Using Pinia for state management was a new experience. Initially, I faced challenges in synchronizing state between components, but eventually, I got the hang of managing global state.

- **Styling Responsiveness**: Ensuring that the layout was fully responsive across devices involved a lot of testing, especially with a framework like Tailwind CSS. I learned how to effectively use utility-first classes to control layouts.

---

## Future Improvements

1. **User Authentication**: Add user authentication and authorization to allow users to save their reading lists across sessions.
2. **Book Ratings and Reviews**: Allow users to rate and leave reviews for the books in their reading list.
3. **Save to Local Storage**: Implement a feature to persist the reading list even after the page is refreshed, by saving it to `localStorage`.
4. **Pagination/Infinite Scrolling**: Improve the book search results display with pagination or infinite scrolling for better performance.
5. **Print your Reading List**: Offer users to download their reading list in a printable format to hang it on the wall in their home.

---

## Contributing

Contributions are welcome! If you have any ideas or improvements, feel free to fork the repository, create a pull request, or open an issue. Please follow the guidelines below:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Acknowledgments

- Thanks to the instructors, mentors, and fellow bootcamp students for their feedback and support during the course.
- Special thanks to the creators of [Vue.js](https://vuejs.org/) and [Pinia](https://pinia.vuejs.org/) for their amazing libraries.
