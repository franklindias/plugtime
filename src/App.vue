<template>
  <div class="wrapper"> 
    <navbar></navbar>
    <sidebar></sidebar>   
    <div class="content-wrapper">
      <breadcrumb :titles="routeTitles"></breadcrumb>      
      <section class="content">       
        <router-view/>
      </section>
    </div>
    <footer-lte></footer-lte>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar.vue'
import Sidebar from './components/layout/Sidebar.vue'
import Breadcrumb from './components/layout/Breadcrumb.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'App',

  components: {
    'navbar': Navbar,
    'sidebar': Sidebar,
    'breadcrumb': Breadcrumb,
    'footer-lte': Footer,
  },

  created() {
    this.routeTitles = this.$route.meta;
  },

  data: function() {
    return{
      routeTitles: null
    }
  },

  watch: {
    $route (to, from){
      console.log(to);
      this.routeTitles = to.meta;
    }
  } 
}
</script>
