# SAVE DO PROJETO — v1.15.1 · TREINO + REPLAY LOCAL

Data: 31/08/2026
Base correta: **v1.14.1 HOTFIX ALC** enviada pelo usuário.

## Regra de continuidade
- Esta revisão foi refeita sobre a v1.14.1 HOTFIX ALC, e NÃO sobre a v1.14 anterior.
- O hotfix de ALC foi preservado.
- Não reconstruir mecânicas já aprovadas.
- Antes de qualquer nova alteração, conversar com o usuário e confirmar exatamente o que será mudado.
- Esta build é para **teste local**. Não substituir GitHub/Cloudflare até aprovação explícita do usuário.

## Nomenclatura dos modos
- **Clássico**: duelo 1x1 (solo contra IA ou Clássico online).
- **Arena**: modo de três exércitos.
- **Treino**: laboratório para testar peças e interações.

Os nomes antigos `X1` e `1x1x1` foram removidos da interface visível desta revisão. Rotas/identificadores técnicos internos não foram renomeados quando isso poderia afetar compatibilidade.

## Modo Treino
Novo `public/training.html` + `public/training-ui.js`.

### Montagem
- 4 peças no Lado A + 4 peças no Lado B = 8 peças.
- O usuário controla os dois lados.
- Cada lado escolhe personagens separadamente.
- Filtros por arquétipo em ambos os lados.
- As peças auto-posicionam inicialmente e podem ser reposicionadas livremente em qualquer casa vazia antes do início.
- Árvores em C3/F6 continuam sendo terreno real e não podem ser usadas como posição inicial.

### Durante o Treino
- Usa o mesmo `GameReferee` e as mesmas regras dos personagens do Clássico.
- Não existe alternância obrigatória entre A/B.
- Uma peça NÃO fica bloqueada depois de agir: pode ser utilizada novamente na mesma rodada manual.
- Não existe condição normal de vitória no Treino.
- Pode trocar de lado depois de terminar a ação em andamento.
- Confronto Direto, dano, transformação, invocações, armadilhas, Espelho, Vidente, Piromante, Bardo, Doppelgänger, Druida etc. continuam resolvidos pelo Árbitro real.
- Escudeiro/compartilhamento de casa é permitido conforme a regra real.
- Existe botão **Avançar rodada** para testar Zumbi e efeitos que dependem da passagem de rodada.
- Nesta primeira revisão do Treino não há Postos de Operação. Se for desejado testar Postos dentro do Treino, discutir antes de implementar.

### Visual do Treino — revisão 1.15.1
A primeira tentativa de Treino parecia um protótipo antigo. Foi descartada como referência visual.

Nesta revisão o Treino reaproveita a linguagem visual atual do Clássico:
- mesmo tema medieval-fantasia;
- mesmo tabuleiro e moldura;
- tokens circulares com borda por arquétipo;
- indicador de Vida;
- árvores com o mesmo tratamento visual;
- ficha lateral com V/M/ATQ/ALC/PER/AH;
- painéis laterais de ação, histórico e informações táticas;
- filtros de elenco;
- popups contextuais sobre o tabuleiro;
- layout responsivo herdado do jogo principal.

## Replay
Novo `public/replay.js`.

### Clássico local contra IA
- A partida é gravada em memória durante a sessão.
- O botão Replay só fica disponível **depois do fim da partida**, evitando usar o recurso para revelar o mapa enquanto o jogo ainda está em andamento.
- Replay contém o estado completo gravado e permite navegar pelos quadros, reproduzir automaticamente e usar a linha do tempo.

### Treino
- Replay fica disponível durante o próprio Treino.
- Isso é intencional, pois o Treino não possui informação secreta entre os lados para o usuário.

### Ainda NÃO implementado
- Replay do Clássico online.
- Replay da Arena.

Motivo: esses modos usam Árbitro/estado oculto no servidor. A forma correta de liberar o estado completo apenas após o encerramento deve ser discutida antes de alterar segurança/servidor.

## Pequena correção feita durante a reaplicação
Foi corrigido um problema da primeira tentativa de Replay no Clássico que podia impedir a atualização normal do texto de status, como `Vez da IA`. O Replay agora não interfere nesse fluxo.

## HOTFIX ALC — confirmado nesta build
Continuam com `range: 1`:
- Kamikaze
- Escudeiro
- Golem
- Vidente
- Mago do Espelho
- Coringa

A confirmação foi feita em `public/rules.js`, módulos da Arena e Worker do servidor.

## Validações realizadas
- `node --check` passou nos JS de `public/` e `src/`.
- Teste programático confirmou o HOTFIX ALC.
- Treino inicia com 4+4.
- Mesma peça pode agir novamente na mesma rodada manual.
- Lado A e Lado B podem ser controlados livremente.
- Avanço manual de rodada funciona.
- Confronto Direto funciona e não encerra o Treino por condição de vitória.
- Clássico solo continua iniciando normalmente.
- Gravador do Replay registra mudanças e ignora frames idênticos consecutivos.
- IDs/controles necessários do novo HTML de Treino foram conferidos.

## Estado de deploy
NENHUMA alteração foi enviada ao GitHub/Cloudflare nesta etapa.
Usar este pacote apenas para teste local até aprovação do usuário.
