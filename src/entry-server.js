import { createApp } from './main'

export default (context) => {
  // Return a new Promise
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp()

    // Use url that is sent to the server
    router.push(context.url)
    router.onReady(() => {
      // Now we check for components that match the route
      const matchedComponents = router.getMatchedComponents()

      // If no matched routes, send back 404
      if (!matchedComponents.length) {
        return reject({ code: 404 })
      }
      // Otherwise resolve any data from the store for the current route and resolve promise
      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) {
          return Component.asyncData({
            store,
            route: router.currentRoute
          })
        }
      })).then(() => {
        context.state = store.state
        resolve(app)
      }).catch(reject)
      resolve(app)
    })
  })
}
