<script>
import { store } from '../../../../store.js'
export default {
  name: 'SliderItem',
  props:{
    sliderItem: Object,
    sliderLength: Number
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getSentence(){
      return this.sliderItem.name.replace((this.sliderItem.name).split(" ").slice(-1), '')
    },
    goNext(){
      if(++store.sliderItemActive > this.sliderLength - 1)
          store.sliderItemActive = 0
    },
    goPrev(){
      if(--store.sliderItemActive < 0)
          store.sliderItemActive =  this.sliderLength - 1
    }
  }
}
</script>
<template>
  <div class="container-fluid p-0">
    <div class="d-flex my-container">
      <div class="col-5 d-flex flex-column gap-4 pt-200">
        <h2>17 years of experience</h2>
        <h1>{{ getSentence() }} <span>{{ (this.sliderItem.name).split(" ").slice(-1)[0] }}</span></h1>
        <img decoding="async" src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2022/04/divider.svg" alt="" class="divider" style="width: 83px; height: 7px; left: 0px; top: 0px;" />
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonatia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated hey live in Bookmarksgrove.</p>
        <div class="d-flex justify-content-center align-items-center button-container">
          <button class="black-button">read more</button>
        </div>
      </div>
      <div class="col-7" :style='{ backgroundImage: "url(" + sliderItem.url + ")", }'>
      </div>
    </div>
    <div class="row d-flex justify-content-between footer">
      <div class="d-flex col gap-3 socials">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
        <a href="#">Youtube</a>
      </div>
      <div class="col d-flex gap-2">
        <button class="slider-button" @click="goPrev">
          <font-awesome-icon class="cursor-pointer" icon="fa-solid fa-caret-left"/>
        </button>
        <button class="slider-button" @click="goNext">
          <font-awesome-icon class="cursor-pointer" icon="fa-solid fa-caret-right"/>
        </button>
      </div>
      <div></div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
  @use '../../../../styles/partials/_variables' as *
  @use '../../../../styles/partials/_mixins' as *

  h2
    color: $green-2
    font-size: 13px
    font-weight: 500
    text-transform: uppercase
    line-height: 120%
    letter-spacing: 5px
  h1
    font-weight: 700
    font-size: 60px
    line-height: 120%
    letter-spacing: -3px
    word-spacing: 10px
    span
      color: $green-2
  p
    font-size: 12px
    color: $grey-1
  .black-button
    text-transform: uppercase
    font-size: 10px
    padding: 14px 40px
    border: none
    border-radius: 80px
    background-color: $black-2
    color: $white-2
    overflow: hidden
    box-shadow: 3px 3px 15px $black-2
    transition: all .3s ease-in
    &:hover
      color: white
      box-shadow: 3px 3px 15px $green-2
      background-color: $green-2
      padding: 12.5px 35px 12.5px 35px

  .col-7
    position: relative
    overflow: hidden
    background-size: cover
    height: 700px
    background-position-x: 50px
    background-position-y: 40px
    background-repeat: no-repeat

  .footer
    margin-top: 120px
  .socials
    font-size: 14px
    font-weight: 500
    a
      transition: all .2s
      &:hover
        color: $green-2

  .slider-button
    color: $white-1
    border-radius: 100%
    border: none
    padding: 7px 15px
    background-color: $grey-2
    transition: all .2s
    &:hover
      background-color: $green-2

</style>