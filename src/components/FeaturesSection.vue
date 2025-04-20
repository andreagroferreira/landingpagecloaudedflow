<template>
  <section class="py-24 relative overflow-hidden">
    <!-- Background effects -->
    <div class="absolute inset-0 -z-10 bg-card/5 overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.1),transparent_50%)]"></div>
      <div class="absolute -top-24 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4">
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Automatização inteligente com N8N e IA
        </h2>
        <p class="text-muted-foreground text-lg">
          Nossos templates combinam o poder do N8N com inteligência artificial
          para criar automações que se adaptam às suas necessidades de negócio.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div v-for="(feature, index) in features" :key="index" class="group">
          <div
            class="h-full p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/40
                  shadow-md hover:shadow-lg transition-all duration-300
                  hover:border-primary/30 hover:bg-background/80"
          >
            <div class="mb-5 w-14 h-14 rounded-xl flex items-center justify-center
                      bg-primary/10 text-primary border border-primary/20
                      group-hover:bg-primary/20 transition-colors duration-300"
            >
              <component :is="feature.icon" class="w-7 h-7" />
            </div>

            <h3 class="text-xl font-bold mb-3">{{ feature.title }}</h3>
            <p class="text-muted-foreground">{{ feature.description }}</p>

            <ul class="mt-5 space-y-2" v-if="feature.benefits">
              <li v-for="(benefit, i) in feature.benefits" :key="i" class="flex items-start">
                <svg class="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm">{{ benefit }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <a
          href="#pricing"
          class="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg
                hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/25
                focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
        >
          Comece a usar hoje
          <svg class="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Você pode substituir os ícones por componentes SVG ou usar uma biblioteca como Heroicons, Font Awesome, etc.
// Aqui estou usando componentes inline para simplicidade
const AutomationIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  `
}

const AiIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  `
}

const IntegrationIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  `
}

const TemplateIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  `
}

const CustomizationIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  `
}

const SupportIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  `
}

const features = [
  {
    title: 'Automação de Processos',
    description: 'Automatize fluxos de trabalho complexos com inteligência artificial integrada ao N8N.',
    icon: AutomationIcon,
    benefits: [
      'Redução de tarefas manuais em até 80%',
      'Processos mais rápidos e livres de erros',
      'Escalonamento simplificado'
    ]
  },
  {
    title: 'Processamento de IA',
    description: 'Utilize modelos de IA para extrair insights e automatizar decisões em seus fluxos de trabalho.',
    icon: AiIcon,
    benefits: [
      'Análise de sentimento em tempo real',
      'Classificação automática de conteúdo',
      'Processamento de linguagem natural'
    ]
  },
  {
    title: 'Integrações Pré-configuradas',
    description: 'Conecte-se a centenas de serviços e APIs com integrações prontas para uso.',
    icon: IntegrationIcon,
    benefits: [
      'Mais de 200 integrações disponíveis',
      'Configuração com poucos cliques',
      'Atualizações automáticas'
    ]
  },
  {
    title: 'Templates Prontos para Uso',
    description: 'Comece rapidamente com nossos templates pré-configurados para casos de uso comuns.',
    icon: TemplateIcon,
    benefits: [
      'Modelos para marketing, vendas e suporte',
      'Implementação em minutos, não em semanas',
      'Exemplos de casos de uso completos'
    ]
  },
  {
    title: 'Personalização Avançada',
    description: 'Adapte os templates às suas necessidades específicas com opções flexíveis de personalização.',
    icon: CustomizationIcon,
    benefits: [
      'Interface visual intuitiva',
      'Sem necessidade de codificação',
      'Personalização profunda quando necessário'
    ]
  },
  {
    title: 'Suporte Especializado',
    description: 'Conte com nossa equipe de especialistas para ajudar na implementação e otimização dos seus fluxos.',
    icon: SupportIcon,
    benefits: [
      'Documentação detalhada',
      'Suporte técnico dedicado',
      'Consultoria para casos específicos'
    ]
  }
]
</script>