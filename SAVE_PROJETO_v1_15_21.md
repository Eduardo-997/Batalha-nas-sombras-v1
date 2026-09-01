# SAVE_PROJETO_v1_15_21

## Base
- Derivada da v1.15.20 LOCAL.
- Pacote preparado para Git + Cloudflare.

## Arena Online — dificuldade oficial da IA C
- Apenas o Jogador A pode escolher Fácil / Normal / Difícil / Extrema.
- A dificuldade é guardada no Durable Object como configuração oficial da sala.
- O Jogador B vê a dificuldade sincronizada, mas o seletor fica bloqueado.
- Se A mudar a dificuldade durante a preparação, o `roomState` atualiza B imediatamente.
- Ao iniciar a partida, a IA C usa exclusivamente a dificuldade armazenada na sala.
- O campo `difficulty` enviado por `ready` foi removido; B não consegue influenciar a IA C por mensagem de pronto.
- Depois que a partida começa, a dificuldade fica travada.

## Arena solo
- Continua com seletor normal de dificuldade para as duas IAs.

## Segurança / autoridade
- O servidor valida que apenas o lado A pode enviar `setDifficulty`.
- Uma tentativa de B recebe erro e não altera o valor oficial.
- `roomState` passou a incluir `difficulty`, garantindo sincronização entre navegadores.

## Não alterado
- Regras de combate, IA, informação oculta, Replay, Clássico e Treino.
- `wrangler.jsonc` e núcleos `tri-core` não foram modificados nesta versão.
