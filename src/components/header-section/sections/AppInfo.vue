<script>
export default {
  name: 'AppInfo'
}
</script>
<template>
  <div class="container-fluid">
    <div class="container d-flex justify-content-between align-items-center text-light h-100">
      <div>
        <font-awesome-icon icon="fa-solid fa-phone"/>
        <span class="ms-2"> (001) 88451234</span>
        <span class="ms-4">88455438</span>
      </div>
      <div class="d-flex gap-4">
        <font-awesome-icon class="cursor-pointer" icon="fa-brands fa-facebook-f"/>
        <font-awesome-icon class="cursor-pointer" icon="fa-brands fa-twitter"/>
        <font-awesome-icon class="cursor-pointer" icon="fa-brands fa-pinterest-p"/>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
  @use '../../../styles/partials/_variables' as *
  .container-fluid
    height: 50px
    background-color: $black-1
</style>