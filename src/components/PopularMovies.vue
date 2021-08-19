<template>
  <div class="mx-3">
      <h2 class="mt-2 grey--text"> Popular Movies</h2>
     <v-container fluid>
    <v-row>
        <v-col cols="12" sm="3" v-for="movie in movies" :key="movie.id"  >
          <MovieCard :movie="movie" :genres="genres"/>
          </v-col>
    </v-row>
      </v-container>  
      
  </div>  
</template>

<script>
import MovieCard from '../components/MovieCard'
export default {  
components :{
    MovieCard,
},
data: function (){
  return {
    movies: [],
    genres: []
  };
},
async mounted(){
  this.fetchGenres();
  try {
     const response = await this.$http.get("/movie/popular");
     this.movies = response.data.results;
  }catch (error) {
    console.log(error);
  }
},
methods: {
  async fetchGenres() {
    try {
     const response = await this.$http.get("/genre/movie/list");
     this.genres = response.data.genres;
  }catch (error) {
    console.log(error);
  }
  }
}
}
</script>

<style>

</style>