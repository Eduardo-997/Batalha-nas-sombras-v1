# SAVE_PROJETO v1.15.6 — LAPIDAÇÃO GERAL DE INTERFACE

## Base

Esta versão foi criada diretamente sobre a **v1.15.5 LOCAL — ATIVAÇÕES + REGRAS**.

É uma versão **LOCAL PARA TESTE**. Não publicar no GitHub/Cloudflare antes da aprovação do usuário.

## Objetivo desta versão

Revisar a interface como um todo sem redesenhar o jogo e sem mexer em regras/mecânicas.

Prioridades:

- reduzir poluição visual;
- melhorar hierarquia das informações;
- deixar botões, fichas, cards, painéis e estados mais consistentes;
- aproximar ainda mais Clássico, Clássico Online, Arena e Treino da mesma identidade visual;
- melhorar leitura em telas menores e navegação por teclado.

## Mudanças visuais

### 1. Cabeçalho e navegação

- cabeçalho passou a ter uma superfície visual própria;
- título/subtítulo ganharam hierarquia mais clara;
- botões de modo, Regras, áudio, IA, Pronto e Reiniciar ficaram mais consistentes;
- redução do tamanho/peso dos controles de topo para diminuir poluição;
- Arena deixou de exibir o texto antigo `v1.14 experimental` no título;
- subtítulos dos modos foram simplificados.

### 2. Status da partida

- Rodada, equipe, perdas, turno e fase agora formam uma grade consistente;
- valores ficaram visualmente separados dos rótulos;
- fase atual ganhou destaque próprio;
- layout adapta automaticamente a quantidade de colunas conforme a largura da tela.

### 3. Seleção de personagens e preparação

- seleção passou a ter um bloco visual melhor definido;
- filtros de arquétipo ganharam separação mais clara;
- cards têm hover/foco mais evidente e seleção mais legível;
- ficha rápida ganhou melhor separação interna;
- instrução dos Postos no Clássico foi encurtada sem remover informação necessária;
- preparação da Arena foi organizada em blocos: modalidade, configuração e conclusão;
- no Treino, as listas de personagens de A/B ganharam rolagem interna em telas desktop para evitar uma página excessivamente comprida.

### 4. Tabuleiro e barra de ações

- moldura do tabuleiro foi suavemente refinada sem alterar tamanho/regra das casas;
- barra de ações passou a ser um bloco visual único;
- Mover, Atacar, Habilidade, Encerrar, Cancelar e Avançar rodada ficaram mais fáceis de localizar;
- em telas menores a barra de ações pode permanecer acessível na parte inferior durante a rolagem.

### 5. Ficha e painéis laterais

- ficha da unidade ganhou prioridade visual sobre histórico/intel;
- títulos internos ficaram mais consistentes;
- histórico, informações táticas e disponíveis foram compactados levemente;
- feedback principal da ação ficou mais destacado.

### 6. Arena

A Arena foi revisada junto com os demais modos, conforme a regra de nunca negligenciá-la.

- título atualizado para `Jogo Tático Oculto — Arena`;
- setup e seleção usam a mesma hierarquia visual dos demais modos;
- cards de 1 jogador / 2 jogadores ficaram mais claros;
- painel lateral e modal de Regras receberam acabamento compatível;
- nenhuma regra, mapa ou lógica da Arena foi alterada.

### 7. Clássico Online

- área de entrada em sala ganhou maior destaque como primeiro passo;
- campo de código, botão Entrar e status de conexão ficaram agrupados de forma mais clara;
- após entrar, a interface continua usando os mesmos componentes visuais do Clássico.

### 8. Treino

- seleção dos lados A/B ficou mais compacta e organizada;
- as duas equipes continuam visíveis simultaneamente em desktop;
- bloco `Preparação livre` e seus três lembretes ganharam melhor leitura;
- ficha, histórico e informações táticas seguem a mesma linguagem do Clássico.

## Acessibilidade

Novo arquivo `public/ui-accessibility.js` adiciona somente melhorias de interface:

- `aria-label` em controles de som/replay/reinício quando necessário;
- status importantes usam `aria-live="polite"`;
- cards de modalidade da Arena (`1 jogador + 2 IA` / `2 jogadores + 1 IA`) podem ser ativados com Enter/Espaço;
- foco de teclado ficou visível em botões, links, inputs e selects;
- alvos de toque aumentam em dispositivos de toque;
- `prefers-reduced-motion` continua respeitado.

## Arquivos novos

- `public/ui-v1156.css` — camada final compartilhada de lapidação visual;
- `public/ui-accessibility.js` — melhorias de acessibilidade sem lógica de jogo.

## Arquivos HTML alterados apenas para organização visual

- `public/index.html`;
- `public/multiplayer.html`;
- `public/triplayer.html`;
- `public/training.html`.

IDs usados pelos scripts foram preservados.

## O que NÃO foi alterado

- balanceamento;
- personagens;
- Vida / Movimento / ATQ / ALC / PER / Alc. Hab.;
- limite de ativações da v1.15.5;
- regras de vitória;
- habilidades;
- Postos;
- IA;
- Replay;
- mapa Clássico;
- mapa Arena;
- Árbitro local;
- Worker/Árbitro online;
- segurança ou filtragem de informação oculta.

Todos os arquivos JS que já existiam na v1.15.5 permanecem byte por byte iguais nesta versão. O único JS novo é o arquivo de acessibilidade citado acima.

## Próximo passo

O usuário deve testar visualmente a v1.15.6 LOCAL, principalmente:

- seleção de equipe no Clássico;
- partida em andamento e ficha lateral;
- Arena durante preparação e partida;
- Treino com os dois lados;
- Clássico Online após entrar em uma sala;
- uso em janela menor/celular se possível.

Depois do feedback, corrigir somente os pontos necessários. Publicação Git/Cloudflare apenas mediante pedido explícito.
