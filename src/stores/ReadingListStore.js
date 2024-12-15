import { defineStore } from 'pinia'
export const useReadingListStore = defineStore('readingList', {
    state: () => ({
        books: []
    }),
    getters: {
        booksCount(state) {
            return state.books.length
        },
    },
    actions: {
        addBook(book) {
            console.log("adding book")
            this.books.push(book)
        }
    }
})


