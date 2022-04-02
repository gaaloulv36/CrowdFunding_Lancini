import Vue from "vue";
import App from "./App.vue";
import LoadScript from "vue-plugin-load-script";

// appel routing 1
import router from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../public/assets/css/style.css";
import "../public/assets/fonts/style.css";
import "../public/assets/css/styles.min.css"
import '@fortawesome/fontawesome-free/css/all.css'
import '../public/assets/bootstrap_4/css/bootstrap.min.css'
import '../public/assets/bootstrap_4/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/js/all.js'
import '../public/assets/admin/bootstrap_admin.min.css'
import '../public/assets/admin/bootstrap_admin.min.js'
import '../public/assets/admin/script.min.js'
import '../public/assets/admin/chart.min.js'

Vue.config.productionTip = false;
Vue.use('../public/assets/admin/chart.min.js')

new Vue({
    // appel routing 2
    router,
    render: h => h(App)

}).$mount("#app");