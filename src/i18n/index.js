import { ref, reactive, computed } from 'vue';
import messages from './messages';

// Países onde o português de Portugal é usado
const PT_PT_COUNTRIES = ['PT', 'AO', 'CV', 'GW', 'MZ', 'ST', 'TL'];

// Países onde o português do Brasil é usado
const PT_BR_COUNTRIES = ['BR'];

// Estado global do i18n
const state = reactive({
  detectedLocale: null,
  userCountry: null,
  selectedLocale: null,
  fallbackLocale: 'en'
});

// Detecção do país do usuário via API de geolocalização
const detectUserCountry = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    state.userCountry = data.country_code;

    // Determinação da locale baseada no país
    if (PT_PT_COUNTRIES.includes(state.userCountry)) {
      state.detectedLocale = 'pt-PT';
    } else if (PT_BR_COUNTRIES.includes(state.userCountry)) {
      state.detectedLocale = 'pt-BR';
    } else {
      state.detectedLocale = 'en';
    }

    state.selectedLocale = state.detectedLocale;
    return state.detectedLocale;
  } catch (error) {
    console.error('Error detecting location:', error);
    state.detectedLocale = state.fallbackLocale;
    state.selectedLocale = state.fallbackLocale;
    return state.fallbackLocale;
  }
};

// Inicialização e detecção de idioma
const init = async () => {
  try {
    // Se estamos em ambiente de teste/desenvolvimento, podemos forçar um locale
    // Verifica se estamos em um ambiente de navegador
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const forceLocale = urlParams.get('locale');

      console.log('URL Locale param detected:', forceLocale);

      if (forceLocale && ['en', 'pt-PT', 'pt-BR'].includes(forceLocale)) {
        console.log('Setting forced locale:', forceLocale);
        state.selectedLocale = forceLocale;
        state.detectedLocale = forceLocale;
        return forceLocale;
      }
    }

    // Se não tiver um locale forçado, detecta o país
    return await detectUserCountry();
  } catch (error) {
    console.error('Error in i18n initialization:', error);
    state.selectedLocale = state.fallbackLocale;
    return state.fallbackLocale;
  }
};

// Método para obter a string traduzida usando notação de ponto
const t = (key) => {
  if (!state.selectedLocale) {
    state.selectedLocale = state.fallbackLocale;
  }

  const locale = state.selectedLocale;
  const keys = key.split('.');
  let value = messages[locale];

  for (const k of keys) {
    if (value === undefined) break;
    value = value[k];
  }

  // Fallback para inglês se a chave não for encontrada na locale selecionada
  if (value === undefined && locale !== state.fallbackLocale) {
    value = messages[state.fallbackLocale];
    for (const k of keys) {
      if (value === undefined) break;
      value = value[k];
    }
  }

  return value !== undefined ? value : key;
};

// Propriedade computada para o local atual
const currentLocale = computed(() => state.selectedLocale || state.fallbackLocale);

// Propriedade computada para o país atual
const currentCountry = computed(() => state.userCountry || 'Unknown');

// Exportando funcionalidades
export default {
  init,
  t,
  currentLocale,
  currentCountry,
  state
};