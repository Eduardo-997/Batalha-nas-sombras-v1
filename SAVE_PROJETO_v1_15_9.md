# SAVE_PROJETO — v1.15.9 GIT_CLOUDFLARE

## Base
Continua diretamente a **v1.15.8 GIT_CLOUDFLARE**.

## Nome definitivo
O nome visível do jogo passa a ser **Batalha nas Sombras**.

Atualizado em:
- Clássico;
- Clássico Online;
- Arena;
- Treino;
- títulos do navegador.

O identificador técnico do Worker em `wrangler.jsonc` foi mantido para não criar outro serviço/alterar a infraestrutura existente do Cloudflare.

## Revisão final de textos
Foi feita uma revisão de linguagem sem alterar regras ou balanceamento.

Principais ajustes:
- “time” → “equipe” quando aparecia para o jogador;
- “mapa” → “tabuleiro” quando o texto se refere diretamente à área de jogo;
- frases de preparação e status reescritas para soar mais natural;
- pluralização corrigida em mensagens como passos, casas, alvos e presenças;
- removida pontuação duplicada após `Alc. Hab.`;
- regras rápidas reescritas para consulta mais direta;
- textos do Treino e Arena refinados mantendo o significado atual.

## Fichas do Clássico Online
As descrições do Clássico Online estavam desatualizadas em relação ao estado atual do projeto.

A v1.15.9 sincroniza o texto das fichas com o Clássico atual, incluindo personagens e mecânicas mais novas, sem modificar a lógica das habilidades.

Exemplos corrigidos:
- Kamikaze usa Alc. Hab. na explosão;
- Piromante usa Alc. Hab.;
- Mago do Espelho usa o Alc. Hab. atual;
- Necromante usa cadáver dentro do Alc. Hab.;
- Caçador, Paranoia, Zumbi, Druida, Sentinela, Bardo e Fantasma passam a ter descrição correta no Online.

## Tela de fim de partida
Pequenos refinamentos de apresentação:
- cabeçalho `FIM DA BATALHA`;
- motivos de vitória/derrota em linguagem mais natural;
- `Rodadas` → `Rodadas disputadas`;
- `Jogar novamente` → `Nova partida`;
- botão de retorno mais claro quando aplicável.

Não foi alterada a regra de vitória nem o Replay.

## O que NÃO mudou
- balanceamento;
- atributos;
- habilidades;
- IA;
- regras de ativação;
- regras de informação oculta;
- Replay do Clássico/Arena;
- lógica dos Postos;
- Durable Objects;
- bindings/migrations;
- `wrangler.jsonc`.

## Estado
**Pronto para Git + Cloudflare.**
