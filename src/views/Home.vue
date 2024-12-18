<template>

    <!-- Banner for reading list -->
    <div class="flex flex-row pb-8">
        <div class="flex flex-col justify-center text-center gap-4">
            <h1 class="px-8"> Create Your Reading List for 2025 </h1>
            <h2 class="px-8">As we look ahead to 2025, there's no better time to start planning your reading
                journey. A well-curated reading list can help you explore new ideas, dive into thrilling adventures, or
                deepen
                your knowledge in areas that inspire you. </h2>
            <button class="bg-green-800 text-white rounded-lg py-1 px-8"><router-link to="/ReadingList">Create
                    List</router-link></button>
        </div>
        <img src="https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="books" width="800">
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
            <p class="font-regular body"> {{ book.saleInfo?.listPrice?.amount }} {{
                book.saleInfo?.listPrice?.currencyCode }}
            </p>

            <!-- Button to add to reading list -->
            <button :disabled="book.isClicked" :class="[
                book.isClicked ?
                    'py-1 px-8 rounded-lg bg-white border-2 border-green-800 text-green-800' :
                    'py-1 px-8 rounded-lg text-white border-2 border-green-800 bg-green-800']"
                @click="toggleClicked(book)">
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
        this.getChristmasBooks();
    },


    methods: {
        toggleClicked(book) {
            book.isClicked = !book.isClicked;
            this.readingListStore.addBook(book)
        },

        getChristmasBooks() {
            console.log("getting business books")
            // Fetch thrillers from the Google Books API
            fetch(`https://books.googleapis.com/books/v1/volumes?q=christmas&filter=paid-ebooks&key=AIzaSyCSPj1Uq2jGsYVohYexXE_43IyPeEzXkrc`)
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