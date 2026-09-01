# SAVE_PROJETO_v1_15_14

## Base
Versão criada sobre `v1.15.13 PRONTO_CLASSICO LOCAL`.

## Alterações desta versão

### 1. Seletor de dificuldade
- Corrigido o contraste visual das opções de dificuldade da IA.
- Clássico e Arena usam fundo escuro e texto claro no seletor e nas opções Fácil / Normal / Difícil.
- Adicionado foco visual mais legível.
- Nenhuma regra ou comportamento da IA foi alterado.

### 2. Regras da Arena alinhadas ao Clássico
- A janela de Regras da Arena deixou de usar a grade corrida antiga.
- Agora segue o mesmo padrão de consulta do Clássico, com quatro abas:
  - 🎲 Partida
  - ⚔️ Combate
  - 👁️ Informação
  - 🏰 Campo
- O conteúdo específico da Arena foi preservado e reorganizado nessas abas.
- Layout, cartões, exemplo destacado e comportamento responsivo foram alinhados ao modal do Clássico.

## O que NÃO foi alterado
- Regras e balanceamento.
- IA do Clássico ou Arena.
- Árbitro do Clássico.
- Núcleo de regras da Arena.
- Worker / servidor / Durable Objects.
- Replay.
- Treino.
- `wrangler.jsonc`.

## Arquivos ativos alterados
- `public/triplayer.html`
- `public/tri-ui-global.js` (somente controle visual das abas de Regras)
- `public/ui-v1157.css`

## Status
LOCAL PARA TESTE. Não publicar até aprovação explícita.
