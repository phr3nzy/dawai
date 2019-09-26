import cookie from 'js-cookie'

export const state = () => ({
  user: null,
  token: null
})

export const mutations = {
  setAuth: (payload) => {
    state.user = payload.user
    state.token = payload.token
    cookie.set('user', payload.user)
    cookie.set('token', payload.token)
  },
  setUser: (user) => {
    state.user = user
    cookie.set('user', user)
  },
  setToken: (token) => {
    state.token = token
    cookie.set('token', token)
  },
  signOut: () => {
    state.user = null
    state.token = null
    cookie.remove('user')
    cookie.remove('token')
  }
}

export const actions = {
  async setAuth({ commit }, payload) {
    await commit('setAuth', payload)
  },
  async setUser({ commit }, user) {
    await commit('setUser', user)
  },
  async setToken({ commit }, token) {
    await commit('setToken', token)
  },
  async signOut({ commit }) {
    await commit('signOut')
  }
}
