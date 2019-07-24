import * as components from './components'
import { use } from './utils/plugins'

const WrVue = {
  install(Vue) {
    for (let componentKey in components) {
      Vue.use(components[componentKey])
    }
  }
}

use(WrVue)

export default WrVue
