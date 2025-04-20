<template>
  <section class="py-24 relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-950 to-gray-900"></div>
    <div class="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-950 to-transparent"></div>

    <!-- Decorative blobs -->
    <div class="absolute top-1/4 right-0 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
    <div class="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Section header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          {{ title }}
        </h2>
        <p class="text-gray-300 text-lg">
          {{ subtitle }}
        </p>
      </div>

      <!-- Benefits grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(benefit, index) in benefits" :key="index"
             class="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6">
            <div class="w-8 h-8 text-blue-400" v-html="benefit.icon"></div>
          </div>

          <h3 class="text-xl font-semibold text-white mb-3">{{ benefit.title }}</h3>
          <p class="text-gray-400">{{ benefit.description }}</p>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-16 text-center" v-if="showCta">
        <p class="text-gray-300 mb-6 text-lg">{{ ctaText }}</p>
        <button class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition duration-300 transform hover:-translate-y-1">
          {{ ctaButtonText }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Why Choose AIN8N"
  },
  subtitle: {
    type: String,
    default: "Discover how our platform delivers tangible results and transforms your data operations"
  },
  benefits: {
    type: Array,
    default: () => [
      {
        title: "Real-time Analytics",
        description: "Get instant insights from your data with powerful real-time analytics that help you make faster decisions.",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
      },
      {
        title: "Data Security",
        description: "Enterprise-grade security with encryption at rest and in transit, plus compliance with global data regulations.",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'
      },
      {
        title: "Easy Integration",
        description: "Seamlessly connects with your existing tech stack with over 100+ pre-built integrations and open APIs.",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
      },
      {
        title: "Intuitive Interface",
        description: "User-friendly dashboards and tools designed for both technical and non-technical team members.",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>'
      },
      {
        title: "Predictive Insights",
        description: "Leverage AI-powered predictions to anticipate trends and take proactive business actions.",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>'
      },
      {
        title: "Scalable Architecture",
        description: "Grows with your business from startup to enterprise with flexible pricing and performance scaling.",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>'
      }
    ]
  },
  showCta: {
    type: Boolean,
    default: true
  },
  ctaText: {
    type: String,
    default: "Ready to experience these benefits for yourself?"
  },
  ctaButtonText: {
    type: String,
    default: "Start Free Trial"
  }
});
</script>

<style scoped>
/* Additional custom styles can be added here if needed */
</style>