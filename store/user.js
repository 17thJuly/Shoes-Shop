export const state = () => ({
  isAdmin: false,
  name: null,
  phone: null,
  username: null,
  email: null,
  image: null
})

export const mutations = {
  clearUserData (state) {
    state.name = state.phone = state.username = state.email = state.image = null
  },
  setUserData (state, payload) {
    if (payload.username) {
      state.isAdmin = payload.isAdmin || false
      state.name = payload.name || null
      state.phone = payload.phone || null
      state.username = payload.username || null
      state.email = payload.email || null
      state.image = payload.image || null
    }
  },
  setUserImage (state, image) {
    state.image = image
  }
}