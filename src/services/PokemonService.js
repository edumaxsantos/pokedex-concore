import Api from '@/api'

export default {
  getPokemonList() {
    return Api().get('/pokemon/')
  },
  getPokemonInfo(pokemonId) {
    return Api().get('/pokemon/' + pokemonId)
  }
}