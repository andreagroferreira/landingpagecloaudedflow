<template>
  <section id="testemunhos" class="py-16 md:py-24 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-background/90 z-0"></div>
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Cabeçalho da seção -->
      <div class="max-w-3xl mx-auto text-center mb-12">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            O Que Nossos Clientes Conseguiram
          </span>
        </h2>
        <p class="text-gray-300 text-lg">
          Essas pessoas estavam frustradas com automações, exatamente como você:
        </p>
      </div>

      <!-- Grid de testemunhos -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <!-- Testemunho 1 -->
        <div class="bg-card/40 backdrop-blur-sm border border-border rounded-lg p-6 shadow-lg">
          <div class="flex items-center mb-4">
            <img src="https://randomuser.me/api/portraits/men/42.jpg" alt="Roberto Silva" class="w-14 h-14 rounded-full border-2 border-primary mr-3" />
            <div>
              <p class="font-bold text-foreground">Roberto Silva</p>
              <p class="text-sm text-muted-foreground">Freelancer, São Paulo</p>
            </div>
          </div>
          <div class="mb-4">
            <div class="flex">
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </div>
          </div>
          <p class="text-sm text-foreground mb-4">
            "Gastava <span class="font-bold text-primary">4 horas por dia</span> tentando gerar JSON para o n8n com o ChatGPT. Depois de usar o prompt do ClaudeFlow, consegui criar <span class="font-bold text-primary">5 fluxos completos</span> em menos de uma hora!"
          </p>
          <div class="flex items-center justify-between bg-card/70 p-3 rounded-md border border-border">
            <span class="text-sm font-semibold">Economia de tempo:</span>
            <span class="text-primary font-bold">93%</span>
          </div>
        </div>

        <!-- Testemunho 2 -->
        <div class="bg-card/40 backdrop-blur-sm border border-border rounded-lg p-6 shadow-lg">
          <div class="flex items-center mb-4">
            <img src="https://randomuser.me/api/portraits/women/42.jpg" alt="Camila Oliveira" class="w-14 h-14 rounded-full border-2 border-primary mr-3" />
            <div>
              <p class="font-bold text-foreground">Camila Oliveira</p>
              <p class="text-sm text-muted-foreground">Especialista em Marketing, Rio de Janeiro</p>
            </div>
          </div>
          <div class="mb-4">
            <div class="flex">
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </div>
          </div>
          <p class="text-sm text-foreground mb-4">
            "Como profissional de marketing sem nenhum conhecimento de código, achava impossível criar fluxos no n8n. Os <span class="font-bold text-primary">templates prontos</span> do ClaudeFlow e o prompt me permitiram criar <span class="font-bold text-primary">10 automações</span> de email marketing em apenas 2 dias!"
          </p>
          <div class="flex items-center justify-between bg-card/70 p-3 rounded-md border border-border">
            <span class="text-sm font-semibold">Sem conhecimento técnico:</span>
            <span class="text-primary font-bold">100% funcional</span>
          </div>
        </div>

        <!-- Testemunho 3 -->
        <div class="bg-card/40 backdrop-blur-sm border border-border rounded-lg p-6 shadow-lg">
          <div class="flex items-center mb-4">
            <img src="https://randomuser.me/api/portraits/men/62.jpg" alt="Marcelo Santos" class="w-14 h-14 rounded-full border-2 border-primary mr-3" />
            <div>
              <p class="font-bold text-foreground">Marcelo Santos</p>
              <p class="text-sm text-muted-foreground">Dono de Agência, Belo Horizonte</p>
            </div>
          </div>
          <div class="mb-4">
            <div class="flex">
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </div>
          </div>
          <p class="text-sm text-foreground mb-4">
            "Estava gastando <span class="font-bold text-primary">R$4.000/mês</span> com um desenvolvedor para fazer automações n8n para meus clientes. Com o ClaudeFlow, por apenas <span class="font-bold text-primary">R$97 uma única vez</span>, consigo criar os fluxos eu mesmo. Recuperei o investimento no primeiro dia!"
          </p>
          <div class="flex items-center justify-between bg-card/70 p-3 rounded-md border border-border">
            <span class="text-sm font-semibold">ROI:</span>
            <span class="text-primary font-bold">4.000%</span>
          </div>
        </div>
      </div>

      <!-- Contadores e prova social -->
      <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        <div class="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-4 text-center">
          <div class="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">280+</div>
          <div class="text-sm text-muted-foreground">Clientes Satisfeitos</div>
        </div>
        <div class="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-4 text-center">
          <div class="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">4.250+</div>
          <div class="text-sm text-muted-foreground">Fluxos Gerados</div>
        </div>
        <div class="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-4 text-center">
          <div class="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">97,5%</div>
          <div class="text-sm text-muted-foreground">Taxa de Sucesso</div>
        </div>
        <div class="bg-card/30 backdrop-blur-sm border border-border rounded-lg p-4 text-center">
          <div class="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">4,9/5</div>
          <div class="text-sm text-muted-foreground">Avaliação Média</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Sem usar traduções, tudo hardcoded
</script>