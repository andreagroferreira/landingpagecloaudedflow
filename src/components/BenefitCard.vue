<template>
  <div class="benefit-card flex items-start p-6 bg-white rounded-xl shadow-testimonial transition-all duration-300 hover:shadow-lg border border-gray-100">
    <div
      class="icon-container rounded-full p-3 mr-4 flex-shrink-0"
      :class="`bg-${color}/10`"
    >
      <slot name="icon">
        <svg xmlns="http://www.w3.org/2000/svg"
             class="h-6 w-6"
             :class="`text-${color}`"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </slot>
    </div>

    <div>
      <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
      <p class="text-gray-600">{{ description }}</p>

      <slot name="extra-content"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'primary'
  }
})
</script>

<style scoped>
/* Estilos específicos para o componente, se necessário */
</style>