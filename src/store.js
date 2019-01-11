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
    }
  },
  mutations: {
    savePokemonList(state, list) {
      state.pokemonList = list
    },
    savePokemonInfo(state, info) {
      state.pokemonInfo = info
    }
  },
  actions: {
    savePokemonList(context, list) {
      context.commit('savePokemonList', list)
    },
    savePokemonInfo(context, info) {
      context.commit('savePokemonInfo', info)
    }
  }
})
