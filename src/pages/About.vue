<template>
	<div>
		<h1>About page</h1>
		<p>Counter: {{ $store.state.counter }}<p>
		<p><button @click="$store.commit('increment')">+</button></p>
		<router-link to="/">Home page</router-link>
		<HelloWorld />
	</div>
</template>

<script>
let timer
import HelloWorld from '../components/HelloWorld.vue'
export default {
	components: {
      HelloWorld
	},
	asyncData({ store }) {
		store.commit('increment')
	},
	// created() {
	// 	timer = setInterval(() => console.log(Date.now()), 1000)
	// },
	// beforeDestroy() {
	// 	clearInterval(timer)
	// }
}
</script>

<style scoped lang="scss">
h1 {
	color: red;
}

p {
  font-size: 30px;
}
</style>