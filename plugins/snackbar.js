export default ({ app, store }, inject) => {
  // Set the function directly on the context.app object
  inject('snackbar', {
    success (message) {
      store.dispatch('snackbar/success', message)
    },
    error (message) {
      store.dispatch('snackbar/error', message)
    },
    requestSuccess (res) {
      if (res.data.message) {
        store.dispatch('snackbar/success', res.data.message)
       
      }
    },
    requestError (err) {
      if (err.response && err.response.data && err.response.data.message) {
        store.dispatch('snackbar/error', err.response.data.message)
      }
    }
  })
}