<template>
	<div id="app">
		<wr-input valiue="3"></wr-input>
	</div>
</template>

<script>
import Vue from 'vue'
//import { WrInput } from './components/WrInput'
import WrVue from './index'

Vue.use(WrVue)

export default {
	name: 'app'
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
