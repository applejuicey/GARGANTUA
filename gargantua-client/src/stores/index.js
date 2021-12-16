import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      themeName: 'light',
      languageName: 'en',
    }
  },
  mutations: {
    changeTheme (state, payload) {
      state.themeName = payload.themeName
    },
    changeLanguage (state, payload) {
      state.languageName = payload.languageName
    },
  }
})

export { store }