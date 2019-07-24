<template>
	<div>
		<slot name="label" :label="label" :value="value">
			<div v-if="label" class="mb-2">{{label}}</div>
		</slot>
		<input
			:type="type"
			:value="value"
			@input="input"
			:class="`border rounded h-10 px-2 w-full ${hover && 'border-gray-500'} ${inputStyle}`"
			@mouseover="hover=true"
			@mouseleave="hover=false"
      :min="min"
      :max="max"
		/>
	</div>
</template>

<script>
export default {
	name: "wr-input",
	data() {
		return {
			hover: false
		}
	},
	props: {
		label: String,
		type: {
			type: String,
			default: 'text'
		},
		value: String,
		inputStyle: String,
		min: String,
		max: String
	},
	methods: {
		input(e) {
			this.$emit('change', e.target.value)
		}
	}
}
</script>

<style scoped>

</style>
