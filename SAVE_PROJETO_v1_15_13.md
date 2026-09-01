# SAVE_PROJETO v1.15.13 — Pronto próximo ao tabuleiro no Clássico

Base: v1.15.12 GIT_CLOUDFLARE.
Status: LOCAL PARA TESTE.

## Alteração

Para manter Clássico e Arena consistentes, o botão **Pronto** foi reposicionado também nos modos Clássicos:

- Clássico contra IA (`public/index.html`)
- Clássico Online (`public/multiplayer.html`)

Durante a preparação, o botão agora aparece no bloco **Preparação do tabuleiro**, junto dos dois Postos e do status de posicionamento, imediatamente antes do tabuleiro.

Também foi movido para esse bloco o status de pronto/preparando de cada modo.

## O que NÃO mudou

- nenhuma regra;
- nenhuma mecânica de preparação;
- IA;
- Árbitro;
- Worker/servidor;
- multiplayer;
- Arena;
- Treino;
- balanceamento;
- IDs/eventos dos botões.

`wrangler.jsonc` e `src/worker.js` permanecem idênticos à v1.15.12.

## Regra de manutenção reforçada

Sempre revisar Clássico e Arena juntos quando uma alteração fizer sentido nos dois modos. Só manter diferenças quando houver justificativa específica do modo.
