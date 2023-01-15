<template>
  <a v-if="isExternalLink" :href="link.to" target="_blank">{{ link.name }}</a>
  <router-link v-else :to="link.to" v-slot="{ href, isActive }">
    <a :href="href" :class="isActive ? 'is-active' : 'normal-link'">{{
      link.name
    }}</a>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },

  computed: {
    isExternalLink() {
      return this.link.to.startsWith('http');
    },
  },
};
</script>

<style scoped>
.navbar-container a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
  text-decoration: none;
}

.is-active {
  border-bottom: 2px solid #42b983;
}

.normal-link {
  color: #c6c5c5;
}
</style>
