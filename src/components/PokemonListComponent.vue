<template>
  <div>
    <ul>
      <li v-for="pokemon of pokemonList" :key="pokemon.pokedex_entry">
        {{pokemon.pokedex_entry}} - {{pokemon.id}}</li>
    </ul>
  </div>
</template>

<script>
import PokemonService from '@/services/PokemonService'
export default {
    name: 'PokemonListComponent',
    data() {
      return {
        pokemonList: []
      }
    },
    methods: {
      async getPokemonList() {
        const response = await PokemonService.getPokemonList()
        this.pokemonList = response.data
        console.log(this.pokemonList)
      }
    },
    mounted() {
      this.getPokemonList()
    }
}
</script>
<style scoped>

</style>
