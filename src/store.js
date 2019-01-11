import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemonList: [],
    pokemonInfo: {}
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
