<script>
import AppInfo from './sections/AppInfo.vue'
import AppNav from './sections/AppNav.vue'
export default {
  name: 'AppHeader',
  components:{
    AppInfo,
    AppNav
  },
  props:{
    linksHeader: Array
  },
}
</script>
<template>
  <header class="w-100">
    <AppInfo />
    <AppNav :links="linksHeader" />
  </header>
</template>
<style lang="sass" scoped>
  @use '../../styles/partials/_variables' as *

  header
    position: fixed
    z-index: 10
</style>