<template>
  <section id="cta" class="py-24 relative overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 bg-gradient-to-b from-background to-background/90 z-0"></div>
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

    <!-- Animated circles -->
    <div class="absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full bg-primary/5 blur-3xl"></div>
    <div class="absolute -bottom-[30%] -right-[20%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-3xl"></div>

    <!-- Animated particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="n in 6" :key="n"
           class="absolute rounded-full"
           :class="`particle-${n}`"
           :style="{
             width: `${Math.max(10, Math.random() * 20)}px`,
             height: `${Math.max(10, Math.random() * 20)}px`,
             background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.3) 0%, rgba(var(--primary-rgb), 0) 70%)',
             top: `${Math.random() * 100}%`,
             left: `${Math.random() * 100}%`,
             animationDelay: `${Math.random() * 5}s`,
             animationDuration: `${Math.random() * 10 + 10}s`
           }">
      </div>
    </div>

    <div class="container relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/70">
            Ready to transform your workflow?
          </span>
        </h2>

        <p class="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of businesses already using our AI-powered N8N templates to streamline operations and boost productivity.
        </p>

        <div class="flex flex-wrap justify-center gap-4">
          <button class="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1">
            Get Started Now
          </button>

          <button class="bg-card border border-border hover:border-primary/30 px-8 py-3 rounded-lg font-medium shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            Watch Demo
          </button>
        </div>

        <!-- Testimonial preview -->
        <div class="mt-16 flex items-center justify-center">
          <div class="relative p-6 bg-card/40 backdrop-blur-sm rounded-xl border border-border shadow-lg max-w-2xl hover:border-primary/20 transition-all duration-300">
            <div class="absolute -top-5 right-10">
              <div class="w-10 h-10 rounded-full overflow-hidden border-2 border-background">
                <img src="https://i.pravatar.cc/100?img=36" alt="Testimonial avatar" class="w-full h-full object-cover" />
              </div>
            </div>

            <div class="flex space-x-2 mb-2">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="text-yellow-500">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>

            <p class="italic text-sm text-muted-foreground mb-3">
              "Implementing these AI templates has completely transformed how we handle customer data. Our processing time dropped by 70% in just the first week!"
            </p>

            <div class="font-medium">Sarah Johnson, CTO at TechFlow</div>
          </div>
        </div>

        <!-- Trust indicators -->
        <div class="mt-16">
          <p class="text-sm text-muted-foreground mb-4">Trusted by innovative companies worldwide</p>
          <div class="flex flex-wrap justify-center gap-8 opacity-70">
            <div v-for="i in 5" :key="i" class="h-8 w-24 bg-muted-foreground/20 rounded flex items-center justify-center">
              <span class="text-xs text-muted-foreground">LOGO {{ i }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No props or additional logic needed
</script>

<style scoped>
@keyframes float-up {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
}

[class^="particle-"] {
  animation: float-up linear infinite;
  animation-duration: 15s;
}

.particle-1 { animation-delay: 0s; }
.particle-2 { animation-delay: 3s; }
.particle-3 { animation-delay: 5s; }
.particle-4 { animation-delay: 7s; }
.particle-5 { animation-delay: 9s; }
.particle-6 { animation-delay: 11s; }
</style>