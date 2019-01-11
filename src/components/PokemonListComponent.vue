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
        
      }
    },
    computed: {
      pokemonList() {
        return this.$store.state.pokemonList
      }
    },
    methods: {
      async getPokemonList() {
        return await PokemonService.getPokemonList()
      }
    },
    mounted() {
        this.getPokemonList().then(response => {
          this.$store.dispatch('savePokemonList', response.data)
        }).catch(error => {
          alert('Unable to get data from API. ' + error)
          console.log(error)
        })
    }
}
</script>
<style scoped>
li {
  list-style: none;
}
</style>
