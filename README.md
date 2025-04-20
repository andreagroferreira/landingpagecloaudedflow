# N8NAI Landing Page

Uma landing page de alta conversão para um infoproduto de templates para o N8N com IA e um master prompt para a Claude AI.

## Tecnologias Utilizadas

- Vue 3 (Composition API)
- Vite
- Tailwind CSS
- Vue Router
- Vuex

## Recursos de Conversão

Esta landing page inclui vários elementos de alta conversão:

- **Hero Section** otimizada para captura de leads
- **Social Proof** com depoimentos de clientes
- **Urgência** com countdown timer
- **Oferta limitada** com desconto por tempo determinado
- **Exit Intent Popup** para capturar leads que estão saindo
- **Garantia de devolução** para reduzir a objeção de compra
- **FAQs** para remover dúvidas comuns
- **Múltiplos CTAs** ao longo da página
- **Design responsivo** otimizado para dispositivos móveis

## Estrutura do Projeto

```
/
├── public/             # Arquivos estáticos
│   ├── assets/         # Imagens e outros recursos
│   ├── components/     # Componentes Vue reutilizáveis
│   ├── pages/          # Páginas principais
│   ├── styles/         # Estilos CSS globais
│   ├── App.vue         # Componente raiz
│   └── main.js         # Ponto de entrada da aplicação
├── index.html          # Template HTML
└── package.json        # Dependências do projeto
```

## Como Executar

1. Instale as dependências:
```
npm install
```

2. Inicie o servidor de desenvolvimento:
```
npm run dev
```

3. Acesse http://localhost:3000 no seu navegador

## Build para Produção

Para criar uma versão otimizada para produção:

```
npm run build
```

Os arquivos serão gerados na pasta `dist` e podem ser hospedados em qualquer servidor web estático.

## Personalização

### Cores e Tema

As cores principais podem ser personalizadas no arquivo `tailwind.config.js`.

### Conteúdo

O texto e imagens podem ser editados nos componentes Vue em `src/pages` e `src/components`.

## Licença

Este projeto é licenciado sob a licença MIT.
