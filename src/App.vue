<script>
  import AppHeader from './components/header-section/AppHeader.vue'
  import AppMain from './components/main-section/AppMain.vue'
  import AppFooter from './components/footer-section/AppFooter.vue'

  export default {
    components:{
      AppHeader,
      AppMain,
      AppFooter
    },
    data(){
      return{
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
      }
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
  @import './styles/generals.sass'

</style>
