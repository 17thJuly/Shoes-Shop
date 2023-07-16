export const state = () => ({
  isShow: false,
  msg: '',
  type: ''
})

export const mutations = {
  snackbarHide (state) {
    state.isShow = false
  },
  snackbarSet (state, payload) {
    state.isShow = true
    state.msg = payload.msg
    state.type = payload.type
  }
}

export const actions = {
  hide ({ commit }) {
    commit('snackbarHide')
  },
  success ({ dispatch, commit }, msg) {
    dispatch('hide')
    setTimeout(() => {
      commit('snackbarSet', { msg, type: 'success' })
    }, 100)
  },
  error ({ dispatch, commit }, msg) {
    dispatch('hide')
    setTimeout(() => {
      commit('snackbarSet', { msg: msg || 'Có lỗi xảy ra', type: 'error' })
    }, 100)
  }
}
