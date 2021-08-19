<template>
  <div>
      <h2 class="mt-2 grey--text">Cast</h2>
      <v-container>
          <v-row>
              <v-col cols="12" sm="3" :key="inedx" v-for="(cast, inedx) in casts">
                  <v-hover v-slot="{hover}" open-delay="200">
                      <v-card :elevation="hover ? 16 : 2" :class="{'on-hover' :hover}">
                          <v-img :src="castProfileImage(cast)" />
                          <v-card-title class="subtitle-2">{{cast.name}}</v-card-title>
                      </v-card>
                  </v-hover>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
export default {
props:{
    casts: {
        required: true,
    },
},
methods:{
    castProfileImage(cast) {
        if(cast.profile_path){
            return "https://image.tmdb.org/t/p/w300" + cast.profile_path;
        }else{
            return "https://via.placeholder.com/300x450";
        }
    }
}
}
</script>

<style>

</style>