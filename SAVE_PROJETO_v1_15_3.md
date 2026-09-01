# SAVE DO PROJETO — v1.15.3 · MARCAÇÕES DE ALCANCE + ALC. HAB. + ÍCONE DO CAÇADOR

Data: 31/08/2026
Base imediata: **v1.15.2 TREINO + POSTOS + AH LOCAL**, evolução correta da **v1.14.1 HOTFIX ALC**.

## Regra de continuidade
- Continuar sempre da versão mais recente aprovada; nunca reconstruir o jogo do zero.
- Antes de qualquer nova alteração, conversar com o usuário e confirmar o que será mudado, como funcionará e o que ficará intocado.
- Esta build é **LOCAL PARA TESTE**. Não enviar ao GitHub/Cloudflare sem pedido explícito do usuário.
- SAVEs antigos servem apenas como histórico e não sobrescrevem decisões mais recentes.

## Alterações aprovadas nesta revisão

### 1. “AH” não aparece mais como abreviação para o jogador
O atributo continua internamente chamado `ah`, mas a interface agora usa:
- **Alc. Hab.** como abreviação curta;
- **Alcance de Habilidade** quando é necessário explicar o significado.

Foram atualizados cards, fichas, textos de habilidades, bônus do Bardo, Canalização dos Postos, mensagens de alcance e regras visíveis da Arena.

### 2. Novo ícone do Caçador
O Caçador deixou de usar o mesmo símbolo da armadilha.
- Caçador: **🐾**
- Armadilha de dano: **🪤**

A mudança foi aplicada às definições do Clássico/Treino e Arena.

### 3. Marcação visual agora usa o alcance FINAL da peça
Corrigido um erro em que a ficha/Árbitro reconhecia o bônus de alcance, mas a pintura do tabuleiro recalculava a partir do valor base e ignorava efeitos temporários.

Agora:
- ataque usa o **ALC final mostrado na ficha**;
- habilidade usa o **Alc. Hab. final mostrado na ficha**;
- bônus temporário do Bardo é refletido imediatamente na marcação;
- bônus permanente de Posto sabotado também é refletido imediatamente;
- a regra/validação do Árbitro continua sendo a autoridade para resolver a ação.

A correção foi aplicada ao núcleo de marcação do Clássico/Treino e Arena.

### 4. Clicar em Habilidade mostra a área completa de Alc. Hab.
Ao entrar no modo de habilidade, o tabuleiro passa a mostrar o alcance completo da habilidade, e não somente casas que já possuem um alvo contextual válido.

Exemplos:
- Necromante mostra o Alc. Hab. inteiro, mesmo que só cadáveres sejam alvos válidos;
- Druida mostra o Alc. Hab. inteiro, mesmo que apenas árvores vivas possam ser despertadas;
- Mago do Espelho, Sentinela, Caçador e Bardo mostram a área completa;
- Vidente mostra a área permitida para escolher a casa principal;
- Piromante continua usando a marcação de Alc. Hab. no modo do ataque especial.

Casas dentro do alcance visual não se tornam automaticamente alvos válidos. O Árbitro continua rejeitando árvores, cadáveres, aliados, Postos ou casas inválidas conforme a habilidade específica.

### 5. Necromante/Druida podem abrir a prévia mesmo sem alvo válido no momento
Antes, se não houvesse cadáver/árvore válida, o botão de habilidade encerrava antes de entrar no modo e nenhuma área aparecia.

Agora o modo pode ser aberto apenas para visualizar o Alc. Hab.; a mensagem informa quando não existe alvo válido naquele momento. Isso não permite executar a habilidade em uma casa inválida.

## O que NÃO foi alterado
- valores de ALC ou Alc. Hab. de nenhum personagem;
- balanceamento;
- regras de ataque/habilidades;
- duração ou potência dos bônus do Bardo;
- regras de Canalização/Postos;
- IA;
- vitória;
- Replay;
- mapa;
- protocolo/segurança do multiplayer;
- `src/worker.js` do Clássico online;
- GitHub/Cloudflare.

### Observação sobre Clássico online
O Worker online continua sendo a implementação anterior já registrada no SAVE v1.15.2 e **não foi alterado** nesta revisão. A interface compartilhada recebe apenas correções seguras de apresentação; nenhuma regra autoritativa do servidor foi modernizada automaticamente.

## Validações realizadas
- `node --check` passou em todos os JS de `public/` e `src/`.
- Bardo +1 ALC em Ninja: ALC 2 → 3 e a marcação passou a incluir casas a distância 3.
- Bardo +1 Alc. Hab. em Piromante: Alc. Hab. 1 → 2 e a marcação passou a incluir casas a distância 2.
- Canalização de Posto em Caçador: Alc. Hab. 1 → 2 e a marcação passou a acompanhar o novo valor.
- Necromante sem cadáver pôde abrir o modo de habilidade e visualizar seu Alc. Hab., sem ganhar alvo inválido.
- Druida sem árvore válida no alcance pôde abrir a prévia do Alc. Hab., sem ganhar alvo inválido.
- Helpers da Arena foram testados com ALC e Alc. Hab. efetivos maiores que o valor-base e retornaram áreas maiores corretamente.
- Ícone do Caçador confirmado como 🐾; armadilhas continuam 🪤.
- Busca nos arquivos públicos principais confirmou que a abreviação antiga `AH` não permanece nos textos de interface atualizados.

## Estado de deploy
**NÃO PUBLICADO.**
Este pacote é apenas para teste local do usuário.
