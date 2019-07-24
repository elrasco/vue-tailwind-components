// espongo il componente sia come plugin che come componente

import WrInput from './WrInput'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(Vue) {
      registerComponent(Vue, ButWrInputton)
  }
}

use(Plugin)

export default Plugin

export { WrInput }
