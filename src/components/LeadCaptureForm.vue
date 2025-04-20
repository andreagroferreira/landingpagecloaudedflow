<template>
  <div class="lead-capture-form bg-card p-6 rounded-xl shadow-glow border border-border/40 backdrop-blur-md">
    <h3 class="text-2xl font-bold mb-4"><span class="gradient-text">{{ title }}</span></h3>
    <p class="text-muted-foreground mb-6">{{ subtitle }}</p>

    <div v-if="!submitted">
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label for="name" class="block text-sm font-medium mb-1">Nome</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            class="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            placeholder="Seu nome completo"
            required
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            placeholder="seu@email.com"
            required
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          class="w-full mt-4"
          :disabled="loading"
        >
          <span v-if="loading" class="flex items-center">
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processando...
          </span>
          <span v-else>{{ buttonText }}</span>
        </Button>

        <p class="text-xs text-muted-foreground text-center mt-4">
          Seus dados estão seguros. Leia nossa
          <a href="#" class="text-primary hover:underline">Política de Privacidade</a>.
        </p>
      </form>
    </div>

    <div v-else class="text-center py-4">
      <div class="bg-success/10 text-foreground p-6 rounded-lg mb-6 border border-success/20">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-2 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h4 class="text-lg font-bold">Enviado com Sucesso!</h4>
        <p>Obrigado por se inscrever. Verifique seu email para as próximas etapas.</p>
      </div>

      <Button
        @click="resetForm"
        variant="ghost"
        class="text-primary hover:underline"
      >
        Voltar ao formulário
      </Button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Button from './ui/button.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Obtenha Acesso Exclusivo'
  },
  subtitle: {
    type: String,
    default: 'Cadastre-se para receber acesso aos nossos templates e prompts de IA'
  },
  buttonText: {
    type: String,
    default: 'Obter Acesso Agora'
  },
  redirectToThankYou: {
    type: Boolean,
    default: false
  }
})

const store = useStore()
const router = useRouter()

const loading = ref(false)
const submitted = ref(false)
const form = reactive({
  name: '',
  email: ''
})

const submitForm = async () => {
  loading.value = true

  // Simular uma chamada à API
  setTimeout(() => {
    // Armazenar o email do usuário no store
    store.dispatch('captureEmail', form.email)

    loading.value = false
    submitted.value = true

    // Se propriedade redirectToThankYou estiver habilitada, redirecionar para a página de agradecimento
    if (props.redirectToThankYou) {
      setTimeout(() => {
        router.push('/obrigado')
      }, 1500)
    }
  }, 1500)
}

const resetForm = () => {
  form.name = ''
  form.email = ''
  submitted.value = false
}
</script>

<style scoped>
/* Estilos específicos para o componente, se necessário */
</style>