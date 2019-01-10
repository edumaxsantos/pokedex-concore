<template>
  <div class="home">
    <pokemon-list-component />
  </div>
</template>

<script>
import PokemonListComponent from '@/components/PokemonListComponent'
export default {
  name: 'home',

  components: {
    PokemonListComponent
  }
}
</script>
<style scoped>

</style>
