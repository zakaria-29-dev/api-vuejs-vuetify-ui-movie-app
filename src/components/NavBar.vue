<template>
  <nav>
      <v-system-bar app dark>
          <v-spacer></v-spacer>
          <v-icon>mdi-minus</v-icon>
          <v-icon>mdi-checkbox-blank-outline</v-icon>
          <v-icon>mdi-close</v-icon>
      </v-system-bar>
      <v-app-bar app color="pink" dark>
          <v-icon class="mr-2">fas fa-video</v-icon>
          <v-toolbar-title>AAE Movie</v-toolbar-title>
          <v-btn text class="ml-2" to="/">Movies</v-btn>
          <v-btn text class="ml-2" to="/actors">Actors</v-btn>
          <v-btn text class="ml-2">Profile</v-btn>
          <v-btn text class="ml-2">Contact</v-btn>
          <v-spacer></v-spacer>
          <v-autocomplete
          clearable
          hide-no-data
          hide-selected
          color="white"
          label="search"
          prepend-inner-icon="search"
          flat
          :items="movies"
          item-text="title"
          item-value="id"
          id="search"
          >
            <template v-slot:item="{item}">
                <v-btn text :to="`/movie/${item.id}`">{{item.title}}</v-btn>
            </template>
          </v-autocomplete>
          <v-btn icon>
              <v-badge color="green" content="2" overlap>
                  <v-icon>far fa-bell</v-icon>
              </v-badge>
          </v-btn>
          <v-badge bordered bottom color="green" dot offset-x="10" offset-y="10">
              <v-avatar size="40">
                  <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
              </v-avatar>
          </v-badge>
      </v-app-bar>
  </nav>
</template>

<script>
export default {
    data:()=>({
        drawer:null,
        model:'',
        search:null,
        movies: []
    }),
    mounted(){
        this.loadMovies();
    },
    methods: {
        loadMovies: async function() {
            try{
                const response = await this.$http.get("/movie/popular");
                this.movies = response.data.results;
                
            }catch(error){
                console.log(error);
            }
        }
    }
}
</script>

<style>

</style>