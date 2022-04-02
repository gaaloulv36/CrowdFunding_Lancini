<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white w-100 navigation" id="navbar">
    <div class="container">
      <a class="navbar-brand font-weight-bold" href="#">LANCINI</a>
      <img src="assets/images/logo.png" alt="LANCINI" class="progression-studios-default-logo">
  
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar"
        aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse " id="main-navbar">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home </a>
          </li>
  
          <li class="nav-item">
              
            <a class="nav-link" href="/about">About Us</a>
          </li>
          <!-- Pages -->
          <li class="nav-item dropdown dropdown-slide">
            <a class="nav-link dropdown-toggle" href="/categorie" id="navbarDropdown4" role="button" data-delay="350"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categories
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown4">
              <li><a href="/medical">Medical and Health</a></li>
              <li><a href="/design">Design</a></li>
              <li><a href="/education">Education</a></li>
              <li><a href="/technologie">Technologie</a></li>
            </ul>
          </li><!-- /Pages -->
         
  
           <li class="nav-item">
            <a class="nav-link" href="/projet">Projects</a>
          </li>
  
  
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
      <!-- Navbar-collapse -->
  
      <ul class="top-menu list-inline mb-0 d-none d-lg-block" id="top-menu">
        <li class="list-inline-item">
          <a href="#" class="search_toggle" id="search-icon"><i class="tf-ion-android-search"></i></a>
        </li>
        <li class="list-inline-item"><a href="/login1"><i class="tf-ion-ios-person mr-3"></i></a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
// @ is an alias to /src
// import store from "@/store.js";
export default {
  name: "header",
  components: {},
  /* data() {
    return {
      destinations: store.destinations
    }; */
  }
;
</script>
<style scoped>

</style>
