<script>
  import AppHeader from '../components/Footer/AppHeader.vue'
  import AppMain from '../components/Footer/AppMain.vue'
  import AppFooter from '../components/Footer/AppFooter.vue'
  import axios from 'axios'
  import { store } from './store.js'

  export default {
    components:{
      AppHeader,
      AppMain,
      AppFooter
    },
    data(){
      linksHeader: [
        {
          name: 'home',
          url: '#'
        },
        {
          name: 'about',
          url: '#'
        },
        {
          name: 'services',
          url: '#'
        },
        {
          name: 'showcase',
          url: '#'
        },
        {
          name: 'blog',
          url: '#'
        },
        {
          name: 'contact',
          url: '#'
        }
      ]
    },
    methods:{
    }
}
</script>

<template>
  <AppHeader :linksHeader="linksHeader" />
  <AppMain/>
  <AppFooter/>
</template>

<style lang="sass">
  @use './styles/partials/_variables' as *
  @import './styles/generals.sass'

</style>
