<template>
  <h2 class="error-page-title">Сторінку не знайдено</h2>
</template>

<script>
  export default {
   head() {
      return {
        title: `${process.env.name} - Помилка`
      }
    }
  }
</script>