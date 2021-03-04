<template>
  <header>
    <NLink class="logo" to="/">Xedrum</NLink>
    <ul class="sf-menu">
      <li class="menu-item" :class="{ current: main }">
        <NLink to="/">Головна</NLink>
      </li>
      <li class="menu-item" :class="{ current: about }">
        <NLink to="/about">Про нас</NLink>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  computed: {
    main() {
      return this.$route.path == '/'
    },
    about() {
      return this.$route.path == '/about' || this.$route.path == '/about/'
    }
  }
}
</script>