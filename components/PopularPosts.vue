<template>
  <div class="widget-container">
    <h6 class="widget-title">Популярні статті</h6>
    <ul class="widget-popular-posts">
      <li v-for="(post, index) in popularPosts" :key="index">
        <img
          v-if="post.photo"
          :src="`/posts-img/${post.photo}`"
          :alt="post.title" />
        <img
          v-if="post.video"
          :src="`https://img.youtube.com/vi/${post.video}/default.jpg`"
          :alt="post.title"
          class="video-preview" /> <!-- Maybe wrong -->
        <h2>
          <NLink :to="`/posts/${post.url}`">{{ post.title }}</NLink>
        </h2>
        <span>{{ post.time }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import data from '~/assets/data.js'
  export default {
    data() {
      return {
        popularPosts: data.popularPosts
      }
    }
  }
</script>