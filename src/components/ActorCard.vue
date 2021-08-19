<template>
<v-hover
        v-slot="{ hover }"
        open-delay="200"
      >
<v-card :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }">
    <router-link :to="`/actor/${actor.id}`">
          <v-img :src="profileImage" alt=""/>
      </router-link>

    <v-card-title class="subtitle-2"> {{ actor.name }}</v-card-title>

    <v-card-text>
     <p class="grey--text">
        {{ knownFor }}
      </p>
    </v-card-text>  
  </v-card>
       
</v-hover>
</template>

<script>
export default {
  props: {
    actor: {
      required: true,
    },
  },
  computed: {
    profileImage() {
      return (
        "https://image.tmdb.org/t/p/w235_and_h235_face/" +
        this.actor.profile_path
      );
    },
    knownFor() {
      let knownStr = "";
      for (let i; i < this.actor.known_for.length - 1; i++) {
        knownStr += this.actor.known_for[i].title;
      }

      return knownStr;
    },
  },
};
</script>

<style></style>
