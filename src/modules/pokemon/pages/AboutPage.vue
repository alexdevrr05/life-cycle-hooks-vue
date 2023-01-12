<template>
  <div>
    <div class="container">
      <h2>{{ name }}</h2>
      <button @click="onChangeName">Change name</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Alex',
    };
  },
  methods: {
    onChangeName() {
      this.name = 'Alejandro';
    },
  },

  //   NO HTTP
  beforeCreate() {
    console.log('beforeCreate');
  },
  //   HTTP resquest
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  activated() {
    console.log('activated');
  },
  deactivated() {
    console.log('deactivated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
  errorCaptured() {
    console.log('errorCaptured');
  },
  renderTracked() {
    console.log('rendertracked');
  },
  renderTriggered() {
    console.log('renderTriggered');
  },
};
</script>

<style scoped>
.container {
  margin-top: 1rem;
}
</style>
