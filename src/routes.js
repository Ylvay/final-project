 import { createWebHashHistory, createRouter } from 'vue-router'
 import Home from './views/Home.vue'
 import ReadingList from './views/ReadingList.vue'
 import Thrillers from './views/Thrillers.vue'
 import BusinessBooks from './views/BusinessBooks.vue'
 import ChristmasBooks from './views/ChristmasBooks.vue'
 import HistoryBooks from './views/HistoryBooks.vue'


 const routes = [
     {
         path:'/home',
         name: 'Home',
         component: Home
     },
     {
         path: '/readinglist',
         name: "ReadingList",
         component: ReadingList
     },
     {
        path: '/thrillers',
        name: "Thrillers",
        component: Thrillers
    },
    {
        path: '/business-books',
        name: "BusinessBooks",
        component: BusinessBooks
    },
    {
        path: '/christmas-books',
        name: "ChristmasBooks",
        component: ChristmasBooks
    },
    {
        path: '/history-books',
        name: "HistoryBooks",
        component: HistoryBooks
    },

 ]

 const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router 


 
