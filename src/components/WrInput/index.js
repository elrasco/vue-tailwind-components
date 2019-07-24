// espongo il componente sia come plugin che come

import WrInput from './WrInput'

import { use, registerComponent } from '../../utils/plugins'

const Plugin = {
  install(Vue) {
      registerComponent(Vue, WrInput)
  }
}

use(Plugin)

export default Plugin

export { WrInput }
