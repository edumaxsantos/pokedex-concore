<template>
  <div>
    <div v-if="loading">
      Carregando
    </div>
    <div v-else class="container">
      <gallery-component :pokemonSprites="pokemonInfo.sprites"/>
      <div class="content">
        <div class="header">
          <basic-info-component :basicInfo="basicInfo" />
        </div>
        <div class="box">
          <div class="abilities">
            <abilities-component :abilities="pokemonInfo.abilities"/>
          </div>
          <div class="moves">
            <moves-component :moves="pokemonInfo.moves" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonService from '@/services/PokemonService'
import GalleryComponent from '@/components/GalleryComponent'
import BasicInfoComponent from '@/components/pokemonInfo/BasicInfoComponent'
import AbilitiesComponent from '@/components/pokemonInfo/AbilitiesComponent'
import MovesComponent from '@/components/pokemonInfo/MovesComponent'
export default {
  name: 'PokemonInfoComponent',
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    pokemonInfo() {
      console.log(this.$store.state.pokemonInfo)
      return this.$store.state.pokemonInfo
    },
    basicInfo() {
      return {
        id: this.pokemonInfo.id,
        name: this.pokemonInfo.name,
        types: this.pokemonInfo.types,
        weight: this.pokemonInfo.weight,
        height: this.pokemonInfo.height,
        base_experience: this.pokemonInfo.basic_experience 
      }
    }
  },
  methods: {
    async getPokemonInfo(pokemonId) {
      this.loading = true
      return await PokemonService.getPokemonInfo(pokemonId)
    }
  },
  mounted() {
    this.getPokemonInfo(this.$route.params.pokemonId).then(response => {
      console.log(response)
      this.$store.dispatch('savePokemonInfo', response.data)
      this.loading = false
    }).catch(error => {
      alert('Unable to get data from API. ' + error)
      console.log(error)
    })
  },
  components: {GalleryComponent, BasicInfoComponent, AbilitiesComponent, MovesComponent}
}
</script>
<style scoped>


</style>
