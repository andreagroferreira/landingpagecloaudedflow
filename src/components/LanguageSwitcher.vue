<template>
  <div class="flex items-center gap-2">
    <button
      v-for="lang in availableLocales"
      :key="lang.code"
      @click="changeLocale(lang.code)"
      class="px-2 py-1 text-sm rounded-md transition-colors"
      :class="currentLocale === lang.code ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-primary/5'"
    >
      {{ lang.name }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const currentLocale = computed(() => locale.value);

const availableLocales = [
  { code: 'pt-BR', name: '🇧🇷 PT-BR' },
  { code: 'pt-PT', name: '🇵🇹 PT-PT' },
  { code: 'en', name: '🇬🇧 EN' }
];

const changeLocale = (localeCode) => {
  locale.value = localeCode;
  // Para persistir a escolha do usuário
  localStorage.setItem('userLocale', localeCode);
};
</script>