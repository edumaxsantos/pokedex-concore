<template>
  <div class="container">
    <h1>#{{basicInfo.id}} - {{basicInfo.name}}</h1>
    <div>
      <h4>Basic info</h4>
      <p> Type(s): <span v-for="type of basicInfo.types" :key="type" :class="['tag', type]">{{type.toUpperCase()}}</span></p>
      <p>Weight: {{basicInfo.weight / 10}} kg</p>
      <p>Height: {{basicInfo.height / 10}} m</p>
      <p>Base Experience: {{basicInfo.base_experience}}</p>
    </div>
</div>
</template>

<script>
export default {
  name: 'BasicInfoComponent',
  props: ['basicInfo']
}
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tag {
  color: white;
  margin-left: 5px;
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
