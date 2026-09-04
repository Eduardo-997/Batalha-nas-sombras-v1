# SAVE_PROJETO — Batalha nas Sombras v1.15.25

Base: **v1.15.24 GIT + CLOUDFLARE** já publicada.
Tipo desta versão: **HOTFIX GIT + CLOUDFLARE**.

## Objetivo

Corrigir três problemas encontrados na auditoria pós-publicação da v1.15.24, sem alterar balanceamento, atributos, mapas, condição de vitória ou as mecânicas aprovadas daquela versão.

## 1. IA + Escudeiro Vinculado

### Problema
- A regra já impedia corretamente um Escudeiro vinculado de se mover sozinho.
- Porém, a IA ainda podia escolher `startMove` para um Escudeiro com `linkedToId` ativo.
- No Clássico isso podia levar a repetição da mesma ação inválida; na Arena a proteção de falhas encerrava o turno depois das tentativas.

### Correção
- IA do Clássico agora só inicia movimento se a peça **não estiver vinculada**.
- TriAI da Arena recebeu a mesma proteção.
- A IA continua livre para fazer outra ação válida da peça, como sabotagem/ataque quando aplicável, antes de encerrar.
- `public/ai.js` foi regenerado a partir do `public/ai-worker.js`, garantindo que a IA realmente carregada no navegador contém a correção.
- `public/tri-core.js`, `src/tri-core.js` e `public/tri-core-global.js` foram atualizados de forma equivalente.

## 2. Limpeza de Vincular em remoções especiais

### Problema
A limpeza de `linkedToId` já funcionava em morte normal, mas algumas remoções especiais podiam deixar o Escudeiro apontando para uma unidade que já não estava disponível.

### Correção
O vínculo agora é limpo também quando aplicável em:
- primeira queda do Zumbi antes da ressurreição;
- morte/remoção do Galho-Vivo;
- colapso dos Galhos-Vivos quando o Druida morre;
- possessão do Fantasma sobre uma unidade vinculada;
- encerramento da possessão quando necessário;
- expiração/despawn de unidades temporárias;
- eliminação completa de um lado na Arena.

A correção foi aplicada ao núcleo do Clássico/Online e ao núcleo da Arena/Online.

## 3. Replay — múltiplos eventos da mesma ação

### Problema
A v1.15.24 guardava apenas um objeto `replayEvent` por quadro. Quando uma mesma ação produzia eventos em sequência, o evento posterior podia sobrescrever o anterior.

Exemplos:
- movimento M1 → PER: o evento de movimento podia ser perdido;
- armadilha → movimento → PER: a armadilha ou o movimento podia deixar de aparecer explicitamente no Replay.

### Correção
- Cada ação externa começa com o buffer de evento do Replay limpo.
- Se a ação gerar mais de um evento, `replayEvent` passa a usar `type: "sequence"` com a lista ordenada de eventos.
- O Replay continua compatível com quadros antigos que tenham apenas um evento simples.
- O renderizador do Replay agora percorre todos os eventos da sequência e exibe os marcadores/resumos correspondentes.
- Testado em Clássico/Treino e Arena com movimento + PER e armadilha + movimento.

## Consistência / versão
- `package.json`: **1.15.25**.
- Todos os **35** cache-busts ativos dos HTML principais: `?v=1.15.25`.
- `public/tri-core.js` e `src/tri-core.js`: idênticos byte a byte após o hotfix.
- `public/ai.js`: código embutido corresponde exatamente ao `public/ai-worker.js` atual.
- `wrangler.jsonc`: nome técnico do serviço não foi alterado.

## Não alterado
- Balanceamento dos personagens.
- Atributos/fichas.
- Bardo e seus bônus.
- Vidente de 2 casas conectadas aprovado na v1.15.24.
- Funcionamento normal de Vincular/Desvincular.
- Emote do Ninja.
- Mapas/árvores/Postos.
- Condição de vitória/economia de turnos.
- Reconexão Online e Modo História continuam fora deste hotfix.

## Estado

**v1.15.25 HOTFIX preparada para substituir a v1.15.24 publicada.**
