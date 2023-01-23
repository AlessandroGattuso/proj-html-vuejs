<script>
export default {
  name: 'AppNav',
  props: {
    links: Array
  },
  data(){
    return{
      linkActive: 0
    }
  }
}
</script>
<template>
 <div class="container-fluid pt-4">
  <div class="container d-flex justify-content-between align-items-center h-100">
    <div>
      <img src="../../../../public/images/cropped-Group-39-2x.png" alt="logo not found">
    </div>
    <nav class="d-flex gap-4">
      <div v-for="(link, index) in links" :key="index">
        <a href="link.url" :class="{active: (index == linkActive)}">
          {{ link.name }}
        </a>
      </div>
    </nav>
    <div>
      <button class="button-round text-light me-5">Purchase</button>
      <font-awesome-icon class="cursor-pointer search" icon="fa-solid fa-magnifying-glass"/>
    </div>
  </div>
 </div>
</template>
<style lang="sass" scoped>
  @use '../../../styles/partials/variables' as *
  @use '../../../styles/partials/mixins' as *

  .container-fluid
    height: 80px

  nav
    @include quicksand-font
    text-transform: uppercase
    font-size: 15spx
    a:hover
      font-weight: 600
  .active
    font-weight: 600

  .search
    color: $green-3
</style>