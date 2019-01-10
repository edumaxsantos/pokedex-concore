import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemonList: []
  },
  mutations: {
    savePokemonList(state, list) {
      state.pokemonList = list
    }
  },
  actions: {
    savePokemonList(context, list) {
      context.commit('savePokemonList', list)
    }
  },
  getters: {
    getPokemonList(state) {
      return state.pokemonList
    }
  }
})
