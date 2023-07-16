export const state = () => ({
  isShow: false,
  linkId: null,
})

export const mutations = {
  unsetLinkId(state) {
    state.linkId = null
  },
  setLinkId(state, linkId) {
    state.linkId = linkId
  }
}

export const actions = {
}
