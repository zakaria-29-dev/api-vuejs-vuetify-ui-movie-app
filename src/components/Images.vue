<template>
  <div>
      <h2 class="mt-2 grey--text" >Images</h2>
      <v-container>
          <v-row>
              <v-col cols="12" sm="3" :key="index" v-for="(image, index) in images">
                  <v-hover v-slot=" {hover }" open-delay="200">
                      <v-card :elevation="hover ? 16 : 2" :class="{'on-hover' : hover}">
                          <v-img :src="movieImage(image)" alt=""></v-img>
                      </v-card>
                  </v-hover>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
props: {
    images: {
        required: true,
    },
},
methods: {
    movieImage(image){
        if(image.file_path){
            return "https://image.tmdb.org/t/p/w300/" + image.file_path;
        }else{
            return "https://via.placeholder.com/300x450";
        }
    },
}
}
</script>

<style>

</style>