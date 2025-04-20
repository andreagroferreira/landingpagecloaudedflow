import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './styles/globals.css'
import router from './router'
import i18n from './plugins/i18n'

// Store
const store = createStore({
  state() {
    return {
      user: null,
      leadCaptured: false,
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setLeadCaptured(state, value) {
      state.leadCaptured = value
    }
  },
  actions: {
    captureEmail({ commit }, email) {
      // Aqui você pode implementar uma chamada de API para seu serviço de email marketing
      commit('setLeadCaptured', true)
      commit('setUser', { email })
    }
  }
})

const app = createApp(App)
app.use(store)
app.use(router)
app.use(i18n)
app.mount('#app')
