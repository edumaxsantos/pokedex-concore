<template>
  <div>
    <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true"></b-loading>
    <div v-if="!isLoading" class="container">
      <gallery-component :pokemonSprites="pokemonInfo.sprites"/>
      <div class="counter">
        <div class="my-tags">
          <b-taglist attached>
            <b-tag type="is-dark">Captured</b-tag>
            <b-tag type="is-primary">{{myPokemonCount}}</b-tag>
          </b-taglist>
          <div class="flex-buttons">
            <button class="button is-small is-outlined is-primary" @click="subMyPokemon">Sub</button>
            <button class="button is-small is-outlined is-primary" @click="addMyPokemon">Add</button>
          </div>
        </div>
        
      </div>
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
      isLoading: false,
      isFullPage: true,
      pokemonId: this.$route.params.pokemonId,
      myPokemonCount: 0
    }
  },
  computed: {
    pokemonInfo() {
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
      this.isLoading = true
      return await PokemonService.getPokemonInfo(pokemonId)
    },
    addMyPokemon() {
      this.myPokemonCount++
      this.updateLocalStorage()

    },
    subMyPokemon() {
      this.myPokemonCount--
      this.updateLocalStorage()
    },
    getMyPokemonCount() {
      const myPokemon = JSON.parse(localStorage.getItem('myPokemon'))
      if (myPokemon !== null && this.pokemonId in myPokemon)
        this.myPokemonCount = myPokemon[this.pokemonId]
      else
        this.myPokemonCount = 0
    },
    updateLocalStorage() {
      const old = JSON.parse(localStorage.getItem('myPokemon'))
      let updated = {}
      updated[this.pokemonId] = this.myPokemonCount
      localStorage.setItem('myPokemon', JSON.stringify(Object.assign(old, updated)))
    }
  },
  mounted() {
    this.getPokemonInfo(this.pokemonId).then(response => {
      this.isLoading = false
      this.$store.dispatch('savePokemonInfo', response.data)
      this.getMyPokemonCount()
    }).catch(error => {
      alert('Error. ' + error)
      console.log(error)
    })
  },
  components: {GalleryComponent, BasicInfoComponent, AbilitiesComponent, MovesComponent}
}
</script>
<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.my-tags > * {
  margin-bottom: 0 !important;
}

.flex-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px !important;
}

</style>
