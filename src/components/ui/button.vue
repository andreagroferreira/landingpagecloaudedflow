<script setup>
import { computed } from 'vue'
import { cva } from 'class-variance-authority'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (val) =>
      ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'primary'].includes(val),
  },
  size: {
    type: String,
    default: 'default',
    validator: (val) => ['default', 'sm', 'lg', 'icon'].includes(val),
  },
  asChild: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/90',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        primary: 'bg-primary text-primary-foreground shadow-cta hover:bg-primary/90 transform hover:-translate-y-1 transition-all',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-12 rounded-md px-8 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const classes = computed(() => {
  return buttonVariants({ variant: props.variant, size: props.size })
})

function handleClick(event) {
  emit('click', event)
}
</script>

<template>
  <button :class="classes" @click="handleClick">
    <slot />
  </button>
</template>