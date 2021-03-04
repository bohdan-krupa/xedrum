<template>
  <div class="widget-container">
    <h6 class="widget-title">Категорії</h6>
    <ul class="widget-list">
      <li v-for="(category, index) in categories" :key="index">
        <h2>
          <NLink
            :to="`/categories/${category[0]}`"
            class="capitalize"
            title="Подивитись всі пости, зв'язані з цією категорією">
            {{ category[1] }}
          </NLink>
        </h2>
      </li>
    </ul>
  </div>
</template>

<script>
  import data from '~/assets/data.js'
  export default {
    data() {
      return {
        categories: data.categories
      }
    },
    // computed: {
    //   categories() {
    //     return data.categories
    //   }
    // }
  }
</script>