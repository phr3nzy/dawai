const cp = process.server ? require('cookieparser') : undefined

export const actions = {
  async nuxtServerInit({ commit }, req) {
    if (req && req.headers && req.headers.cookie) {
      let user = null
      let token = null
      const parsed = cp.parse(req.headers.cookie)
      if (parsed) {
        user = parsed && parsed.user ? parsed.user : null
        token = parsed && parsed.token ? parsed.token : null
      }
      await commit('setAuth', { user, token })
    }
  }
}
