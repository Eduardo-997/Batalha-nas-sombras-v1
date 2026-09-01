# SAVE DO PROJETO — Batalha nas Sombras v1.15.12 GIT_CLOUDFLARE

## Base
- Continuação direta da v1.15.11 ARENA BUGFIX LOCAL, que por sua vez partiu da v1.15.10 publicada.
- Esta versão incorpora as correções da v1.15.11 e está preparada para substituir os arquivos do repositório e seguir o fluxo Git/Cloudflare existente.
- `wrangler.jsonc` permaneceu byte por byte inalterado.

## Correção — Inspiração +1 Vida do Bardo
O +1 Vida temporário do Bardo agora funciona como Vida temporária de verdade, aumentando simultaneamente Vida atual e máxima enquanto o efeito existe.

Comportamento esperado e testado:
- unidade em `1/2` recebe +1 Vida → `2/3`;
- se não sofrer dano, ao fim da Inspiração → `1/2`;
- se sofrer 1 de dano enquanto está em `2/3`, passa a `1/3`; esse dano consome o ponto temporário;
- quando a Inspiração termina nesse caso, fica `1/2` e não perde outro ponto de Vida.

A correção foi aplicada no núcleo do Clássico local/Treino e no núcleo da Arena. Bônus permanentes de Posto não foram alterados.

## Correção — Replay da Arena
- Corrigida a manipulação da classe do tabuleiro SVG do Replay, usando atributo SVG apropriado em vez de atribuição direta a `className`.
- O quadro final da Arena recebe uma captura de segurança quando `gameOver` é exibido no modo solo.
- Ao tentar abrir Replay sem quadros suficientes, a interface informa o motivo.
- Se ocorrer erro ao abrir ou desenhar um quadro, a interface agora exibe uma mensagem visível em vez de parecer que o botão não funcionou.
- Replay continua disponível apenas depois do fim da partida.
- No online, permanece a arquitetura já aprovada: estado inicial real + ações são mantidos pelo servidor e só são entregues ao cliente após `gameOver`; o navegador reconstrói o Replay completo somente nesse momento.

## Interface — botão Pronto da Arena
- O botão `Pronto` saiu do bloco superior distante do tabuleiro.
- Durante a preparação, existe agora uma barra imediatamente acima do tabuleiro com:
  - Posto 1;
  - Posto 2;
  - status da preparação;
  - botão `✓ Pronto`.
- A barra desaparece quando a partida começa.
- A mudança vale para Arena solo e Arena online, pois ambas usam a mesma tela de preparação.

## 💥 de ataques inimigos
- NÃO foi alterado nesta versão.
- O usuário confirmou que o comportamento observado anteriormente não era bug; as IAs simplesmente haviam atacado pouco naquela partida.
- Continua valendo a regra da v1.15.7: marcadores de ataque são informação temporária por jogador e desaparecem quando esse jogador encerra sua próxima ativação.

## Correções herdadas da v1.15.11
Esta v1.15.12 também contém o pacote de bugfix da Arena testado localmente na v1.15.11, incluindo:
- Escudeiro compartilhando casa com aliado por clique direto;
- Bardo escolhendo aliado sem o clique trocar a peça controlada;
- marcadores visuais não bloqueando clique da casa;
- marcação de movimento compatível com as regras conhecidas;
- Doppelgänger copiando Bardo e Druida corrigidos;
- proteção da IA contra repetição infinita de ação inválida;
- vínculo de invocações disponível apenas na visão do próprio dono/IA, sem vazamento de informação oculta.

## O que NÃO mudou
- Balanceamento dos personagens, exceto a correção de funcionamento do bônus temporário de Vida já existente.
- Matriz de Confronto Direto.
- Regra de informação oculta.
- 💥 da Arena/Clássico.
- `src/worker.js` em relação à v1.15.11.
- `wrangler.jsonc`.
- Não foi criada biblioteca de Replays antigos.

## Testes desta versão
- Sintaxe de todos os JS em `public/` e `src/`: OK.
- Bardo +1 Vida na Arena: `1/2 → 2/3 → 1/2`: OK.
- Bardo +1 Vida na Arena com dano durante o buff: não remove Vida duas vezes: OK.
- Mesmo comportamento no núcleo do Clássico local/Treino: OK.
- Recorder do Replay da Arena: múltiplos quadros relevantes: OK.
- Reconstrução do Replay por estado inicial + sequência de ações: estado final equivalente ao estado real: OK.
- Renderizador da Arena não usa mais atribuição direta `className` no SVG: OK.
- IDs da barra de preparação (`Posto 1`, `Posto 2`, status e `Pronto`) aparecem uma única vez e a barra está antes do tabuleiro: OK.
- `src/worker.js`: byte por byte igual à v1.15.11.
- `wrangler.jsonc`: byte por byte igual à v1.15.11.

## Próxima base
Se não surgir regressão nos testes reais após publicação, esta v1.15.12 passa a ser a base mais recente do projeto.
