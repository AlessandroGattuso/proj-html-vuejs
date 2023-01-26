<script>

export default {
  name: "AboutUs"
}
</script>
<template>
  <div class="container-fluid pt-200 d-flex justify-content-between ps-0">
  <div class="col-6 position-relative">
    <img src="../../../../../public/images/busy-architect-PYVKWM4-1024x872.jpg" alt="Image not found">
    <div class="green-background"></div>
    <img class="image-over" src="../../../../../public/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="Image not found">
  </div>
  <div class="col-6 text-container">
    <div class="col-4 pt-5 d-flex flex-column gap-5 ps-3">
      <h1>
        learn more about our
        <span>missions</span>
      </h1>
      <img decoding="async" src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2022/04/divider.svg" alt="" class="divider" style="width: 83px; height: 7px; left: 0px; top: 0px;" />
      <div class="d-flex justify-content-center align-items-center button-container">
        <button class="green-black-hover-button text-white">READ MORE</button>
      </div>
    </div>
  </div>
  </div>
</template>
<style lang="sass" scoped>
  @use '../../../../styles/partials/variables' as *
  
  .container-fluid
      background-color: $white-1

  .text-container
    margin-left: 100px

  h1
    width: 300px
    font-size: 60px
    letter-spacing: -3px
    word-spacing: 5px
    word-break: break-word
    span
      color: $green-2
  
  .button-container
    width: 152px

  button
    padding: 15px 30px

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