<template>
  <!-- <ul class="paginator">
    <li v-if="$route.params.page > 1">
      <NLink :to="startUrl">
        <i class="fa fa-angle-double-left"></i>
      </NLink>
    </li>

    <li
      v-for="(page, index) in middlePagination"
      :class="{ current: page.isCurrent }"
      :key="index"
    >
      <NLink :to="page.path">{{ page.number }}</NLink>
    </li>

    <li v-if="!($route.params.page == totalPages)">
      <NLink :to="`${startUrl}/${totalPages}`">
        <i class="fa fa-angle-double-right"></i>
      </NLink>
    </li>
  </ul> -->
  <div class="cont">
    <NLink :to="nextPath" class="next-page">
      <p>Наступна сторінка&ensp;</p>
      <i class="icon-arrow-right"></i>
    </NLink>
  </div>
</template>

<script>
  export default {
    props: {
      startUrl: String,
      totalPages: Number
    },
    computed: {
      nextPath() {
        let currentPage = this.$route.params.page || 1

        return `${this.startUrl}/${parseInt(currentPage) + 1}`
      }
    }
    // computed: {
    //   middlePagination() {
    //     let start = this.startPage
    //     let limit

    //     if (this.$route.params.page > 1 && !(this.$route.params.page == this.totalPages)) {
    //       limit = 3
    //     } else {
    //       limit = 4

    //       if (this.$route.params.page == this.totalPages) {
    //         if (this.totalPages == 2) {
    //           start = 1
    //         } else {
    //           start -= 2
    //         }
    //       }
    //     }

    //     limit += parseInt(start)

    //     let pages = []

    //     for (let i = start; i < limit && i <= this.totalPages; i++) {
    //       pages.push({
    //         number:    i,
    //         path:      i == 1 ? this.startUrl : `${this.startUrl}/${i}`,
    //         isCurrent: this.startPage == i
    //       })
    //     }

    //     return pages
    //   },
    //   startPage() {
    //     return this.$route.params.page ? this.$route.params.page : 1
    //   }
    // }
  }
</script>

<style lang="sass">
  .next-page
    box-sizing: border-box
    background-color: #343434
    padding: 10px 20px

    *
      display: inline-block
      color: #FFF
      font-size: 14px
      font-weight: 700

    &:hover
      background-color: #2ECC71

  @media screen and (max-width: 450px)
    .cont
      display: flex
      justify-content: center

      .next-page
        height: 42px
        border-radius: 30px
        margin: 20px 0 20px 0
        padding: 10px 25vw
</style>