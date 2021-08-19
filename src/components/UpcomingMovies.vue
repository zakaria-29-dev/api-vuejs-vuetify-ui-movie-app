<template>
  <div id="example">
    <h2 class="mx-3 grey--text">
      Upcoming Movies
    </h2>
    <carousel-3d
      :controls-visible="true"
      :clickable="false"
      :key="upcomingMovies.length"
      :listData="upcomingMovies"
      :height="500"
    >
      <slide :index="i" :key="i" v-for="(movie, i) in this.upcomingMovies">
        <figure>
          <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" />
          <figcaption>
            <v-btn :to="`/movie/${movie.id}`" text color="white"> {{ movie.title }}</v-btn>
          </figcaption>
        </figure>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  data() {
    return {
      upcomingMovies: [],
    };
  },
  components: {
    Carousel3d,
    Slide,
  },
  mounted() {
    this.fetchUpcomingMovies();
  },
  methods: {
    async fetchUpcomingMovies() {
      const response = await this.$http.get(
        "https://api.themoviedb.org/3/movie/upcoming"
      );

      this.upcomingMovies = response.data.results.slice(1, 6);
      console.log(this.upcomingMovies);
    },
  },
};
</script>

<style>
.carousel-3d-container figure {
  margin: 0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}

.next span,
.prev span {
  color: red;
}
</style>
