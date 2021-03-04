<template>
  <div>
    <div class="content-container">
      <div class="posts-container">
        <Post
          v-for="(post, index) in posts"
          :key="index"
          :title="post.title"
          :photo="post.photo"
          :time="post.time"
          :url="`/posts/${post.url}`"
          :tag="post.tag"
          :smallText="post.smallText"
        />
        <Paginator
          v-if="totalPages != $route.params.page"
          startUrl=""
          :totalPages="totalPages"
        />
      </div>
      <Categories />
      <PopularPosts />
    </div>
  </div>
</template>

<script>
  import Carousel from '~/components/Carousel.vue'
  import Post from '~/components/Post.vue'
  import Paginator from '~/components/Paginator.vue'
  import Categories from '~/components/Categories.vue'
  import PopularPosts from '~/components/PopularPosts.vue'

  import data from '~/assets/data'
  import articles from '~/assets/articles'


  export default {
    validate({ params }) {
      if (params.page) {
        if (Math.ceil(articles.length / data.amountPerPage) >= params.page) {
          return true
        }
      } else {
        return true
      }
    },
    head() {
      let add = this.$route.params.page ?
        ` - ${this.$route.params.page}` : ''

      return {
        title: `${process.env.name} - Головна${add}`
      }
    },
    data() {
      return {
        totalPages: Math.ceil(articles.length / data.amountPerPage)
      }
    },
    computed: {
      posts() {
        const pageNumber = this.$route.params.page || 1

        let postsForPage = articles.filter((val, index) => {
          return (
            index + 1 > (pageNumber - 1) * data.amountPerPage && index + 1 <= pageNumber * data.amountPerPage
          )
        })

        return postsForPage
      }
    },
    components: {
      Carousel,
      Post,
      Paginator,
      Categories,
      PopularPosts
    }
  }
</script>