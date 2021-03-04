<template>
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
        :startUrl="`/categories/${$route.params.name}`"
        :totalPages="totalPages"
      />
    </div>
      <Categories />
      <PopularPosts />
  </div>
</template>

<script>
  import Post from '~/components/Post.vue'
  import Paginator from '~/components/Paginator.vue'
  import Categories from '~/components/Categories.vue'
  import PopularPosts from '~/components/PopularPosts.vue'

  import data from '~/assets/data'
  import articles from '~/assets/articles'


  function filterPosts(tag) {
    let categoryPosts = []

    articles.forEach(val => {
      if (val.tag[0] == tag) {
        categoryPosts.push(val)
      }
    })

    return categoryPosts
  }

  export default {
    validate({ params }) {
      for (let category in data.categories) {
        if (data.categories[category][0] == params.name) {
          if (params.page) {
            let categoryPosts = filterPosts(params.name)

            if (Math.ceil(categoryPosts.length / data.amountPerPage) >= params.page) {
              return true
            }
          } else {
            return true
          }
        }
      }
    },
    head() {
      let categoryName

      data.categories.forEach(val => {
        if (val[0] == this.$route.params.name) {
          categoryName = val[1][0].toUpperCase() + val[1].slice(1)
        }
      })

      let add = this.$route.params.page ?
        ` - ${this.$route.params.page}` : ''

      return {
        title: `${process.env.name} - ${categoryName}${add}`
      }
    },
    computed: {
      posts() {
        let pageNumber = this.$route.params.page || 1
        let categoryPosts = filterPosts(this.$route.params.name)

        let postsForPage = categoryPosts.filter((val, index) => {
          return (
            index + 1 > (pageNumber - 1) * data.amountPerPage && index + 1 <= pageNumber * data.amountPerPage
          )
        })

        return postsForPage
      },
      totalPages() {
        let categoryPosts = filterPosts(this.$route.params.name)

        return Math.ceil(categoryPosts.length / data.amountPerPage)
      }
    },
    components: {
      Post,
      Paginator,
      Categories,
      PopularPosts
    }
  }
</script>