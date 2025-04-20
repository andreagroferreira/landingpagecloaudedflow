<template>
  <span>{{ displayValue }}</span>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  endValue: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 2
  },
  decimalPlaces: {
    type: Number,
    default: 0
  },
  startValue: {
    type: Number,
    default: 0
  },
  easing: {
    type: String,
    default: 'easeOutExpo',
    validator: (value) => ['linear', 'easeInOutCubic', 'easeOutExpo'].includes(value)
  }
});

const displayValue = ref(formatValue(props.startValue));
let animationFrame = null;
let startTime = null;

// Easing functions
const easingFunctions = {
  linear: (t) => t,
  easeInOutCubic: (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  easeOutExpo: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
};

// Format the value according to decimal places
function formatValue(value) {
  return value.toFixed(props.decimalPlaces);
}

// Animate the counter
function animate(timestamp) {
  if (!startTime) startTime = timestamp;

  const elapsed = timestamp - startTime;
  const progress = Math.min(elapsed / (props.duration * 1000), 1);
  const easedProgress = easingFunctions[props.easing](progress);

  const currentValue = props.startValue + (props.endValue - props.startValue) * easedProgress;
  displayValue.value = formatValue(currentValue);

  if (progress < 1) {
    animationFrame = requestAnimationFrame(animate);
  }
}

// Start the animation
function startAnimation() {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
  startTime = null;
  displayValue.value = formatValue(props.startValue);
  animationFrame = requestAnimationFrame(animate);
}

// Watch for changes in the end value to restart animation
watch(() => props.endValue, () => {
  startAnimation();
});

// Clean up on unmount
onMounted(() => {
  startAnimation();
});

onBeforeUnmount(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
});
</script>