<template>
	<div id="app">
    <wr-input valiue="3"></wr-input>
	</div>
</template>

<script>

import WrInput from './components/WrInput'

export default {
	name: 'app',
	components: {
		WrInput
	}
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
