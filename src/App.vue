<template>
  <div class="bg-yellow-100 px-8">
    <h1 class="text-4xl py-4"><router-link to="/Home">GoodBooks.com</router-link></h1>
  </div>

  <!-- Nav bar with categories  -->
   <div>
    <nav class="bg-yellow-100 px-8 pb-16">
      <ul class="flex flex-row gap-4">
        <li class="h2"><router-link to="/Thrillers">Thrillers</router-link></li>
        <li class="h2"><router-link to="/business-books">Business Books</router-link></li>
        <li class="h2"><router-link to="/christmas-books">Christmas Books</router-link></li>
        <li class="h2"><router-link to="/history-books">History Books</router-link></li>
        <li class="h2"><router-link to="/ReadingList">Create your reading list</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>

</template>



<script>

</script>


<style scoped>
/* You can add any custom styles here if needed */
</style>
