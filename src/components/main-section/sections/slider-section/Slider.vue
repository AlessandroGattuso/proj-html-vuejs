<script>

import SliderItem from './SliderItem.vue';
import { store } from '../../../../store.js'

export default {
  name: 'Slider',
  components:{
    SliderItem
  },
  data() {
    return {
      store,
      sliderItems: [
        {
          name: 'We Are A Web Agency',
          url: '../../../../../public/images/Group-36-2x.png',
        },
        {
          name: 'A Group Of Expert Planners',
          url: '../../../../../public/images/Group-40-2x.png',
        },
        {
          name: 'Focus on Your Business',
          url: '../../../../../public/images/Group-35-2x.png',
        }
      ]
    }
  },  
}
</script>
<template>
  <div class="container-fluid pe-0 d-flex">
    <SliderItem v-for="(item, index) in sliderItems" :sliderItem="item" :sliderLength="sliderItems.length" :key="index" class="slider-item" :class="(index == store.sliderItemActive) ? 'd-block' : 'd-none'" name="slide" />
  </div>
</template>
<style lang="sass" scoped>
  @use '../../../../styles/partials/_variables' as *
  .container-fluid
    background-color: $white-1
    padding-left: 45px
    overflow: hidden
    
</style>