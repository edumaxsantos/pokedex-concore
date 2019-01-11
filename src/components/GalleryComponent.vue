<template>
  <div class="container">
    <figure class="image is-128x128">
      <img :src="imageSelected">
    </figure>
    <div class="my-columns">
      <figure class="image is-64x64" v-for="image of listImage" :key="image">
        <img class="is-rounded" :src="image" @mouseover="imgIndex=listImage.indexOf(image)">
      </figure>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GalleryComponent',
  data() {
    return {
      imgIndex: 0
    }
  },
  props: {
    'pokemonSprites': {
      type: Object,
      required: true
    }
  },
  methods: {
  },
  computed: {
    listImage() {
      let possibleKeys = ["front_default", "back_default", "front_female", "back_female", "front_shiny", "back_shiny", "front_shiny_female", "back_shiny_female"]
      return possibleKeys.map(key => {
        return this.pokemonSprites[key]
      }).filter(key => key !== null)
    },
    imageSelected() {
      return this.listImage[this.imgIndex]
    }
  }
}
</script>
<style scoped>
.my-columns {
  display: flex;

}
.container {
  max-width: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
