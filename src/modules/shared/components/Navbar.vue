<template>
  <div id="navbar">
    <div class="navbar-container">
      <router-link to="/">Pokemon List</router-link>
      <router-link :to="{ name: 'pokemon-id', params: { id: 58 } }"
        >Pokemon by id</router-link
      >
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#navbar {
  display: flex;
  justify-content: center;
}

.navbar-container a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
  text-decoration: none;
}

a.router-link-active {
  border-bottom: 2px solid #42b983;
}
</style>
