<template>
  <div>
    <ul>
      <li v-for="pokemon of pokemonList" :key="pokemon.pokedex_entry">
        <router-link v-bind:to="'/info/'+pokemon.id">{{pokemon.pokedex_entry}} - {{pokemon.id}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import PokemonService from '@/services/PokemonService'
export default {
    name: 'PokemonListComponent',
    data() {
      return {
        pokemonList: this.$store.getters.getPokemonList
      }
    },
    methods: {
      async getPokemonList() {
        if (this.$store.getters.getPokemonList.length == 0) {
          const response = await PokemonService.getPokemonList()
          this.$store.dispatch('savePokemonList', response.data)
        }
        
      }
    },
    mounted() {
        this.getPokemonList()
    }
}
</script>
<style scoped>
li {
  list-style: none;
}
</style>
