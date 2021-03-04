<template>
  <div class="content-container">
    <div class="posts-container">
      <div class="post">
        <div class="post-top">
          <h1 class="post-title">
            <NLink :to="`/posts/${post.url}`">{{ post.title }}</NLink>
          </h1>
          <ul class="post-status">
            <li>
              <i class="icon-clock"></i>
              {{ post.time }}
            </li>
            <li>
              <i class="icon-folder-open"></i>
              <NLink
                :to="`/categories/${post.tag[0]}`"
                class="capitalize"
                title="Подивитись всі пости, зв'язані з цією категорією"
                rel="category"
              >{{ post.tag[1] }}</NLink>
            </li>
          </ul>
        </div>

        <img
          v-if="post.photo"
          class="post-image"
          :src="`/posts-img/${post.photo}`"
          :alt="post.title"
        />
        <iframe
          v-if="post.video"
          :src="`https://www.youtube.com/embed/${post.video}`"
          frameborder="0"
          allowfullscreen
        ></iframe>

        <div v-html="post.content" class="post-small-text"></div>
      </div>
    </div>

    <Categories />
    <PopularPosts />
  </div>
</template>

<script>
  import Categories from '~/components/Categories.vue'
  import PopularPosts from '~/components/PopularPosts.vue'
  
  import articles from '~/assets/articles'


  const getPost = (url) => {
    let post

    articles.forEach(val => {
      if (val.url == url) {
        post = val
      }
    })

    return post
  }

  export default {
    validate({ params }) {
      return getPost(params.url)
    },
    head() {
      return {
        title: `${process.env.name} - ${this.post.title}`
      }
    },
    data() {
      return {
        post: getPost(this.$route.params.url)
      }
    },
    components: {
      Categories,
      PopularPosts
    }
  }
</script>