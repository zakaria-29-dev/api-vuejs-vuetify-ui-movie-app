<template>
  <v-hover
  v-slot="{hover}"
  open-delay="200"
  >
  <v-card :elevation="hover ? 16:2" :class="{'on-hover' : hover}">
      <router-link :to="`/movie/${movie.id}`">
      <v-img :src="posterPath" alt="" class=""></v-img>
      </router-link>
      <v-card-title class="subtitle-2">{{movie.title}}</v-card-title>
      <v-card-text>
          <v-row align="center" class="mx-0">
              <v-rating :value="movie.vote_average / 2" color="amber" dense half-increments readonly size="14">
              </v-rating>
              <div class="grey--text ml-4">
                  {{movie.vote_average * 10}} % | {{movie.release_date}}
              </div>
          </v-row>
          <div class="my-4 subtitle-2">
              <span v-for="(genre, index) in movie.genre_ids" :key="genre">
                  {{genreTypeName(genre, index)}}
              </span>
          </div>
      </v-card-text>
  </v-card>

  </v-hover>
</template>

<script>
export default {
  props: {
    movie: {
      required: true,
    },
     genres: {
      required: true,
    }
  },
  computed: {
    posterPath(){
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path
    }
  },
  methods: {
    genreTypeName(genraId, index) {

      for(const item of this.genres) {
        if(item.id == genraId) {
          if(this.movie.genre_ids.length - 1 == index){
            return item.name ;
          }else {
            return item.name + ",";
          }
          
        }
      }
    }
  }
}
</script>

<style>

</style>