import { createApp } from 'vue'
import './styles/style.scss'
import App from './App.vue'
import * as bootstrap from 'bootstrap'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faStar, faX } from '@fortawesome/free-solid-svg-icons'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faStar,faMagnifyingGlass,faX)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
