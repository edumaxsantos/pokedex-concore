<template>
  <div>
    <b-collapse class="card" :open="false">
      <div slot="trigger" slot-scope="props" class="card-header">
        <h4 class="card-header-title">Abilities</h4>
        <a class="card-header-icon">
          <b-icon
              :icon="props.open ? 'menu-down' : 'menu-up'">
          </b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <div class="card" v-for="ability of abilities" :key="abilities.indexOf(ability)">
            <b-collapse class="card" :open="false">
              <div slot="trigger" slot-scope="props" class="card-header">
                <p class="card-header-title is-centered">
                  <i>{{ability.name}}</i>
                </p>
                <a class="card-header-icon">
                  <b-icon
                      :icon="props.open ? 'menu-down' : 'menu-up'">
                  </b-icon>
                </a>
              </div>
              <div class="card-content">
                <div class="content">
                  <p><i>{{ability.text}}</i></p>
              <p><b>Short Effect:</b> {{ability.short_effect}}</p>
              <p><b>Effect:</b> {{ability.effect}}</p>
                </div>
              </div>
            </b-collapse>
          </div>
        </div>
      </div>
    </b-collapse>
    
  </div>
</template>

<script>
export default {
  name: 'AbilitiesComponent',
  props: ['abilities']
}
</script>
<style scoped>
</style>
