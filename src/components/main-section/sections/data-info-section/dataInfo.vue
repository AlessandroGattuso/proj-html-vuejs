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
                <span>HAPPY CLIENTS</span>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="text-container d-flex flex-start">
      <div class="d-flex flex-column gap-4">
        <h1>
          We <span>Love</span> What We Do
        </h1>
        <img decoding="async" src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2022/04/divider.svg" alt="" class="divider" style="width: 83px; height: 7px; left: 0px; top: 0px;" />
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.Separated they live in Bookmarksgrove. Far far away, behind the word mountains. large language ocean. far from the countries Vokalia and Consonantia</p>
        <ul>
          <li>
            <span><font-awesome-icon class="cursor-pointer" icon="fa-solid fa-check"/></span> far far away, behind the word mountains
          </li>
          <li>
            <span><font-awesome-icon class="cursor-pointer" icon="fa-solid fa-check"/></span> large language ocean
          </li>
          <li>
            <span><font-awesome-icon class="cursor-pointer" icon="fa-solid fa-check"/></span> far from the countries Vokalia and Consonantia
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
  @use '../../../../styles/partials/variables' as *
  
  .container-fluid
    margin-top: 500px
    padding: 200px 0px
    background-color: $white-1
    
  img,
  .text-container,
  .green-background
    width: 700px
    border-radius: 15px
    height: 600px

  .green-background
      position: absolute
      top: 0
      background: linear-gradient(to right, rgba($green-1, 0.7), rgba($green-2, 0.7))
  .green-image
    filter: hue-rotate(160deg) grayscale(0)
  
  .image-under
    margin-left: 50px
  
  .green-background .col-4
    margin-left: 200px
  
  .green-background .divider
    width: 10px
    border-radius: 20px
    background-color: $grey-2

  h3
    font-size: 90px

  .text-container
    padding: 40px
    background-color: white
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2)
    position: absolute
    top: 40%
    left: 40%

  h1
    width: 400px
    font-size: 50px
    letter-spacing: -3px
    word-spacing: 5px
    word-break: break-word
    span
      color: $green-2

  p
    color: $grey-1
  
  ul
    padding: 0
    list-style-type: none
    span
      color: $green-3
</style>