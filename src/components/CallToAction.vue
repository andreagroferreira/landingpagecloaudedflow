<template>
  <section class="relative py-20 overflow-hidden">
    <!-- Gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900"></div>

    <!-- Animated particles -->
    <div class="absolute inset-0">
      <div v-for="i in 12" :key="i"
           :class="`absolute w-2 h-2 rounded-full bg-white opacity-${i % 3 === 0 ? '30' : '20'}`"
           :style="{
             top: `${Math.floor(Math.random() * 100)}%`,
             left: `${Math.floor(Math.random() * 100)}%`,
             animation: `pulse ${2 + i % 3}s ease-in-out infinite ${i * 0.2}s`
           }">
      </div>
    </div>

    <!-- Content -->
    <div class="container relative z-10 px-4 mx-auto max-w-5xl">
      <div class="flex flex-col items-center text-center">
        <h2 class="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Ready to Transform Your Data Strategy?
        </h2>

        <p class="max-w-3xl mb-10 text-xl text-gray-200">
          Join thousands of innovative companies already using AIN8N to unlock the full potential of their data. Start your free trial today and experience the difference.
        </p>

        <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button class="px-8 py-4 font-medium text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-purple-500/30 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
            Start Free Trial
          </button>

          <button class="px-8 py-4 font-medium text-white transition-all duration-300 border border-white/30 rounded-full backdrop-blur-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">
            Schedule Demo
          </button>
        </div>

        <!-- Trust badges -->
        <div class="flex flex-wrap items-center justify-center gap-4 mt-12">
          <div class="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span class="text-sm font-medium text-white">4.9/5 Rating</span>
          </div>

          <div class="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-sm font-medium text-white">99.9% Uptime</span>
          </div>

          <div class="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clip-rule="evenodd" />
              <path fill-rule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11z" clip-rule="evenodd" />
            </svg>
            <span class="text-sm font-medium text-white">24/7 Support</span>
          </div>

          <div class="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
            <span class="text-sm font-medium text-white">Trusted by 5000+</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No props needed for this component
</script>

<style scoped>
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.2;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.4;
  }
}
</style>