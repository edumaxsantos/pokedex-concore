import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemonList: [],
    pokemonInfo: {
      abilities: [],
      base_experience: 0,
      height: 0,
      id: 0,
      is_default: false,
      moves: [],
      name: '',
      order: 0,
      sprites: {},
      types: [],
      weight: 0
    },
    myPokemon: {}
  },
  mutations: {
    savePokemonList(state, list) {
      state.pokemonList = list
    },
    savePokemonInfo(state, info) {
      state.pokemonInfo = info
    },
    addMyPokemon(state, pokemonId) {
      if(pokemonId in state.myPokemon) 
        state.myPokemon[pokemondId]++
      else
        state.myPokemon[pokemondId] = 1
      
      localStorage.setItem('myPokemon', JSON.stringify(state.myPokemon))
    },
    subMyPokemon(state, pokemonId) {
      if(pokemonId in state.myPokemon) 
        state.myPokemon[pokemonId]--
      else
        state.myPokemon[pokemonId] = 0

      localStorage.setItem('myPokemon', JSON.stringify(state.myPokemon))
    },
    updateMyPokemon(state) {
      state.myPokemon = JSON.parse(localStorage.getItem('myPokemon'))
    }
  },
  actions: {
    savePokemonList(context, list) {
      context.commit('savePokemonList', list)
    },
    savePokemonInfo(context, info) {
      context.commit('savePokemonInfo', info)
    },
    addMyPokemon(context, pokemonId) {
      context.commit('addMyPokemon', pokemonId)
    },
    subMyPokemon(context, pokemonId) {
      context.commit('subMyPokemon', pokemonId)
    }
  }
})
