<script>

export default {
}
</script>
<template>
  <div class="container-fluid pt-200 d-flex justify-content-between">
    <div class="col-4 pt-5 d-flex flex-column gap-4 ps-3 gap-5">
      <h1>
        We Are Here To Make Your
        <span class="">Website</span>
        Look More
        <span>Elegant</span>
        And Stylish!
      </h1>
      <img decoding="async" src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2022/04/divider.svg" alt="" class="divider" style="width: 83px; height: 7px; left: 0px; top: 0px;" />
      <div class="d-flex justify-content-center align-items-center button-container">
        <button class="green-black-hover-button text-white">VIEW ALL</button>
      </div>
    </div>
    <div class="h-75 col-7 d-flex justify-content-between gap flex-wrap">
      <div class="card p-4">
        <div class="card-body d-flex flex-column gap-4">
          <h2 class="icon">
            <font-awesome-icon class="cursor-pointer" icon="fa-solid fa-gauge-high"/>
          </h2>
          <h2>Speed Optimization</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
        </div>
      </div>
      <div class="card p-4">
        <div class="card-body d-flex flex-column gap-4">
          <h2 class="icon">
            <font-awesome-icon class="cursor-pointer" icon="fa-solid fa-cloud"/>
          </h2>
          <h2>Cloud Solutions</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
        </div>
      </div>
      <div class="card p-4">
        <div class="card-body d-flex flex-column gap-4">
          <h2 class="icon">
            <font-awesome-icon class="cursor-pointer" icon="fa-solid fa-cloud"/>
          </h2>
          <h2>Website Design</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
        </div>
      </div>
      <div class="card p-4">
        <div class="card-body d-flex flex-column gap-4">
          <h2 class="icon">
            <font-awesome-icon class="cursor-pointer" icon="fa-solid fa-stopwatch"/>
          </h2>
          <h2>Online Marketing</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
  @use '../../../../styles/partials/variables' as *

  .container-fluid
    height: 1200px
      
  h1 
    font-size: 60px
    line-height: 120%
    letter-spacing: -3px
    word-spacing: 19px
    word-break: break-word
    span
      color: $green-2

  button
    padding: 15px 30px

  .card
    width: 21rem
    border: none
    border-radius: 20px
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2)
    background: transparent
    transition: all .3s

    &:hover,
    &:hover .icon,
    &:hover p
      color: white
    &:hover 
      background-image: linear-gradient(to right, $green-1, $green-2)
    

  .icon
    font-size: 60px
    color: $green-2
    transition: all .3s
  
  .gap
    gap: 30px 0px

  p
    color: $grey-1
    transition: all .3s
</style>