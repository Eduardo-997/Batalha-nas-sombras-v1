# SAVE DO PROJETO — v1.14.1 · HOTFIX ALC

Base recebida do usuário em 31/08/2026: `jogo_v1_14_1_HOTFIX_ALC_CLOUDFLARE(1).zip`.

## Regra de continuidade
Esta é a base correta posterior à v1.14 experimental. Não voltar para a v1.14 anterior ao fazer novas alterações.

## Hotfix preservado
O hotfix padroniza `ALC = 1` (`range: 1`) para personagens que antes apareciam com `range: 0`, mesmo quando não possuem ataque normal:
- Kamikaze
- Escudeiro
- Golem
- Vidente
- Mago do Espelho
- Coringa

O ajuste está refletido nas definições usadas pelo Clássico, Arena e Worker do servidor.

Nenhuma outra regra deve ser inferida ou reescrita a partir deste resumo; usar os arquivos desta versão como fonte de verdade.
