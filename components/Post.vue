<template>
  <div class="post">
    <div class="post-top">
      <h1 class="post-title">
        <NLink :to="url">{{ title }}</NLink>
      </h1>
      <ul class="post-status">
        <li>
          <i class="icon-clock"></i>
          {{ time }}
        </li>
        <li>
          <i class="icon-folder-open"></i>
          <NLink
            :to="`/categories/${tag[0]}`"
            class="capitalize"
            title="Подивитись всі пости, пов'язані з цією категорією"
            rel="category"
          >{{ tag[1] }}</NLink>
        </li>
      </ul>
    </div>

    <img
      v-if="photo"
      class="post-image"
      :src="`/posts-img/${photo}`"
      :alt="title"
    />
    <iframe
      v-else
      :src="'https://www.youtube.com/embed/' + video"
      frameborder="0"
      allowfullscreen
    >
    </iframe>

    <div class="post-small-text">
      <p>{{ smallText }}</p>
    </div>
    <NLink :to="url" class="post-read-more">
      Читати далі&ensp;<i class="icon-angle-right"></i>
    </NLink>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      time: String,
      tag: Array,
      photo: String,
      video: String,
      smallText: String,
      url: String
    }
  }
</script>