<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/40">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <!-- Logo -->
        <a href="/" class="flex items-center">
          <h1 class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">AIN8N</h1>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#beneficios" class="text-gray-300 hover:text-white hover:underline transition-colors">Benefícios</a>
          <a href="#como-funciona" class="text-gray-300 hover:text-white hover:underline transition-colors">Como Funciona</a>
          <a href="#pricing" class="text-gray-300 hover:text-white hover:underline transition-colors">Preço</a>
          <a href="#checkout" class="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium shadow-md hover:shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
            Comprar Agora
          </a>
        </div>

        <!-- Mobile menu button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-gray-300 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-gray-900 border-t border-gray-800/40 py-4">
      <div class="container mx-auto px-4 flex flex-col space-y-4">
        <a href="#beneficios" class="text-gray-300 hover:text-white hover:underline transition-colors px-2 py-2" @click="mobileMenuOpen = false">Benefícios</a>
        <a href="#como-funciona" class="text-gray-300 hover:text-white hover:underline transition-colors px-2 py-2" @click="mobileMenuOpen = false">Como Funciona</a>
        <a href="#pricing" class="text-gray-300 hover:text-white hover:underline transition-colors px-2 py-2" @click="mobileMenuOpen = false">Preço</a>
        <a href="#checkout" class="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium shadow-md text-center w-full" @click="mobileMenuOpen = false">
          Comprar Agora
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);
</script>