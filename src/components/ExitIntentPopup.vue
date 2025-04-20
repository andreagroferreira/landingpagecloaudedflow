<template>
  <transition name="fade">
    <div v-if="isVisible" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm">
      <div class="relative max-w-lg w-full bg-card rounded-2xl overflow-hidden shadow-lg border border-border/40">
        <!-- Close button -->
        <button
          @click="closePopup"
          class="absolute top-3 right-3 text-muted-foreground hover:text-foreground z-10 p-1 rounded-full bg-accent/30"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Content -->
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="bg-gradient-to-br from-primary/90 to-secondary/80 p-8 flex flex-col justify-center relative overflow-hidden">
            <!-- Animated particles background -->
            <div class="absolute inset-0 opacity-20">
              <div v-for="i in 10" :key="i"
                   class="absolute rounded-full bg-white"
                   :class="`animate-float`"
                   :style="{
                     width: `${Math.random() * 6 + 2}px`,
                     height: `${Math.random() * 6 + 2}px`,
                     top: `${Math.random() * 100}%`,
                     left: `${Math.random() * 100}%`,
                     animationDelay: `${Math.random() * 3}s`,
                     animationDuration: `${Math.random() * 5 + 3}s`
                   }"></div>
            </div>

            <h3 class="text-2xl font-bold mb-4 text-white relative z-10">Espere um momento!</h3>
            <p class="mb-6 text-white/90 relative z-10">
              Antes de sair, aproveite esta oferta exclusiva para nossos templates de N8N + IA.
            </p>
            <div class="text-3xl font-bold mb-2 text-white relative z-10 animate-pulse-slow">50% OFF</div>
            <p class="text-sm text-white/80 relative z-10">Oferta válida apenas por tempo limitado</p>
          </div>

          <div class="p-8">
            <LeadCaptureForm
              title="Não perca esta oportunidade"
              subtitle="Cadastre-se para receber um desconto exclusivo de 50%"
              buttonText="Obter 50% de Desconto"
              :redirectToThankYou="true"
            />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import LeadCaptureForm from './LeadCaptureForm.vue'
import { useStore } from 'vuex'

const store = useStore()
const isVisible = ref(false)
let exitIntentDetected = false
let popupTimer = null

const showPopup = () => {
  if (!store.state.leadCaptured) {
    isVisible.value = true
  }
}

const closePopup = () => {
  isVisible.value = false
}

const handleExitIntent = (e) => {
  // Apenas mostrar o popup uma vez
  if (exitIntentDetected || store.state.leadCaptured) return

  // Detecção do movimento do mouse para a parte superior da página
  if (e.clientY <= 20) {
    exitIntentDetected = true
    showPopup()
  }
}

const setupExitIntentDetection = () => {
  document.addEventListener('mouseleave', handleExitIntent)

  // Mostrar popup depois de 30 segundos se o usuário não tentou sair ainda
  popupTimer = setTimeout(() => {
    if (!exitIntentDetected && !store.state.leadCaptured) {
      showPopup()
    }
  }, 30000)
}

onMounted(() => {
  // Pequeno atraso para configurar a detecção de exit intent
  setTimeout(setupExitIntentDetection, 2000)
})

onBeforeUnmount(() => {
  document.removeEventListener('mouseleave', handleExitIntent)
  if (popupTimer) {
    clearTimeout(popupTimer)
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>