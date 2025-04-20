import { useI18n as vueUseI18n } from 'vue-i18n';

export default function useI18n() {
  const { t, locale } = vueUseI18n();

  // Verificações de localidade
  const isPortugal = () => locale.value === 'pt-PT';
  const isBrazil = () => locale.value === 'pt-BR';
  const isPortuguese = () => locale.value.startsWith('pt');
  const isEnglish = () => locale.value === 'en';

  // Determina o preço com base na localidade
  const productPrice = () => {
    if (isPortugal()) return '17€';
    if (isBrazil()) return 'R$87';
    return '$17';
  };

  return {
    t,
    locale,
    isPortugal,
    isBrazil,
    isPortuguese,
    isEnglish,
    productPrice
  };
}