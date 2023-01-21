<template>
  <div id="navbar">
    <div class="navbar-container">
      <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link>
      <router-link :to="{ name: 'pokemon-id', params: { id: 58 } }"
        >Pokemon by id</router-link
      >
      <router-link :to="{ name: 'about' }">About</router-link> -->
      <custom-link v-for="link of links" :key="link.to" :link="link" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  components: {
    CustomLink: defineAsyncComponent(() => import('./CustomLink')),
  },

  data() {
    return {
      links: [
        { to: 'pokemon-home', name: 'Pokemons' },
        { to: 'pokemon-id', name: 'By id', id: 151 },
        { to: 'pokemon-about', name: 'About' },
        { to: 'dbz-characters', name: 'Dbz characters' },
        { to: 'dbz-about', name: 'Dbz about' },
        { to: 'https://google.com', name: 'Google' },
      ],
    };
  },
};
</script>

<style scoped>
#navbar {
  display: flex;
  justify-content: center;
}

/*a.router-link-active {
  border-bottom: 2px solid #42b983;
}*/
</style>
