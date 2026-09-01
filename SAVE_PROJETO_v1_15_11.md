# SAVE DO PROJETO — Batalha nas Sombras v1.15.11 LOCAL

## Base
- Continuação direta da v1.15.10 GIT_CLOUDFLARE.
- Esta versão é **LOCAL PARA TESTE**.
- Não publicar no Git/Cloudflare até aprovação explícita do usuário.

## Objetivo desta versão
Correção focada em bugs funcionais do modo **Arena**, sem alterar balanceamento, matriz de Confronto Direto ou regras do Clássico.

## Correções — clique e interação no tabuleiro da Arena
- Quando existe uma ação ativa (Mover, Atacar ou Habilidade), clicar diretamente no emoji de uma peça agora usa **a casa daquela peça como alvo da ação** antes de tentar selecioná-la.
- Corrige especificamente:
  - Escudeiro entrando na mesma casa de 1 aliado;
  - Bardo escolhendo um aliado para Inspiração;
  - ataques/Confronto Direto em inimigos visíveis;
  - habilidades que precisam clicar numa casa ocupada/visível.
- Postos também deixam a ação ativa receber o clique da casa antes de abrir o painel do Posto; isso permite, por exemplo, o Vidente selecionar uma casa onde há um Posto.
- Marcadores decorativos do SVG (`☠️`, `💥`, armadilhas, Espelho, PER e árvores) receberam `pointer-events:none`, portanto não bloqueiam mais o clique da casa abaixo.

## Correções — marcação de movimento
- A Arena agora destaca apenas casas de movimento compatíveis com as regras conhecidas pelo jogador:
  - Postos não são marcados como destino;
  - árvore morta não é destino do Druida;
  - árvore viva continua válida para Druida;
  - casa com aliado só é marcada quando existe Escudeiro envolvido e há espaço para compartilhar;
  - casas desconhecidas continuam sendo tratadas normalmente, preservando informação oculta.

## Correções — Doppelgänger
### Copiando Bardo
- Inspiração concedida pelo Doppelgänger agora expira corretamente no fim do próximo turno da própria peça fonte.
- Se a fonte morrer enquanto mantém uma Inspiração, o bônus é removido corretamente.

### Copiando Druida
- Galho-Vivo criado pelo Doppelgänger fica corretamente vinculado à peça que o despertou.
- Doppelgänger + Galho-Vivo contam como **uma única unidade de ativação**.
- Quando um deles é ativado, o outro é marcado como usado na mesma rodada.
- Se a unidade que despertou o Galho-Vivo morrer, o Galho volta a ser árvore viva, como ocorre com o Druida.

## Correções — IA da Arena
- A visão própria agora inclui, somente para o dono, `summonerId` e `druidId` de invocações. Isso permite à IA saber qual Necromante/Druida/Doppel controla cada invocação sem vazar esse vínculo aos adversários.
- Necromante IA não escolhe cadáver ocupado por aliado ou árvore.
- IA evita casas visivelmente inválidas para Espelho, armadilhas e despertar de árvore.
- IA passou a respeitar compartilhamento de casa do Escudeiro em sua lógica de movimento.
- Arena solo e Arena online receberam proteção contra repetição infinita de uma mesma ação inválida. Após uma nova tentativa, se a mesma ação continuar falhando, a IA encerra a ativação e a partida continua.
- Isso é especialmente importante em alvos ocupados por inimigos ocultos: a IA não recebe a posição secreta apenas para evitar a falha.

## O que NÃO mudou
- Clássico local: regras e arquivos de jogo não alterados.
- Regras do Clássico Online: não alteradas.
- Balanceamento dos personagens: não alterado.
- Arquétipos / Confronto Direto: não alterados.
- Regra de informação oculta: preservada.
- Replay: lógica mantida; reconstrução validada após as correções.
- `wrangler.jsonc`: byte por byte igual à v1.15.10.

## Testes executados
- Sintaxe de todos os JS em `public/` e `src/`: OK.
- Escudeiro compartilhando casa com aliado: OK.
- Doppel copiando Bardo — aplicação e expiração do bônus: OK.
- Doppel copiando Druida — criação do Galho e contagem compartilhada de ativação: OK.
- IA Necromante ignorando cadáver ocupado pelo próprio aliado: OK.
- Simulação automatizada de 20 Arenas com três IAs e proteção de falhas: 20 concluídas, 0 travamentos, 0 exceções.
- Matriz de Confronto Direto: preservada.
- Reconstrução de estado no estilo Replay (estado inicial + ações): estado final idêntico.
- `wrangler.jsonc`: inalterado.

## Próxima base
Se os testes locais do usuário forem aprovados, promover esta v1.15.11 para pacote Git/Cloudflare sem refazer as correções.
