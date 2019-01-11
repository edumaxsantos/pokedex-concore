<template>
  <div id="app">
    <div id="nav">
      <router-link to="/listar" v-show="checkRoute">Listar todos os Pokémon</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    checkRoute() {
      return this.$route.path !== '/listar'
    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
#app {
  font-family: Helvetica, Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
