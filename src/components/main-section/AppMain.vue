<script>

import Slider from './sections/slider-section/Slider.vue'
import ProsInfo from './sections/pros-section/ProsInfo.vue'

export default {
  name: 'AppMain',
  components:{
    Slider,
    ProsInfo
  }
}
</script>
<template>
  <main>
    <Slider />
    <ProsInfo />
  </main>
</template>
<style lang="sass">
  main
    padding-top: 125px

  .container-fluid
    height: 900px
</style>