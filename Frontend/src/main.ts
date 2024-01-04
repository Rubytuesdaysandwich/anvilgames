//This is Vue.js root instance. global to all other pages
import { createApp } from "vue";

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store"
import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader';
//add phaser here?
// Import fontawesome 
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'



library.add(fas)
const app = createApp(App)
app.config.globalProperties.$config = {
    //when the project is hosted this should be on so that users don't see the production tips later
    // productionTip: false,
    //ignoring the elements starting with ion because they are not part of vue we use this to avoid error being given
    ignoredElements: [/ion-\w*/],

}
defineIonPhaser(window);
app.component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount("#app");



