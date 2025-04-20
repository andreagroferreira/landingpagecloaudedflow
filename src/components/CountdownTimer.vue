<template>
  <div class="countdown-timer glassmorphism p-6 rounded-xl">
    <h3 class="text-xl font-bold text-center mb-4">{{ title }}</h3>

    <div class="grid grid-cols-4 gap-3 text-center">
      <div class="bg-card p-3 rounded-lg shadow-glow border border-border/40 backdrop-blur-md">
        <div class="text-2xl md:text-3xl font-bold gradient-text animate-pulse-slow">{{ days }}</div>
        <div class="text-xs md:text-sm text-muted-foreground">Dias</div>
      </div>
      <div class="bg-card p-3 rounded-lg shadow-glow border border-border/40 backdrop-blur-md">
        <div class="text-2xl md:text-3xl font-bold gradient-text animate-pulse-slow" style="animation-delay: 0.2s;">{{ hours }}</div>
        <div class="text-xs md:text-sm text-muted-foreground">Horas</div>
      </div>
      <div class="bg-card p-3 rounded-lg shadow-glow border border-border/40 backdrop-blur-md">
        <div class="text-2xl md:text-3xl font-bold gradient-text animate-pulse-slow" style="animation-delay: 0.4s;">{{ minutes }}</div>
        <div class="text-xs md:text-sm text-muted-foreground">Minutos</div>
      </div>
      <div class="bg-card p-3 rounded-lg shadow-glow border border-border/40 backdrop-blur-md">
        <div class="text-2xl md:text-3xl font-bold gradient-text animate-pulse-slow" style="animation-delay: 0.6s;">{{ seconds }}</div>
        <div class="text-xs md:text-sm text-muted-foreground">Segundos</div>
      </div>
    </div>

    <div v-if="subtitle" class="text-sm text-center mt-3 text-muted-foreground">
      {{ subtitle }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Oferta Especial Termina Em:'
  },
  subtitle: {
    type: String,
    default: 'Aproveite o desconto enquanto está disponível!'
  },
  endDate: {
    type: [String, Date],
    default: () => {
      // Define uma data 7 dias no futuro por padrão
      const date = new Date()
      date.setDate(date.getDate() + 7)
      return date
    }
  }
})

const days = ref('00')
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')

let countdownInterval = null

const calculateTimeLeft = () => {
  const endDateTime = new Date(props.endDate).getTime()
  const now = new Date().getTime()
  const distance = endDateTime - now

  if (distance < 0) {
    // Se a contagem regressiva terminou
    days.value = '00'
    hours.value = '00'
    minutes.value = '00'
    seconds.value = '00'
    clearInterval(countdownInterval)
    return
  }

  // Calcular dias, horas, minutos e segundos
  days.value = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0')
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0')
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0')
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0')
}

onMounted(() => {
  calculateTimeLeft()
  countdownInterval = setInterval(calculateTimeLeft, 1000)
})

onBeforeUnmount(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})
</script>

<style scoped>
/* Estilos específicos para o componente, se necessário */
</style>