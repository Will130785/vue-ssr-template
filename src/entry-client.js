import { createApp } from './main'
// import env from '../.env'

const { app, store } = createApp()
// console.log(env)
if (window.__INITIAL_STATE__) {
  // We initialize the store state with the data injected from the server
  store.replaceState(window.__INITIAL_STATE__)
}

// this assumes that App.vue template root element has id="app"
app.$mount('#app')
