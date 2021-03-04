<template>
  <div class="about-container">
    <h5 class="about-title">Про нас</h5>
    <p>
      Привіт, друже! Цей сайт був створений лише однією скромною людиною. Статті пише один класний чел. Метою сайту є доносити людям корисну і цікаву інформацію, яка допоможе рухатися далі. Якщо хтось хоче почати співпрацювати, або має пропозицію, ось електронна адреса:
      <br /><br /><a href="mailto:xedrum.site@gmail.com">xedrum.site@gmail.com</a>
    </p>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: `${process.env.name} - Про нас`
      }
    }
  }
</script>