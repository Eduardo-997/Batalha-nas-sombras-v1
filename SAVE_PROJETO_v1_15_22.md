# SAVE_PROJETO v1.15.22 — HOTFIX ARENA

Base: v1.15.21 GIT_CLOUDFLARE.

## Correção crítica
A Arena inteira (solo e online) não respondia aos cards de modo porque `public/tri-ui-global.js` carregava os objetos do núcleo por `window.TriGame`, mas `public/tri-core-global.js` havia deixado de criar esse objeto na sincronização da v1.15.20.

Sintoma: clicar em “1 jogador + 2 IA” ou “2 jogadores + 1 IA” não avançava; o JS da Arena interrompia a execução antes de registrar/inicializar corretamente a interface.

Correção: restaurado `window.TriGame` em `tri-core-global.js` com os mesmos símbolos consumidos pela UI global:
- TRI_SIDES
- TRI_DEFS
- TRI_BY_NAME
- TRI_BONUSES
- TriReferee
- TriAI
- applyTriAction
- normalNeighbors
- diagonalNeighbors
- allNeighbors
- attackCells
- abilityCells
- graphDistance
- defOf

Também foi atualizado o cache-bust de triplayer.html para v1.15.22.

## Não alterado
- regras da Arena;
- IA Normal/Difícil/Extrema;
- Arena Online/Worker;
- Clássico;
- balanceamento;
- Replay;
- Cerco Final;
- wrangler.jsonc.

## Próxima decisão já anotada
Depois de confirmar o hotfix da Arena, discutir/implementar escolha aleatória de quem começa, para o Jogador A não possuir vantagem fixa. Essa mudança não faz parte da v1.15.22.
