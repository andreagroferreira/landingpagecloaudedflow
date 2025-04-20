<template>
  <Card class="h-full border-border/40 hover:border-primary/40 transition-all duration-500 overflow-hidden group">
    <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

    <CardHeader>
      <div class="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 relative overflow-hidden">
        <div class="absolute inset-0 bg-primary opacity-10 animate-pulse-slow"></div>
        <div class="relative z-10">
          <slot name="icon">
            <svg xmlns="http://www.w3.org/2000/svg"
                 class="h-6 w-6 text-primary"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </slot>
        </div>
      </div>
      <CardTitle class="group-hover:text-primary transition-colors duration-300">{{ title }}</CardTitle>
      <CardDescription>{{ description }}</CardDescription>
    </CardHeader>

    <CardContent>
      <slot name="content"></slot>
    </CardContent>

    <CardFooter v-if="$slots.footer">
      <slot name="footer"></slot>
    </CardFooter>
  </Card>
</template>

<script setup>
import Card from './ui/card.vue'
import CardHeader from './ui/card-header.vue'
import CardTitle from './ui/card-title.vue'
import CardDescription from './ui/card-description.vue'
import CardContent from './ui/card-content.vue'
import CardFooter from './ui/card-footer.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>