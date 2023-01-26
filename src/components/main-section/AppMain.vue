<script>

import Slider from './sections/slider-section/Slider.vue'
import ProsInfo from './sections/pros-section/ProsInfo.vue'
import AboutUs from './sections/about-us-section/AboutUs.vue'
import ProjectExample from './sections/project-example-section/project-example.vue'
import dataInfo from './sections/data-info-section/dataInfo.vue'

export default {
  name: 'AppMain',
  components:{
    Slider,
    ProsInfo,
    AboutUs,
    ProjectExample,
    dataInfo
  }
}
</script>
<template>
  <main>
    <Slider />
    <ProsInfo />
    <AboutUs />
    <ProjectExample />
    <dataInfo/>
  </main>
</template>
<style lang="sass">
  main
    padding-top: 125px

  .container-fluid
    height: 900px
</style>