<template>

  <!-- Hero section -->
  <div>
    <!-- Header -->
    <h3 class=" bg-yellow-100 px-8">Shop / History Books</h3>
    <h1 class="text-4xl bg-yellow-100 py-4 px-8">History Books</h1>
    <h2 class=" bg-yellow-100 px-8 pb-8">Epic battles, ancient civilizations, riveting biographies, and untold stories
      from the past.</h2>
  </div>



  <!-- Grid with book results -->
  <div v-if="bookExists && bookExists.items.length > 0"
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
    <!-- Loop over books and display each one -->
    <div v-for="book in bookExists.items" :key="book.id" class="border p-4 flex flex-col items-center gap-1">
      <img v-if="book.volumeInfo.imageLinks?.smallThumbnail" :src="book.volumeInfo.imageLinks.smallThumbnail"
        alt="book cover" class="my-2" />
      <h2 class="text-l font-semibold body text-center">{{ book.volumeInfo.title }}</h2>
      <p class="font-regular body text-center"> {{ book.volumeInfo.authors?.join(', ') }}</p>
      <p class="font-regular body"> {{ book.saleInfo?.listPrice?.amount }} {{ book.saleInfo?.listPrice?.currencyCode }}
      </p>

      <!-- Button to add to reading list -->
      <button :disabled="book.isClicked" :class="[
        book.isClicked ?
          'py-1 px-8 rounded-lg bg-gray-100 border-2 border-gray-400 text-gray-400' :
          'py-1 px-8 rounded-lg text-white border-2 border-green-800 bg-green-800']" @click="toggleClicked(book)">
        {{ book.isClicked ? 'Added to my list' : 'Add to my list' }}
      </button>

    </div>
  </div>


</template>

<script>
import { useReadingListStore } from '../stores/ReadingListStore'
import { mapStores } from 'pinia'

export default {
  name: "App",
  computed: {
    ...mapStores(useReadingListStore),
  },

  data() {
    return {
      bookExists: null,
      error: "",

    };
  },

  mounted() {
    // Call getBusinessBooks automatically when the component is mounted
    this.getHistoryBooks();
  },


  methods: {
    toggleClicked(book) {
      book.isClicked = !book.isClicked;
      this.readingListStore.addBook(book)
    },


    getHistoryBooks() {
      console.log("getting business books")
      // Fetch thrillers from the Google Books API
      fetch(`https://books.googleapis.com/books/v1/volumes?q=history&filter=paid-ebooks&key=AIzaSyCSPj1Uq2jGsYVohYexXE_43IyPeEzXkrc`)
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
        })
        .catch(error => {
          console.log(error)
        });
    },
  },

}
</script>



<style></style>