<script>

export default {
  name: "AboutUs"
}
</script>
<template>
  <div class="container-fluid pt-200 d-flex justify-content-between ps-0 position-relative">
    <img src="../../../../../public/images/busy-architect-PYVKWM4-1024x872.jpg" alt="Image not found">
    <div class="green-background"></div>
    <img class="image-over" src="../../../../../public/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="Image not found">
  </div>
</template>
<style lang="sass" scoped>
  @use '../../../../styles/partials/variables' as *
  
  img,
  .green-background
    width: 550px
    border-radius: 15px
    height: 468px
  .green-background
      position: absolute
      top: 0
      background: linear-gradient(to right, rgba($green-1, 0.7), rgba($green-2, 0.7))
  .green-image
    filter: hue-rotate(160deg) grayscale(0)
  
  .image-over
    position: absolute
    top: 60px
    left: 100px
</style>