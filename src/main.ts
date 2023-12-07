import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
//add phaser here?
// Import fontawesome 
/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
/* import specific icons */
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount("#app");



