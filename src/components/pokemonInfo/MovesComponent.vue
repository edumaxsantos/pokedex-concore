<template>
  <div>
    <b-collapse class="card" :open="false">
      <div slot="trigger" slot-scope="props" class="card-header">
        <h4 class="card-header-title">Moves</h4>
        <a class="card-header-icon">
          <b-icon
              :icon="props.open ? 'menu-down' : 'menu-up'">
          </b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <div class="card" v-for="move of moves" :key="moves.indexOf(move)">
            <b-collapse class="card" :open="false">
              <div slot="trigger" slot-scope="props" class="card-header">
                <p class="card-header-title is-centered">
                  <i>{{move.name}}</i>
                </p>
                <a class="card-header-icon">
                  <b-icon
                      :icon="props.open ? 'menu-down' : 'menu-up'">
                  </b-icon>
                </a>
              </div>
              <div class="card-content">
                <div class="content">
                  <p class="first-line">
                    <span><b>Damage class: </b><span :class="['tag', move.damage_class]">{{move.damage_class}}</span></span>
                    <span><b>Accuracy: </b>{{move.accuracy !== null ? move.accuracy + '%' : 'N/A'}}</span>
                  </p>
                  <div class="other-lines">
                    <p><b>Flavor Test: </b>{{move.flavor_test}}</p>
                    <p><b>Short Effect Entries: </b> {{move.short_effect_entries}}</p>
                    <p><b>Effect Entries: </b>{{move.effect_entries}}</p>
                  </div>
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
  name: 'MovesComponent',
  props: ['moves']
}
</script>
<style scoped>
.physical {
  background-color: #C92112;
  color: #F67A1A;
}
.special {
  background-color: #4F5870;
  color: white;
}

.status {
  background-color: #8C888C;
  color: white;
}

.first-line {
  display: flex;
  justify-content: space-evenly;
}

.other-lines {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
</style>
