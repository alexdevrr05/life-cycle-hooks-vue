<template>
  <h1>PokemonPage</h1>
  <h2>#{{ id }}</h2>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      require: true,
    },
  },

  created() {
    // console.log(this.$attrs);
  },
};
</script>
