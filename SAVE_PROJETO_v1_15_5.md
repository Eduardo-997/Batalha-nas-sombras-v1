# SAVE_PROJETO v1.15.5 — ATIVAÇÕES + REGRAS

## Base

Esta versão foi criada diretamente sobre a **v1.15.4 GIT/CLOUDFLARE** aprovada.

É uma versão **LOCAL PARA TESTE**. Não publicar no GitHub/Cloudflare antes da aprovação do usuário.

## Mudanças aprovadas nesta versão

### 1. Limite de vantagem de ativações — Clássico

Nova regra de economia de ações:

- cada unidade continua podendo agir no máximo uma vez por rodada;
- o lado com mais unidades não pode realizar mais do que **1 ativação acima do número de unidades vivas do adversário**;
- o jogador escolhe livremente quais unidades vai ativar;
- exemplos normais com 4 personagens originais:
  - 4 x 4 = 4 x 4;
  - 4 x 3 = 4 x 3;
  - 4 x 2 = 3 x 2;
  - 3 x 2 = 3 x 2;
- a partida normal termina ao chegar a 3 perdas originais, portanto 4 x 1 não é uma situação normal de jogo.

A regra foi aplicada ao:

- Clássico solo/local (`public/referee.js`);
- Clássico online (`src/worker.js`).

O **Treino continua sem limite de ativações**, conforme sua finalidade.

### 2. Invocações e ativações compartilhadas

O limite considera unidades que possuem ativação própria.

- Druida + Galho-Vivo continuam compartilhando a mesma ativação e contam como **uma unidade de ativação** para o limite.
- Invocações com turno próprio contam normalmente como unidades de ativação.
- O contador da rodada registra uma ativação mesmo se a unidade morrer durante a própria ação.

### 3. Arena revisada junto com a mudança

A Arena não foi negligenciada.

Com três jogadores ativos, o exército ativo com **menos unidades de ativação** é usado como referência. Cada outro exército pode ter no máximo **+1 ativação** sobre essa referência.

Exemplo:

- A = 4 unidades;
- B = 4 unidades;
- C = 2 unidades;
- limites da rodada: A = 3, B = 3, C = 2.

Quando restam somente dois jogadores, a regra naturalmente volta a funcionar como no Clássico.

Arquivos da Arena alterados:

- `public/tri-core.js`;
- `public/tri-core-global.js`;
- `src/tri-core.js`.

### 4. Aba Regras reorganizada

Clássico/Clássico Online:

- janela maior;
- conteúdo dividido internamente em:
  - Partida;
  - Combate;
  - Informação;
  - Campo;
- textos mais curtos e organizados;
- exemplo explícito de 4 x 2 = 3 x 2;
- explicações de PER, ALC, Alc. Hab., Postos, terreno e informação oculta.

Arena:

- janela de Regras ampliada;
- conteúdo separado visualmente em:
  - Partida e rodadas;
  - Ação e combate;
  - Informação e campo;
- explicação explícita do limite de ativações com três exércitos.

Arquivos visuais alterados:

- `public/quick-rules.js`;
- `public/triplayer.html`.

## O que NÃO foi feito

- nenhuma limpeza geral da interface nesta versão;
- nenhum redesenho do tabuleiro;
- nenhum balanceamento de personagens;
- nenhuma alteração de dano, Vida, ALC, Alc. Hab. ou PER;
- nenhuma mudança nas regras de Postos, habilidades, Replay ou Treino;
- nenhuma publicação no GitHub/Cloudflare.

A próxima etapa planejada, somente após discussão/aprovação, é revisar a interface geral para deixá-la mais organizada, acessível e menos poluída.

## Testes realizados

- checagem de sintaxe em todos os arquivos `.js` de `public/` e `src/`;
- simulação Clássico com 4 x 2:
  - limite confirmado em 3 x 2;
  - escolha livre de peças preservada;
  - reinício de rodada após 3 + 2 ativações confirmado;
- simulação Arena com 4 / 4 / 2:
  - limites confirmados em 3 / 3 / 2;
  - ordem A → B → C pulando quem esgota o limite confirmada;
  - reinício correto da rodada confirmado;
- teste Druida + Galho-Vivo:
  - 5 peças físicas no lado, mas 4 unidades de ativação;
  - compartilhamento de turno preservado;
- parsing estrutural das páginas HTML principais.

## Fluxo de trabalho mantido

Antes de novas alterações, conversar e confirmar o escopo. Depois da aprovação: alterar localmente, testar, gerar ZIP e novo SAVE. Só publicar quando o usuário pedir explicitamente.
