<template>
  <div>
    <div>
      Name: {{pokemonInfo.name}}
    </div>
  </div>
</template>

<script>
import PokemonService from '@/services/PokemonService'
export default {
  name: 'PokemonInfoComponent',
  data() {
    return {}
  },
  computed: {
    pokemonInfo() {
      return this.$store.state.pokemonInfo
    }
  },
  methods: {
    async getPokemonInfo(pokemonId) {
        return await PokemonService.getPokemonInfo(pokemonId)
      }
  },
  mounted() {
    this.getPokemonInfo(this.$route.params.id).then(response => {
      console.log(response)
      this.$store.dispatch('savePokemonInfo', response.data)
    }).catch(error => {
      alert('Unable to get data from API. ' + error)
      console.log(error)
    })
    }
}
</script>
<style scoped>

</style>
