<template>
  <div class="container">
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
    <div class="columns is-multiline ">
      <router-link v-for="pokemon of pokemonList" 
      :key="pokemon.pokedex_entry" 
      class="column is-one-third my-box"
      :to="{name: 'Info', params: {pokemonId: pokemon.id}}">
        <div>{{pokemon.pokedex_entry}} - {{pokemon.id[0].toUpperCase() + pokemon.id.slice(1)}}</div>
      </router-link>
      <!--div v-for="pokemon of pokemonList" :key="pokemon.pokedex_entry" class="column is-one-third my-box">
          <router-link v-bind:to="'/info/'+pokemon.id"><div>{{pokemon.pokedex_entry}} - {{pokemon.id[0].toUpperCase() + pokemon.id.slice(1)}}</div></router-link>
      </div-->
    </div>
      
  </div>
</template>

<script>
import PokemonService from '@/services/PokemonService'
export default {
    name: 'PokemonListComponent',
    data() {
      return {
        isLoading: false,
        isFullPage: true
      }
    },
    computed: {
      pokemonList() {
        return this.$store.state.pokemonList
      }
    },
    methods: {
      async getPokemonList() {
        this.isLoading = true
        return await PokemonService.getPokemonList()
      }
    },
    mounted() {
        this.getPokemonList().then(response => {
          this.isLoading = false
          this.$store.dispatch('savePokemonList', response.data)
        }).catch(error => {
          alert('Unable to get data from API. ' + error)
          console.log(error)
        })
    }
}
</script>
<style scoped>

.my-box {
  border-radius: 6px;
}

.columns {
  margin-left: 0;
  margin-right: 0;
}

.my-box:hover {
  background-color:#3273dc;
}
</style>
