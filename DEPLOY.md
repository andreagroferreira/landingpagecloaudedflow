# Guia de Deploy do ClaudeFlow com Coolify

Este guia explica como fazer o deploy da landing page do ClaudeFlow usando Coolify e Docker Compose.

## Pré-requisitos

1. Um servidor com Docker e Docker Compose instalados
2. Coolify instalado no servidor
3. Um domínio configurado para apontar para o IP do seu servidor
4. Conhecimentos básicos de terminal e Docker

## Passos para o Deploy

### 1. Preparação dos Arquivos

Certifique-se de que os seguintes arquivos estão presentes na raiz do projeto:

- `docker-compose.yml`
- `coolify.json`
- Pasta `traefik` contendo:
  - `traefik.yml`

### 2. Configuração Personalizada

Antes de prosseguir, faça as seguintes alterações:

1. No arquivo `traefik/traefik.yml`:
   - Altere `seu-email@exemplo.com` para o seu email real (para receber notificações sobre certificados SSL)

2. No arquivo `coolify.json`:
   - Altere `claudeflow.seu-dominio.com` para o seu domínio real

3. Crie o arquivo `traefik/acme.json` e dê as permissões corretas:
   ```bash
   mkdir -p traefik
   touch traefik/acme.json
   chmod 600 traefik/acme.json
   ```

### 3. Deploy com Coolify

Existem duas maneiras de fazer o deploy usando Coolify:

#### Opção 1: Via Interface Web do Coolify

1. Acesse o painel de controle do Coolify
2. Adicione um novo projeto
3. Selecione "Deploy from Docker Compose"
4. Faça upload dos arquivos de configuração ou aponte para o repositório Git
5. Siga as instruções na tela para completar o deploy

#### Opção 2: Via CLI do Coolify

Se você tem a CLI do Coolify instalada:

```bash
coolify deploy --compose docker-compose.yml --config coolify.json
```

### 4. Verificação

Após o deploy, verifique se a aplicação está funcionando corretamente:

1. Acesse o seu domínio no navegador (ex: https://claudeflow.seu-dominio.com)
2. Verifique os logs no painel do Coolify para identificar possíveis erros
3. Teste o checkout usando o link do Stripe

### 5. Resolução de Problemas

Se encontrar problemas durante o deploy:

1. Verifique os logs do container:
   ```bash
   docker logs claudeflow
   ```

2. Verifique se as portas necessárias (80 e 443) estão abertas no firewall do servidor

3. Caso ocorram problemas com certificados SSL, verifique se o seu domínio está corretamente configurado para apontar para o IP do servidor

## Atualização da Aplicação

Para atualizar a aplicação após alterações:

1. Via painel do Coolify: Clique em "Redeploy"
2. Via Docker Compose:
   ```bash
   docker-compose pull
   docker-compose up -d
   ```

## Suporte

Se encontrar problemas com esta configuração, verifique a documentação do Coolify em https://coolify.io/docs/ ou entre em contato com o suporte.