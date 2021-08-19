<template>
<div>
    <v-container>
        <v-row>
            <v-col cols="12" sm="4">
                <v-hover
        v-slot="{ hover }"
        open-delay="200"
      >
<v-card :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }">
     <router-link :to="`/movie/${movie.id}`">
          <v-img :src="posterPath" alt="" class=""/>
      </router-link> 
  </v-card>
       
</v-hover>
            </v-col>  
            <v-col cols="12" sm="8">
                <h1 class="grey--text text-darken-3 mt-5">{{this.movie.title}}</h1>
                <v-row>
                    <v-col cols="12" sm="2">
                        <v-rating
                        :value="movie.vote_average / 2"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                        >

                        </v-rating>

                    </v-col>
                    <v-col cols="12" sm="3">
                        <span class="gray--text ml-n7">
                            {{movie.vote_average * 10}}% | {{movie.release_date}}
                        </span>
                    </v-col>
                    <v-col cols="12" sm="7">
                        <div class="subtitle-2 grey--text ml-n16">
                            <span v-for="(item, index) in movie.genres" :key="index" class="ml-1">
                                {{item.name}}
                                <span v-if="(movie.genres.length - 1 != index)">,</span>
                                </span> 
                        </div>
                    </v-col>
                </v-row>
                <p class="mt-5 grey--text text--darken-3 subheader">{{this.movie.overview}}</p>
                <div class="mt-5">
                    <h2 class="mt-5 grey--text text--darken-3">Featured Cast</h2>
                    <div :key="index" v-for="(crew, index) in movie.credits.crew" class="mt-5">
                        <div v-if="index < 2" class="">
                            <h3>{{crew.name}}</h3>
                            <span class="grey--text">{{crew.job}}</span>
                        </div>
                    </div>
                </div>
                <v-dialog
                v-model="dialog"
                persistent
                max-width="800px"
                >
                    <template v-slot:activator="{on, attrs}">
                        <v-btn tile color="error" v-bind="attrs" v-on="on" @click.prevent="openYouTubeModel">
                            <v-icon left>mdi-play</v-icon>Play
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">{{this.movie.title}}</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="">
                                        <div class="iframe-container">
                                            <img :src="mediaURL" v-if="!isVideo" />
                                            <iframe allowfullscreen v-if="isVideo" :src="mediaURL"></iframe>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="error" text @click="dialog = flase">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-btn tile color="error" class="ml-2">
                    <v-icon left>mdi-heart</v-icon>Favorite
                </v-btn>
            </v-col>
        </v-row> 
        <v-divider class="mt-2"></v-divider>
         <Cast :casts="movie.credits.cast"/>
         <v-divider class="mt-2"></v-divider>
         <Images :images="movie.images.backdrops" />
    </v-container>
 
    
  </div>
  

</template>

<script>
import Cast from "../components/Cast.vue"
import Images from "../components/Images.vue"
export default {
components: {
Cast,
Images
},
   data() {
    return {
      movie: {
        credits: {
          crew: {},
        },
        images: {
          backdrops: {},
        },
      },
      isVideo: false,
      mediaURL: "",
      dialog: false,
    };
  },
  mounted() {
    this.fetchMovie(this.$route.params.id);
  },
   watch: {
    "$route.params.id": {
      handler() {
        this.fetchMovie(this.$route.params.id);
      },
      immediate: true,
    },
  },
   computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
    },
  },
  methods: {
    async fetchMovie(movieId) {
      const response = await this.$http.get(
        "/movie/" + movieId + "?append_to_response=credits,videos,images"
      );
      this.movie = response.data;
    },

    openYouTubeModel() {
      this.mediaURL = this.youtubeVideo();
      this.isVideo = true;
    },
    openImageModel() {
      this.isVideo = false;
    },
    youtubeVideo() {
      if (!this.movie.videos) return;
      return (
        "https://www.youtube.com/embed/" + this.movie.videos.results[0].key
      );
    }, 
  },
  
}
</script>

<style>
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}

.iframe-container iframe {
   border: 0;
   height: 100%;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
}
</style>