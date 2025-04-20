import { createI18n } from 'vue-i18n';
import messages from '../i18n/messages';

// Função para detectar o idioma ideal
function detectPreferredLanguage() {
  // Tentar obter do localStorage primeiro (escolha do usuário)
  const savedLocale = localStorage.getItem('userLocale');
  if (savedLocale && ['en', 'pt-BR', 'pt-PT'].includes(savedLocale)) {
    return savedLocale;
  }

  // Tenta obter o idioma do navegador
  const browserLang = navigator.language || navigator.userLanguage;

  // Mapeamento de idiomas do navegador para locales do app
  if (browserLang === 'pt-BR') return 'pt-BR';
  if (browserLang.startsWith('pt')) return 'pt-PT';

  // Default para inglês se não for português
  return 'en';
}

// Configuração do i18n
const i18n = createI18n({
  legacy: false, // Usa a Composition API
  globalInjection: true, // Injeta propriedades globais como $t em todos os componentes
  locale: detectPreferredLanguage(), // Detecta o locale preferido
  fallbackLocale: 'en', // Locale de fallback
  messages
});

export default i18n;