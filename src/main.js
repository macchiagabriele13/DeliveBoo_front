import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faHeart, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTrash, faHeart, faMinus, faPlus)


createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')