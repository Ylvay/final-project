import { defineStore } from 'pinia'

export const useReadingListStore = defineStore('readingList', {
  state: () => ({
    books: [],
    isLoading: false,
    error: null,
  }),
  getters: {
    booksCount(state) {
      return state.books.length;
    },
    booksInfo(state) {
      return state.books.map(book => ({
        id: book.id,
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors,
        image: book.volumeInfo.imageLinks.smallThumbnail,
      }));
    },
  },
  actions: {
    addBook(book) {
      console.log("adding book");
      this.books.push(book);
    },
    // deleteBook(book) {
    //   console.log("deleting book");
    //   this.books.pop(book);
    deleteBook(book) {
      console.log("deleting book", book);
      const index = this.books.findIndex(b => b.id === book.id); // Find the index of the book
      if (index !== -1) {
        this.books.splice(index, 1); // Remove the book at the found index
      }
    }

  },
  async fetchBooks() {
    this.isLoading = true;  // Set loading state
    try {
      const response = await fetch('https://books.googleapis.com/books/v1/volumes?q=${this.bookSearch}&filter=paid-ebooks&key=AIzaSyCSPj1Uq2jGsYVohYexXE_43IyPeEzXkrc'); // Replace with your API endpoint
      const data = await response.json(); // Parse the response to JSON
      this.books = data.items;  // Assuming the API response has a 'items' field
    } catch (error) {
      this.error = error.message;  // Handle error if request fails
    } finally {
      this.isLoading = false;  // Reset loading state
    }
  },
}, // Close actions block
); // Close defineStore call
