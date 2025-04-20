<template>
  <section class="relative overflow-hidden bg-gradient-to-b from-indigo-950 to-gray-900 py-20 sm:py-24">
    <!-- Background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl"></div>
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid items-center gap-y-16 gap-x-8 lg:grid-cols-2">
        <!-- Left column - Text content -->
        <div>
          <div class="relative mb-10">
            <div class="inline-flex items-center rounded-full bg-indigo-900/30 px-4 py-1 text-sm font-medium text-indigo-300">
              <span class="mr-2 h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></span>
              AI-Powered Insights
            </div>
          </div>

          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Transform Your <span class="text-indigo-400">Data</span> into Strategic <span class="text-indigo-400">Decisions</span>
          </h1>

          <p class="mt-6 text-xl text-gray-300">
            Leverage the power of AI to analyze, predict, and optimize your business operations with actionable insights.
          </p>

          <div class="mt-10 flex flex-col sm:flex-row gap-4">
            <button class="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Get Started
              <svg class="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <button class="inline-flex items-center justify-center rounded-md border border-indigo-400 bg-transparent px-6 py-3 text-base font-medium text-indigo-300 hover:bg-indigo-800/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <svg class="mr-2 -ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
              Watch Demo
            </button>
          </div>

          <!-- Features highlight -->
          <div class="mt-12 grid grid-cols-2 gap-x-6 gap-y-4">
            <div class="feature-item">
              <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-md bg-indigo-900">
                <svg class="h-6 w-6 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 class="font-medium text-white">Predictive Analytics</h3>
              <p class="mt-1 text-sm text-gray-400">Forecast trends with ML algorithms</p>
            </div>

            <div class="feature-item">
              <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-md bg-indigo-900">
                <svg class="h-6 w-6 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="font-medium text-white">Real-time Insights</h3>
              <p class="mt-1 text-sm text-gray-400">Instant data processing</p>
            </div>

            <div class="feature-item">
              <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-md bg-indigo-900">
                <svg class="h-6 w-6 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 class="font-medium text-white">Enterprise Security</h3>
              <p class="mt-1 text-sm text-gray-400">SOC 2 and GDPR compliant</p>
            </div>

            <div class="feature-item">
              <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-md bg-indigo-900">
                <svg class="h-6 w-6 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="font-medium text-white">API Integration</h3>
              <p class="mt-1 text-sm text-gray-400">Connect with your tools</p>
            </div>
          </div>
        </div>

        <!-- Right column - Animated diagram -->
        <div class="relative">
          <div class="relative rounded-xl bg-gray-800/60 backdrop-blur-sm p-6 shadow-2xl border border-gray-700">
            <div class="workflow-diagram">
              <div class="workflow-step workflow-step-1">
                <div class="workflow-icon bg-purple-600">
                  <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                  </svg>
                </div>
                <div class="workflow-content">
                  <h4 class="font-medium text-white">Data Collection</h4>
                  <p class="text-xs text-gray-400">Gathering from multiple sources</p>
                </div>
              </div>

              <div class="workflow-connector"></div>

              <div class="workflow-step workflow-step-2">
                <div class="workflow-icon bg-blue-600">
                  <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="workflow-content">
                  <h4 class="font-medium text-white">AI Processing</h4>
                  <p class="text-xs text-gray-400">Smart algorithm analysis</p>
                </div>
              </div>

              <div class="workflow-connector"></div>

              <div class="workflow-step workflow-step-3">
                <div class="workflow-icon bg-indigo-600">
                  <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="workflow-content">
                  <h4 class="font-medium text-white">Insights Generation</h4>
                  <p class="text-xs text-gray-400">Actionable recommendations</p>
                </div>
              </div>

              <div class="workflow-connector"></div>

              <div class="workflow-step workflow-step-4">
                <div class="workflow-icon bg-green-600">
                  <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="workflow-content">
                  <h4 class="font-medium text-white">Decision Making</h4>
                  <p class="text-xs text-gray-400">Implement strategic changes</p>
                </div>
              </div>
            </div>

            <!-- Testimonial quote -->
            <div class="mt-8 rounded-lg bg-gray-900/50 p-4 border border-gray-700">
              <svg class="h-8 w-8 text-indigo-400 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p class="mt-2 text-sm italic text-gray-300">
                "Their AI solution transformed our decision-making process, enabling us to quickly identify opportunities that were previously invisible to us."
              </p>
              <div class="mt-2 flex items-center">
                <div class="h-8 w-8 rounded-full bg-indigo-800">
                  <span class="flex h-full w-full items-center justify-center text-xs font-medium text-white">
                    MJ
                  </span>
                </div>
                <div class="ml-2">
                  <p class="text-xs font-medium text-white">Maria Johnson</p>
                  <p class="text-xs text-gray-400">CTO, TechVision Inc.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Decorative elements -->
          <div class="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl"></div>
          <div class="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-indigo-500/10 blur-2xl"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
/* Workflow animation and styling */
.workflow-diagram {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.workflow-step {
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: fadeIn 0.5s ease-out forwards;
  opacity: 0;
}

.workflow-step-1 {
  animation-delay: 0.2s;
}

.workflow-step-2 {
  animation-delay: 0.4s;
}

.workflow-step-3 {
  animation-delay: 0.6s;
}

.workflow-step-4 {
  animation-delay: 0.8s;
}

.workflow-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  flex-shrink: 0;
}

.workflow-content {
  flex-grow: 1;
}

.workflow-connector {
  width: 1px;
  height: 1rem;
  background: linear-gradient(to bottom, rgba(79, 70, 229, 0.2), rgba(139, 92, 246, 0.2));
  margin-left: 1.25rem;
}

.feature-item {
  animation: fadeUp 0.5s ease-out forwards;
  opacity: 0;
  animation-delay: calc(0.2s * var(--i, 1));
}

.feature-item:nth-child(1) {
  --i: 1;
}

.feature-item:nth-child(2) {
  --i: 2;
}

.feature-item:nth-child(3) {
  --i: 3;
}

.feature-item:nth-child(4) {
  --i: 4;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>