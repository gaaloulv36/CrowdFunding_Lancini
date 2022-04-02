<template>

  <div id="app">
    <Header v-if="isClient"></Header>
    
    <!-- appel routing  -->
    <router-view></router-view>  
    <Footer v-if="isClient"></Footer>
    
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  components: { Header,Footer},
    name : 'home-c',

  //components: { Footer },
   // name : 'home-cp', 
   computed: {
  isClient() {
     return ((this.$route.name !== 'admin') && (this.$route.name !== 'profile')&& (this.$route.name !== 'login')&& (this.$route.name !== 'table') )
  },
 
},
  
}
</script>


