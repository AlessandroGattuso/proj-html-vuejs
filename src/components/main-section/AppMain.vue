<script>

import Slider from './sections/slider-section/Slider.vue'
import ProsInfo from './sections/pros-section/ProsInfo.vue'
import AboutUs from './sections/about-us-section/AboutUs.vue'

export default {
  name: 'AppMain',
  components:{
    Slider,
    ProsInfo,
    AboutUs
  }
}
</script>
<template>
  <main>
    <Slider />
    <ProsInfo />
    <AboutUs />
  </main>
</template>
<style lang="sass">
  main
    padding-top: 125px

  .container-fluid
    height: 900px
</style>