<script>

export default {
  name: "AboutUs"
}
</script>
<template>
  <div class="container-fluid pt-200 d-flex flex-column justify-content-center">
    <div class="d-flex flex-column gap-5">
      <img decoding="async" src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2022/04/divider.svg" alt="" class="divider" style="width: 83px; height: 7px; left: 0px; top: 0px;" />
      <div class="d-flex">
        <h1>
          Our recent 
          <span>web designs</span> 
          & some examples of
          past 
          <span>projects</span>
        </h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
      </div>
      <img decoding="async" src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2022/04/divider.svg" alt="" class="divider" style="width: 83px; height: 7px; left: 0px; top: 0px;" />
    </div>
    <div class="d-flex flex-wrap mt-5 pb-5 justify-content-between gap-1">
      <div class="image-container">
        <img src="../../../../../public/images/ina-soulis-227104-unsplash-1024x1024.jpg" alt="image not found">
        <div class="green-background"></div>
      </div>
      <div class="image-container">
        <img src="../../../../../public/images/sunisa-misa-531163-unsplash-1024x1024.jpg" alt="image not found">
        <div class="green-background"></div>
      </div>
      <div class="image-container">
        <img src="../../../../../public/images/355H-1024x1024.jpg" alt="image not found">
        <div class="green-background"></div>
      </div>
      <div class="image-container">
        <img src="../../../../../public/images/photo-1448932252197-d19750584e56-1024x1024.jpg" alt="image not found">
        <div class="green-background"></div>
      </div>
      <div class="image-container">
        <img src="../../../../../public/images/business-competition-PB366D8-1024x1024.jpg" alt="image not found">
        <div class="green-background"></div>
      </div>
      <div class="image-container">
        <img src="../../../../../public/images/cozy-sofa-in-living-room-PQR5AB9-1024x1024.jpg" alt="image not found">
        <div class="green-background"></div>
      </div>
      <div class="image-container">
        <img src="../../../../../public/images/aa9a4539-PQGJ7HU-1024x1024.jpg" alt="image not found">
        <div class="green-background"></div>
      </div>
      <div class="image-container">
        <img src="../../../../../public/images/cody-davis-253928-unsplash-1024x1024.jpg" alt="image not found">
        <div class="green-background"></div>
      </div>
    </div>
    <div class="py-5 d-flex justify-content-center w-100">
      <button class="green-black-hover-button text-white">READ MORE</button>
    </div>
  </div>
</template>
<style lang="sass" scoped>
  @use '../../../../styles/partials/variables' as *
  
  .container-fluid
    height: 900px
    margin-top: 250px

  h1
    font-size: 60px
    letter-spacing: -3px
    word-spacing: 5px
    word-break: break-word
    span
      color: $green-2

  p
    margin-left: 200px
    align-self: end
    color: $black-1

  .image-container
    position: relative
    width: 310px
    transition: transform .5s
    &:hover
      z-index: 2
      transform: scale(1.1)

  img 
    width: 100%
    border-radius: 10px

  .green-background
    opacity: 0
    width: 100%
    height: 100%
    position: absolute
    top: 0
    background: linear-gradient(to right, rgba($green-1, 0.7), rgba($green-2, 0.7))
    transition: opacity .5s
    border-radius: 10px
    &:hover
      opacity: 1
</style>