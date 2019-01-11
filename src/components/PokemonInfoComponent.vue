<template>
  <div>
    <div v-if="loading">
      Carregando
    </div>
    <div v-else class="container">
      <gallery-component :pokemonSprites="pokemonInfo.sprites"/>
      <div class="content">
        <div class="header">
          <h1>{{pokemonInfo.id}} - {{capitalName(pokemonInfo.name)}}</h1>
          <span v-for="type of pokemonInfo.types" :key="type" :class="['tag', type]">{{type}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonService from '@/services/PokemonService'
import GalleryComponent from '@/components/GalleryComponent'
import capitalName from '@/capitalName'
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
    }
  },
  methods: {
    async getPokemonInfo(pokemonId) {
      this.loading = true
      return await PokemonService.getPokemonInfo(pokemonId)
    },
    capitalName(word) {
      return capitalName(word)
    }
  },
  mounted() {
    this.getPokemonInfo(this.$route.params.id).then(response => {
      console.log(response)
      this.$store.dispatch('savePokemonInfo', response.data)
      this.loading = false
    }).catch(error => {
      alert('Unable to get data from API. ' + error)
      console.log(error)
    })
  },
  components: {GalleryComponent}
}
</script>
<style scoped>

.tag {
  color: white;
}

.normal {
  background-color:#A8A878;
}

.fire {
  background-color: #F08030;
}

.water {
  background-color: #6890F0;
}

.grass {
  background-color: #78C850;
}

.electric {
  background-color: #F8D030;
}

.ice {
  background-color: #98D8D8;
}

.fighting {
  background-color: #C03028;
}

.poison {
  background-color: #A040A0;
}

.ground {
  background-color: #E0C068;
}

.flying {
  background-color: #A890F0;
}

.psychic {
  background-color: #F85888;
}

.bug {
  background-color: #A8B820;
}

.rock {
  background-color: #B8A038;
}

.ghost {
  background-color: #705898;
}

.dark {
  background-color: #705848;
}

.dragon {
  background-color: #7038F8;
}

.steel {
  background-color: #B8B8D0;
}

.fairy {
  background-color: #F0B6BC;
}

</style>
