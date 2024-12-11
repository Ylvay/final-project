<template>
<img src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2" alt="books" height="300px" width="300px">
  <h1 class="text-center text-4xl py-8 text-indigo-400">Create your Reading List for 2025</h1>
  <form class="flex flex-col items-center gap-5">
    <input class="border-indigo-400 rounded-lg bg-gray-100" placeholder="Book title" v-model="bookSearch"/>
    <button 
      class="bg-indigo-400 py-2 px-8 rounded-lg hover:bg-indigo-500 text-white" @submit.prevent="getBooks">
      Search for a book
    </button>
  </form>
  <div v-if="bookExists">
    <h2>Book Title</h2>
    <p>Book Description</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      bookSearch: '',
      bookExists: null,
      error: "",
    };
  },
  methods: {
    getBooks() {
      console.log("calling API")
      // // Your method to fetch books here
      // fetch("https://www.googleapis.com/books/v1/volumes?q=${bookSearch}&key=AIzaSyCSPj1Uq2jGsYVohYexXE_43IyPeEzXkrc").then((response) => {
      //   if (response.ok) {
      //     console.log(response)
      //     return response.json()
      //   }
      //   console.log(response.status)
      //   return this.error = "Sorry, there are no books available"
      // }).then(data => this.bookExists = data).catch(error => console.log(error) )
      // console.log('Search for books: ', this.bookSearch);
    },
  },
};
</script>

<style>

</style>
