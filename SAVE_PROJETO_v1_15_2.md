# SAVE DO PROJETO — v1.15.2 · TREINO COM POSTOS + AH

Data: 31/08/2026
Base imediata: **v1.15.1 TREINO + REPLAY LOCAL**, confirmada como evolução correta da **v1.14.1 HOTFIX ALC**.

## Regra de continuidade
- Continuar sempre da versão mais recente aprovada; nunca reconstruir o jogo do zero.
- Antes de qualquer nova alteração, conversar com o usuário e confirmar o que será mudado, como funcionará e o que ficará intocado.
- Esta build é **LOCAL PARA TESTE**. Não enviar ao GitHub/Cloudflare sem pedido explícito do usuário.
- SAVEs antigos servem apenas como histórico e não sobrescrevem decisões mais recentes.

## Alterações aprovadas nesta revisão

### 1. Postos de Operação no Treino
O Treino agora usa:
- 4 personagens no Lado A;
- 2 Postos de Operação no Lado A;
- 4 personagens no Lado B;
- 2 Postos de Operação no Lado B.

Durante a preparação:
- os Postos aparecem no mesmo tabuleiro usado para posicionar as peças;
- cada Posto pode ser selecionado e reposicionado;
- Postos do Lado A precisam ficar nas linhas 1–4;
- Postos do Lado B precisam ficar nas linhas 5–8;
- Postos não podem ocupar árvores, cantos proibidos, outra base ou a mesma casa inicial de um personagem;
- personagens continuam podendo ser reposicionados livremente para criar situações específicas de teste.

Durante o Treino:
- Postos são entidades reais do Árbitro, não apenas decoração;
- bloqueiam ocupação/movimento conforme a regra normal;
- podem ser sabotados por uma peça do lado oposto adjacente por lado ou diagonal;
- a sabotagem usa o mesmo catálogo de benefícios do Clássico;
- bônus escolhidos são aplicados pela mesma lógica real de `GameReferee`;
- o Treino continua sem condição de vitória e sem limite de uma ativação por rodada.

### 2. AH nos Postos sabotados
O benefício **Canalização** (`abilityRange`) já existia no núcleo local da v1.15.1:
- +1 AH permanente;
- só pode ser dado a uma unidade cuja habilidade realmente use AH.

Nesta revisão ele foi integrado/confirmado também na interface de sabotagem do Treino, para que possa ser testado diretamente com os novos Postos.

### 3. Bardo agora pode conceder +1 AH
A Inspiração do Bardo passa a oferecer:
- +1 ATQ;
- +1 ALC;
- **+1 AH**;
- +1 M;
- +1 Vida.

O +1 AH é temporário, seguindo exatamente a mesma duração das demais opções da Inspiração: até o fim do próximo turno do Bardo.

A lógica foi atualizada no:
- Clássico local / Treino (`public/referee.js` + UI);
- Arena local (`public/tri-core*.js` + UI);
- núcleo da Arena em `src/tri-core.js`, para manter a mesma regra no código autoritativo da Arena quando futuramente houver publicação.

### 4. Replay do Treino e Postos
Como o Treino passou a ter Postos reais:
- os estados gravados já continham `bases`;
- o visual do Replay foi ajustado para também desenhar 🏰 Posto e 🏚️ Posto sabotado;
- a legenda do Replay agora inclui Postos.

Não foi adicionado Replay online nem Replay da Arena nesta revisão.

## O que NÃO foi alterado
- balanceamento geral dos personagens;
- regras de vitória do Clássico/Arena;
- IA, exceto por continuar consumindo os mesmos núcleos existentes;
- mapa do Clássico ou da Arena;
- segurança/protocolo do multiplayer;
- armazenamento de replays antigos;
- deploy do GitHub/Cloudflare.

### Observação importante sobre Clássico online
`src/worker.js` do Clássico online permanece no estado anterior e não foi modernizado nesta revisão. Ele é uma implementação mais antiga que ainda não contém todo o elenco/AH atual. Não expandir essa parte automaticamente: revisar/discutir antes de uma futura publicação que pretenda levar todas as mecânicas novas ao Clássico online.

## Validações realizadas
- `node --check` passou em todos os JS de `public/` e `src/`.
- Treino inicia com 4 peças + 2 Postos por lado.
- Validação rejeita Posto sobre personagem.
- Validação rejeita Posto do lado B nas linhas do lado A (e vice-versa).
- Validação rejeita Postos nos quatro cantos.
- Bardo no Clássico/Treino concedeu +1 AH a Vidente: AH 3 → 4.
- Posto sabotado com Canalização adicionou `bonusAH +1` ao Vidente.
- Bardo + Canalização foram testados juntos: AH final esperado foi aplicado corretamente.
- Mesmo fluxo de Treino continuou permitindo selecionar outra peça e avançar rodada manualmente.
- Bardo da Arena foi testado programaticamente com +1 AH e passou.
- Replay continua gravando `bases` e agora possui renderização visual dos Postos.

## Estado de deploy
**NÃO PUBLICADO.**
Este pacote é apenas para teste local do usuário.
