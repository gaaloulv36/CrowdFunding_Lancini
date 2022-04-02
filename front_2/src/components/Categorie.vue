<template>
  <div class="home">
    <h1>
      welcome to Categories page
    </h1>
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        
        <figure>
          
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import store from "@/store.js";
export default {
  name: "home",
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
