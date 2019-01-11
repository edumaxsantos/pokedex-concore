import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/views/Home.vue'
import PokemonListComponent from '@/components/PokemonListComponent'
import PokemonInfoComponent from '@/components/PokemonInfoComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [   
    {
      path: '/listar',
      name: 'listar',
      component: PokemonListComponent
    },
    {
      path: '/info/:pokemonId',
      name: 'Info',
      component: PokemonInfoComponent
    },
    {
      path: '*',
      redirect: {name: 'listar'}
    }
  ]
})
