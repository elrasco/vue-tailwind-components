import Vue from "vue"

import * as components from '.'

for (let componentKey in components) {
  Vue.component(components[componentKey])
}