<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import messages from '../i18n/messages';

const props = defineProps({
  onCheckout: {
    type: Function,
    required: true
  }
});

const { locale } = useI18n();

// Acesso direto aos dados traduzidos
const valueTitle = computed(() => messages[locale.value]?.value?.title || '');
const valueItems = computed(() => messages[locale.value]?.value?.items || []);
const pricingInfo = computed(() => messages[locale.value]?.value?.pricing || {});

// Acessar valores específicos para garantir que estão disponíveis
const realValue = computed(() => pricingInfo.value.realValue || 'Valor real do pack:');
const realValueAmount = computed(() => pricingInfo.value.realValueAmount || '500€');
const normalPrice = computed(() => pricingInfo.value.normalPrice || 'Preço normal:');
const normalPriceAmount = computed(() => pricingInfo.value.normalPriceAmount || '47€');
const todayPrice = computed(() => pricingInfo.value.todayPrice || 'Hoje, tu levas tudo por:');
const todayPriceAmount = computed(() => pricingInfo.value.todayPriceAmount || '17€');
const limitedOffer = computed(() => pricingInfo.value.limitedOffer || 'Oferta por tempo limitado!');
const ctaText = computed(() => pricingInfo.value.cta || 'Quero este prompt agora');
</script>

<template>
  <section class="py-16 md:py-24 relative overflow-hidden bg-card/30">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-background/90 z-0"></div>
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

    <div class="container relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-8">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70" v-html="valueTitle">
          </span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div v-for="(item, index) in valueItems" :key="index" class="bg-card/40 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
            <div class="text-3xl text-primary mb-4" v-html="item.icon"></div>
            <p v-html="item.description"></p>
            <p class="text-sm mt-2 text-muted-foreground italic" v-html="item.value"></p>
          </div>
        </div>

        <div class="bg-card/40 backdrop-blur-sm rounded-xl p-8 border border-primary/30 shadow-lg max-w-xl mx-auto transform hover:scale-105 transition-all duration-300">
          <div class="flex justify-between items-center mb-4">
            <span class="text-xl">{{ realValue }}</span>
            <span class="text-xl line-through text-muted-foreground">{{ realValueAmount }}</span>
          </div>
          <div class="flex justify-between items-center mb-2">
            <span class="text-xl">{{ normalPrice }}</span>
            <span class="text-xl line-through text-muted-foreground">{{ normalPriceAmount }}</span>
          </div>
          <div class="flex justify-between items-center mb-6 bg-primary/10 p-3 rounded-lg">
            <span class="text-xl font-bold">{{ todayPrice }}</span>
            <span class="text-3xl font-bold text-primary">{{ todayPriceAmount }}</span>
          </div>
          <p class="text-center mb-4 text-sm font-medium" v-html="limitedOffer"></p>

          <a @click.prevent="onCheckout" href="#pricing" class="block w-full bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-medium shadow-lg shadow-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 text-lg text-center subtle-pulse" v-html="ctaText">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>