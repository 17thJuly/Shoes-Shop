export const state = () => ({
})

export const mutations = {
}

export const actions = {
  setUserImage ({ commit }, image) {
    commit('user/setUserImage', image)
  },
  async checkAuth ({ commit }) {
    const { data } = await this.$axios.get('/api/auth')
    commit('user/setUserData', data)
  },
  async nuxtClientInit ({ dispatch, commit }) {
    await dispatch('checkAuth')
  }
}