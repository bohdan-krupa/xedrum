<template>
  <div class="carousel-container">
    <ul id="featured-posts">
        <li v-for="(post, index) in carousel" :key="index" class="carousel-item">  
          <div class="post-margin">
            <h6><a :href="'/posts/' + post.url">{{ post.title }}</a></h6>
            <span>
              <i class="fa fa-clock-o"></i> {{ post.time }}
            </span>
          </div>
          
          <img
            v-if="post.photo"
            class="carousel-image"
            :src="`/posts-img/${post.photo}`"
            :alt="post.title"
          />
          <img
            v-else
            class="carousel-image"
            :src="'https://img.youtube.com/vi/' + post.video + '/hqdefault.jpg'"
            :alt="post.title"
          />

          <div class="post-margin">
            <p>{{ post.smallText }}</p>
          </div>
        </li>
    </ul>   
    <div class="carousel-controls">
      <span id="prev2" class="prev">
        <i class="fa fa-angle-left"></i>
      </span>
      <span id="next2" class="next">
        <i class="fa fa-angle-right"></i>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        carousel: [
          {
            title: 'Не тратьте життя!',
            photo: '0003_0.jpg',
            time: 'Вересень 06, 2019',
            smallText: 'Квантові комп\'ютери вже давно відомі як неймовірно потужні машини, які зможуть...',
            url: 'stop-wasting-your-life'
          },
          {
            title: 'Дані про геолокацію',
            photo: '2018-09-09-Десятки-популярних-програм-iPhone-надсилали-дані-про-місцезнаходження-користувачів.jpg',
            time: 'Вересень 09, 2018',
            smallText: 'Група дослідників у галузі безпеки заявляє, що десятки популярних iPhone...',
            url: 'Десятки-популярних-програм-iPhone-надсилали-дані-про-місцезнаходження користувачів'
          },
          {
            title: 'Заживлення ран',
            photo: '2018-09-08-Новий-спосіб-заживлення-ран-без-хірургічного-втручання.jpg',
            time: 'Вересень 08, 2018',
            smallText: 'Будь-яка досить велика рана або виразка для загоєння вимагає застосування...',
            url: 'Новий-спосіб-заживлення-ран-без-хірургічного-втручання'
          },
          {
            title: 'Анонс Fallout 76',
            photo: '2018-06-25-Повернення-легенди-або-анонс-нової-Fallout-76.jpg',
            time: 'Червень 25, 2018',
            smallText: 'Можна сказати, що така новина збентежила усіх фанатів цієї ігрової франшизи...',
            url: 'Повернення-легенди-або-анонс-нової-Fallout-76'
          },
          {
            title: 'Квантовий комп\'ютер',
            photo: '2018-09-05-Хто-перший-зробить-найпотужніший-комп\'ютер-у-світі.jpg',
            time: 'Вересень 05, 2018',
            smallText: 'Квантові комп\'ютери вже давно відомі як неймовірно потужні машини, які зможуть...',
            url: 'Хто-перший-зробить-найпотужніший-комп\'ютер-у-світі'
          },
          {
            title: 'Заживлення ран',
            photo: '2018-09-08-Новий-спосіб-заживлення-ран-без-хірургічного-втручання.jpg',
            time: 'Вересень 08, 2018',
            smallText: 'Будь-яка досить велика рана або виразка для загоєння вимагає застосування...',
            url: 'Новий-спосіб-заживлення-ран-без-хірургічного-втручання'
          }
        ]
      }
    }
  }
</script>