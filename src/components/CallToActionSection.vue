<template>
  <section class="py-20 relative overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950"></div>

    <!-- Animated orbs -->
    <div class="absolute top-10 left-10 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl animate-pulse"></div>
    <div class="absolute bottom-10 right-10 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse" style="animation-delay: 1s;"></div>

    <!-- Main content -->
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-5xl mx-auto bg-gray-900/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl">
        <div class="flex flex-col md:flex-row md:items-center gap-12">
          <!-- Text content -->
          <div class="flex-1">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {{ title }}
            </h2>

            <p class="text-gray-300 mb-8 text-lg">
              {{ description }}
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <button class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition duration-300 transform hover:-translate-y-1">
                {{ primaryButtonText }}
              </button>

              <button class="px-6 py-3 bg-gray-800 text-gray-100 font-medium rounded-xl hover:bg-gray-700 transition duration-300">
                {{ secondaryButtonText }}
              </button>
            </div>

            <p class="text-gray-400 text-sm mt-6">
              {{ disclaimer }}
            </p>
          </div>

          <!-- Visual element -->
          <div class="flex-1 hidden md:block">
            <div class="aspect-square max-w-xs mx-auto relative">
              <!-- Decorative elements -->
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full animate-spin-slow"></div>

              <div class="absolute inset-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full animate-spin-slow" style="animation-direction: reverse; animation-duration: 15s;"></div>

              <!-- Center logo/icon -->
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Trust indicators -->
      <div class="mt-16 text-center">
        <div class="flex flex-wrap justify-center items-center gap-8">
          <div class="flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>100% Secure</span>
          </div>

          <div class="flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>24/7 Support</span>
          </div>

          <div class="flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>14-Day Trial</span>
          </div>

          <div class="flex items-center text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Cancel Anytime</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "Ready to transform your data experience?"
  },
  description: {
    type: String,
    default: "Join thousands of companies already using AIN8N to unlock insights, streamline operations, and drive growth. Start your 14-day free trial today."
  },
  primaryButtonText: {
    type: String,
    default: "Get Started Free"
  },
  secondaryButtonText: {
    type: String,
    default: "Schedule Demo"
  },
  disclaimer: {
    type: String,
    default: "No credit card required. Cancel anytime. Your data remains private and secure."
  }
});
</script>

<style scoped>
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
</style>