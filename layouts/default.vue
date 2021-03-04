<template>
  <div id="flex">
    <main>
      <Header />
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss">
  @import '~/assets/scss/style.scss';

  // Then remove from body
  body, #__nuxt, #__layout {
    height: 100%;
  }

  #flex {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .capitalize {
    text-transform: capitalize;
    margin-left: 3.5px;
  }
</style>