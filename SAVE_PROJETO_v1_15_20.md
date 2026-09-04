# SAVE_PROJETO v1.15.20 — IA EXTREMA

Base: v1.15.19 GIT_CLOUDFLARE.
Status: LOCAL PARA TESTE. Não publicar até aprovação explícita.

## Mudanças

### Nova dificuldade: Extrema
- Adicionada ao Clássico contra IA e à Arena.
- Na Arena Online, a dificuldade escolhida pelo Jogador A também pode ser Extrema para a IA C.
- A Extrema NÃO recebe estado real oculto nem posições escondidas. Usa exatamente a mesma View filtrada entregue às outras dificuldades.
- Memória mais persistente, menor perda de certeza e quase nenhum ruído aleatório nas decisões.
- Prioriza melhor eliminações/posses confirmadas, bônus de Postos e objetivos relevantes.

### IA do Clássico atualizada para o elenco atual
A IA agora possui tratamento explícito para os personagens adicionados depois da IA original:
- Caçador: posicionamento e reposicionamento da armadilha de dano.
- Sentinela: armadilhas de revelação.
- Druida: escolha de árvore para Galho-Vivo e não tenta criar outro enquanto já possui invocação.
- Bardo: escolhe aliado e entre ATQ / ALC / Alc. Hab. / M / Vida de acordo com a situação.
- Fantasma: reconhece ataque/possessão mesmo com ATQ 0 e prioriza alvos confirmados.
- Paranoia: comportamento mais voltado a rastrear regiões de presença e usar PER.
- Zumbi: recebe prioridade/tática compatível com sua segunda vida.
- Doppelgänger reconhece também habilidades ativas novas copiadas.

Também foi melhorada a escolha de Canalização (+1 Alc. Hab.) nos Postos.

### IA da Arena
- Mantidos os mesmos princípios de informação filtrada.
- Bardo escolhe bônus/alvo de maneira contextual.
- Caçador/Sentinela avaliam zonas quentes para armadilhas.
- Druida avalia árvores por pressão/posição.
- Fantasma reconhece posse como ataque válido.
- Paranoia tende a perseguir regiões com informação legal de presença.
- Extrema considera também perdas dos dois adversários para priorizar alvos/objetivos quando essa informação é pública.
- Extrema prioriza ataque confirmado antes de sabotar um Posto quando há oportunidade forte.

### Preparação
- Extrema usa preparação consistente como a Difícil: Postos protegidos na retaguarda e composição equilibrada.
- No Clássico, chance maior de incluir personagem especial na composição da IA.
- Na Arena, o quarto personagem da Extrema favorece opções de alto impacto entre os disponíveis.

## Arquivos alterados
- public/ai-worker.js
- public/ai.js
- public/index.html
- public/referee.js
- public/ui.js
- public/triplayer.html
- public/tri-core.js
- public/tri-core-global.js
- src/tri-core.js
- src/worker.js
- package.json

## Segurança / informação oculta
Nenhuma IA recebeu acesso a exportState, estado real do Árbitro ou peças ocultas. A IA continua tomando decisões exclusivamente pela View filtrada de seu lado.

## Não alterado
- Regras dos personagens.
- Balanceamento das fichas.
- Matriz de Confronto Direto.
- PER/ALC/Alc. Hab. como regras de jogo.
- Cerco Final.
- Replay.
- wrangler.jsonc.
