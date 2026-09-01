# SAVE_PROJETO v1.15.8 — REPLAY DA ARENA

## Base

Criada diretamente sobre a **v1.15.7 GIT + CLOUDFLARE**.

Esta versão foi preparada diretamente para **Git + Cloudflare** por aprovação explícita do usuário.

## Escopo aprovado

Adicionar Replay ao modo Arena com a mesma filosofia do Replay do Clássico:

- Replay existe **somente depois que a partida termina**;
- durante a Arena ninguém pode usar o Replay para enxergar informação oculta;
- depois do fim, o Replay mostra o estado real completo e permite entender tudo que aconteceu;
- os três exércitos A/B/C ficam visíveis;
- não criar biblioteca de partidas antigas nesta etapa.

## 1. Replay da Arena — Solo

No modo **1 jogador + 2 IA**, a Arena agora grava quadros relevantes do estado real durante a partida.

São registrados, entre outros:

- posições reais das peças A/B/C;
- movimento;
- dano e mortes;
- Confronto Direto;
- Postos e sabotagens;
- árvores;
- cadáveres;
- espelhos;
- armadilhas;
- invocações;
- transformações;
- bônus/efeitos que alterem o estado;
- troca de turno/rodada;
- resultado final.

O gravador ignora estados visualmente idênticos para não criar quadros inúteis apenas por selecionar um botão ou entrar em um modo de ação.

## 2. Replay da Arena — Online

O online mantém o Árbitro autoritativo no servidor.

### Regra de segurança

**Nenhum estado completo do Replay é enviado aos jogadores enquanto `gameOver` for falso.**

Durante a partida, os clientes continuam recebendo apenas suas `View`s filtradas normais.

O servidor guarda:

1. o estado real inicial da Arena depois das três formações estarem instaladas;
2. a sequência das ações válidas realizadas por A, B e pela IA C.

Quando a partida termina, e somente então, o servidor envia esse material aos jogadores humanos. O navegador reconstrói a sequência usando o mesmo `TriReferee`/`applyTriAction` da Arena e monta os quadros completos do Replay.

Isso evita expor snapshots secretos durante a partida e também é mais compacto que armazenar uma cópia completa do mapa a cada ação.

O material necessário ao Replay online é persistido junto ao estado da sala do Durable Object, para não depender apenas da memória temporária da instância.

## 3. Visual do Replay da Arena

`public/replay.js` foi ampliado para suportar dois layouts:

- Clássico 8x8;
- Arena triangular de 96 casas.

Na Arena, o Replay mostra:

- 🔵 Jogador A;
- 🔴 Jogador B;
- 🟢 Jogador C;
- 🏰/🏚️ Postos;
- 🌳/🪵 árvores;
- ☠ cadáveres;
- 🪞 espelhos;
- 🪤/🦉 armadilhas;
- todas as peças reais, inclusive as que estavam ocultas durante a partida.

Há controles de:

- quadro anterior;
- próximo quadro;
- reproduzir/pausar;
- linha do tempo;
- contador de quadros;
- rodada e jogador ativo;
- acontecimentos registrados no estado daquele momento.

## 4. Liberação somente no fim

Na tela final da Arena aparece **🎞️ Ver Replay** quando o Replay está pronto.

### Solo

Os quadros já estão no navegador, mas o botão só é oferecido quando `view.gameOver === true`.

### Online

A tela de fim pode aparecer primeiro sem o botão por alguns milissegundos. Assim que a mensagem de Replay pós-`gameOver` chega e é reconstruída, a tela final é atualizada e passa a oferecer **Ver Replay**.

Um jogador que reconectar à sala depois que a partida já terminou também recebe o Replay, porque o servidor continua condicionando a entrega ao estado `gameOver` da partida persistida.

## 5. O que NÃO foi alterado

- regras de combate;
- balanceamento;
- IA;
- limite de ativações;
- lógica do 💥;
- condições de vitória;
- mapa da Arena;
- `wrangler.jsonc`;
- bindings/migrations de Durable Objects;
- sistema de informação oculta durante a partida.

Também **não** foi criada uma biblioteca para salvar/reabrir partidas antigas. O Replay é da partida encerrada naquela sala/sessão.

## Arquivos principais alterados

- `public/replay.js` — suporte visual e gravação para Arena;
- `public/triplayer.html` — carrega o módulo de Replay;
- `public/tri-ui-global.js` — grava Replay solo, reconstrói Replay online e conecta à tela final;
- `public/tri-ui.js` — fonte equivalente mantida sincronizada;
- `src/worker.js` — registra estado inicial + ações da Arena online e entrega somente após `gameOver`;
- `package.json` — versão 1.15.8;
- `LEIA-ME_DEPLOY.txt`;
- `TESTES_v1_15_8.txt`;
- este SAVE.

## Segurança / informação oculta

A alteração mais importante desta versão é a separação clara entre partida e recapitulação:

- durante a partida: somente View filtrada;
- depois de `gameOver`: Replay completo.

Não existe mensagem implementada para um cliente pedir antecipadamente o Replay. A mensagem `arenaReplay` é enviada pelo próprio servidor apenas dentro do caminho protegido por `view.gameOver`.

## Próximo passo

Publicar a v1.15.8 e testar uma Arena completa, principalmente:

1. jogar contra as duas IAs;
2. terminar a partida;
3. abrir o Replay e percorrer do início ao fim;
4. testar também uma sala online A+B+IA C;
5. confirmar que nenhuma informação de Replay aparece antes do encerramento.
