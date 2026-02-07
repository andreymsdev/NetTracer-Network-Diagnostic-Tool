# NET TRACER | Análise de Rede
---
### 🔗 [DEMO AO VIVO - ACESSE AQUI](https://net-tracer-network-diagnostic-tool.vercel.app/)
---
### Desenvolvido para o Hackathon "Hacks for Hackers" (Jan 2026)
---

![Interface NetTracer](images/nettracer.png)

## Visão Geral
**NetTracer** é um painel de diagnóstico profissional criado para desenvolvedores e hackers que precisam monitorar o status de uplink com precisão. Diferente das ferramentas tradicionais e poluídas, o NetTracer oferece uma experiência imersiva de terminal que coleta geolocalização em tempo real, dados de ISP e métricas de latência em uma interface limpa e de alto desempenho.

## Funcionalidades
- **Escaneamento de Uplink em Tempo Real:** Medição instantânea de latência e estabilidade da conexão.
- **Inteligência Geográfica:** Obtém dados precisos de Cidade, País e ISP via integração segura de API.
- **UI Profissional em Terminal:** Interface de alta fidelidade com animações interativas e efeito de digitação em tempo real.
- **Análise de Status de Segurança:** Verificação heurística para determinar se a conexão está **ESTÁVEL** ou **VULNERÁVEL** com base no desempenho da rede.
- **Layout Responsivo:** Arquitetura de dados em três colunas, otimizada para Desktop e Mobile.

## Stack Tecnológico
- **Frontend:** JavaScript Vanilla (ES6+), HTML5, CSS3 (Grid Customizado & Glassmorphism).
- **Backend:** Node.js & Express (Deploy via Funções Serverless do Vercel).
- **APIs:** Axios para buscar metadados externos de serviços de geolocalização.
- **Deploy:** Vercel para hospedagem de alta disponibilidade.

## Desafios & Soluções

* **Lógica Assíncrona do Typewriter:**
    * **Desafio:** Renderizar dados em tempo real de uma API backend usando efeito de digitação caracter por caracter causava problemas de sincronização.
    * **Solução:** Implementei um sistema de fila assíncrona em JavaScript que aguarda a resposta completa da API antes de iniciar a animação no terminal.
* **Migração para Serverless:**
    * **Desafio:** Migrar de um ambiente Node.js local para Funções Serverless do Vercel exigiu reestruturação completa da arquitetura backend.
    * **Solução:** Refatorei o servidor Express em uma estrutura modular de API (`/api/index.js`) e configurei rewrites personalizados via `vercel.json`.
* **Design Responsivo do Terminal:**
    * **Desafio:** Ajustar um relatório complexo em três colunas para telas pequenas sem perder legibilidade.
    * **Solução:** Usei CSS Flexbox e Grid com media queries condicionais para empilhar as colunas verticalmente em dispositivos móveis.

## Instalação & Configuração

1. **Clonar o repositório:**
   ```bash
      git clone https://github.com/andreymsdev/NetTracer.git
   ```
2. **Instalar dependências:**
   ```bash
      npm install
   ```
3. **Executar localmente:**
    ```bash
      node api/index.js
   ```
## Submissão no Hackathon

Este projeto foi desenvolvido individualmente para o Hacks for Hackers. O objetivo é fortalecer a comunidade hacker oferecendo uma ferramenta que combina utilidade técnica com uma estética profissional e simplificada.
