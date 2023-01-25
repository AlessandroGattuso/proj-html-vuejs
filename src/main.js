import { createApp } from 'vue'
import App from './App.vue'
import * as bootstrap from 'bootstrap'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPhone, faMagnifyingGlass, faCaretRight, faCaretLeft, faGaugeHigh, faCloud, faStopwatch } from '@fortawesome/free-solid-svg-icons'
import { faPinterestP, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
  faPhone,
  faPinterestP,
  faTwitter,
  faFacebookF,
  faMagnifyingGlass,
  faCaretRight,
  faCaretLeft,
  faGaugeHigh,
  faCloud,
  faStopwatch
)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
