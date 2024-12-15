<template>
  <div>
    <h3 class=" bg-yellow-100 px-8">Shop / Reading List</h3>
    <h1 class="bg-yellow-100 text-4xl py-4 px-8">Create Your Reading List for 2025</h1>
    <p class="bg-yellow-100 px-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quis natus non
      nam nostrum reprehenderit voluptatem quod cumque ratione, laudantium fugiat deleniti obcaecati, eum ipsum pariatur
      dicta? Voluptates, unde illum.</p>
  </div>

  <!-- Section for searching books and adding to reading list -->

  <form class=" bg-yellow-100 flex flex-col items-center gap-5 py-8" @submit.prevent="getBooks">
    <input class="rounded-lg bg-white px-4 py-2 text-black" placeholder="Book title" v-model="bookSearch" />

    <button class="bg-green-800 py-2 px-8 rounded-lg hover:bg-green-900 text-white">
      Search for a book
    </button>
  </form>

  <!-- Grid with book results -->
  <div v-if="!bookSearchDone" class="text-center py-8">
    <p>Search for a Book</p>
  </div>

  <div v-else>
    <div v-if="bookExists && bookExists.items.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
      <!-- Loop over books and display each one -->
      <div v-for="book in bookExists.items" :key="book.id" class="border p-4 flex flex-col items-center gap-1">
        <img v-if="book.volumeInfo.imageLinks?.smallThumbnail" :src="book.volumeInfo.imageLinks.smallThumbnail"
          alt="book cover" class="my-2" />
        <h2 class="text-l font-semibold body text-center">{{ book.volumeInfo.title }}</h2>
        <p class="font-regular body text-center"> {{ book.volumeInfo.authors?.join(', ') }}</p>
        <p class="font-regular body pb-2"> {{ book.saleInfo?.listPrice?.amount }} {{
          book.saleInfo?.listPrice?.currencyCode }}</p>

        <!-- Button to add to reading list -->
        <button :class="[
          book.isClicked ?
            'py-1 px-8 rounded-lg bg-white border-4 border-green-800 text-green-800' :
            'py-1 px-8 rounded-lg text-white border-4 border-green-800 bg-green-800']" @click="toggleClicked(book)">
          {{ book.isClicked ? 'Added to my list' : 'Add to my list' }}
        </button>
      </div>
    </div>


    <!-- Display message when no books are found -->
    <div v-else class="text-center py-8">
      <p>No books found. Try searching for something else.</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "App",
  data() {
    return {
      bookSearch: '',
      bookExists: null,
      bookSearchDone: false,
      error: ""
    };
  },
  methods: {
    toggleClicked(book) {
      book.isClicked = !book.isClicked;
      // TODO Send to pinia => book
    },


    getBooks() {
      console.log("calling API")
      // Fetch books from the Google Books API
      fetch(`https://books.googleapis.com/books/v1/volumes?q=${this.bookSearch}&filter=paid-ebooks&key=AIzaSyCSPj1Uq2jGsYVohYexXE_43IyPeEzXkrc`)
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          console.log(response.status)
          this.error = "Sorry, there are no books available"
          return Promise.reject(new Error(this.error))
        })
        .then(data => {
          this.bookExists = data;
          this.bookSearchDone = true;
        })
        .catch(error => {
          console.log(error)
        });
      console.log('Search for books: ', this.bookSearch);
    },
  },
};
</script>

<style></style>