<script>

export default {
  name: 'AppFooter',
  props:{
    linksFooter: Array
  },
}
</script>
<template>
  <footer class="pt-200 container">
      <div class="row">
        <div class="col-3 d-flex flex-column gap-4">
          <img src="../../../public/images/cropped-Group-39-2x.png" alt="">
          <p>
            While the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees.While the lovely valley teems with vapour around me.
          </p>
        </div>
        <div class="col-3 mt-3 gap-3">
          <h4>
            QUICK LINKS
          </h4>
          <img decoding="async" src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2022/04/divider.svg" alt="" class="divider" style="width: 83px; height: 7px; left: 0px; top: 0px;" />
          <ul>
            <li v-for="(link, index) in linksFooter" :key="index">
                <a :href="link.url">{{link.name}}</a>
            </li>
          </ul>
        </div>
        <div class="col-3 mt-3 d-flex flex-column gap-3">
          <h4>
            CONTACT
          </h4>
          <img decoding="async" src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2022/04/divider.svg" alt="" class="divider" style="width: 83px; height: 7px; left: 0px; top: 0px;" />
          <p>Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, TX 76051</p>
          <p>info@yourdomain.com</p>
          <p>+99 (0) 101 0000 888</p>
        </div>
        <div class="col-3 mt-3 d-flex flex-column gap-3">
          <h4>
            LOCATION ON MAP
          </h4>
          <img decoding="async" src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2022/04/divider.svg" alt="" class="divider" style="width: 83px; height: 7px; left: 0px; top: 0px;" />
          <img src="../../../public/images/map.png" alt="Map not found">
        </div>
      </div>
  </footer>
</template>
<style lang="sass" scoped>
  @use '../../styles/partials/_variables' as *
  footer
    height: 500px
  img 
    width: 90%
  
  p 
    color: $grey-1

  ul
    padding: 0
    list-style-type: none
    a
      color: $grey-1
      &:hover
        color: $green-2
</style>