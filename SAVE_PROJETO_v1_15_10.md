# SAVE DO PROJETO — Batalha nas Sombras v1.15.10

## Base
- Continuação direta da v1.15.9 GIT_CLOUDFLARE.
- Esta versão é preparada para Git + Cloudflare.

## Alteração aprovada — identidade dos arquétipos
A nomenclatura visível inspirada em Pedra/Papel/Tesoura foi substituída por nomes próprios do jogo:

- `R` (interno) → **🛡️ Vanguarda**
- `P` (interno) → **📜 Estrategista**
- `S` (interno) → **🗡️ Executor**
- `J` (interno) → **🃏 Coringa**
- `C` (interno) → **🦴 Condenado**

### Regra visível
- Vanguarda vence Executor.
- Executor vence Estrategista.
- Estrategista vence Vanguarda.
- Coringa vence os demais arquétipos.
- Condenado perde para todos os outros.
- Arquétipos iguais empatam.

## Onde a nomenclatura foi atualizada
- Clássico local.
- Clássico Online.
- Arena.
- Treino.
- Filtros de seleção de personagens.
- Fichas/inspectores de personagens.
- Aba Regras / regras rápidas.
- Ícones de arquétipo enviados pelo Árbitro online.

## Segurança da mudança
- Os códigos internos `R/P/S/J/C` NÃO foram renomeados.
- A matriz de Confronto Direto NÃO foi alterada.
- IA e balanceamento NÃO foram alterados.
- A mudança de `typeIcon` é apenas de apresentação: 🪨→🛡️ para Vanguarda e ✂️→🗡️ para Executor.
- `wrangler.jsonc` permanece inalterado.

## Testes
- Sintaxe de todos os JS em `public/` e `src/` validada com `node --check`.
- Matriz de Confronto Direto validada no Clássico e Arena.
- Verificado que os textos visíveis carregados pelo jogo não mantêm Pedra/Papel/Tesoura nem os emojis antigos 🪨/✂️.

## Próxima base
Usar esta v1.15.10 como base mais recente após aprovação/teste do usuário.
