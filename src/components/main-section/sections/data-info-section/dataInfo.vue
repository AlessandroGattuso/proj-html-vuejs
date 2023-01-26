<script>

export default {
  name: "AboutUs"
}
</script>
<template>
  <div class="container-fluid d-flex ps-0 position-relative">
    <div class="position-relative image-under">
      <img src="../../../../../public/images/busy-architect-PYVKWM4-1024x872.jpg" alt="Image not found">
      <div class="green-background  d-flex align-items-center">
        <div class="col-4 d-flex flex-column text-center text-white gap-3">
            <h3>280</h3>
            <span>PROJECTS</span>
            <div class="d-flex gap-3">
              <div class="d-flex flex-column gap-2">
                <h5 class="fs-1">
                  +3,500
                </h5>
                <span>USERS' COMMENTS</span>
              </div>
              <div class="divider"></div>
              <div class="d-flex flex-column gap-2">
                <h5 class="fs-1">
                  100%
                </h5>
                <span>USERS' COMMENTS</span>
              </div>
            </div>
        </div>
      </div>
    </div>
    <img class="image-over" src="../../../../../public/images/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="Image not found">
  </div>
</template>
<style lang="sass" scoped>
  @use '../../../../styles/partials/variables' as *
  
  .container-fluid
    margin-top: 300px
    padding-top: 300px
    background-color: $white-1
  img,
  .green-background
    width: 600px
    border-radius: 15px
    height: 468px
  .green-background
      position: absolute
      top: 0
      background: linear-gradient(to right, rgba($green-1, 0.7), rgba($green-2, 0.7))
  .green-image
    filter: hue-rotate(160deg) grayscale(0)
  
  .image-under
    margin-left: 50px
  .image-over
    position: absolute
    top: 40%
    left: 40%
  
  .col-4
    margin-left: 200px
  
  .divider
    width: 10px
    border-radius: 20px
    background-color: $grey-2

  h3
    font-size: 90px
</style>