
<template>
  <div>
    <p>The visited URL is: {{ url }}</p>
    <p>This is running in port: {{ port }}</p>
    <p>{{ vueMode }}</p>
	<p><button @click="sayHello">Hello There!!</button></p>
	<router-link to="/about">About page</router-link>
  </div>
</template>

<script>
import testService from '../services/testService.js'
export default {
  data() {
	return {
	  url: this.$route.path,
    port: process.env.PORT,
    vueMode: process.env.VUE_APP_TEST
	}
  },
  methods: {
	sayHello() {
	  window.alert('Hello!')
	}
  },
  created () {
	console.log('created')
  
  },
  mounted () {
	console.log('mounted')
  // testService()
  console.log(process.env, "******")
  }
}
</script>