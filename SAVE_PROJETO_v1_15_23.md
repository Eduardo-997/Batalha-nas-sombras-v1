# SAVE_PROJETO_v1_15_23

Base: v1.15.22 HOTFIX ARENA.

## Alterações
- Clássico local e Online: quem começa a rodada 1 é sorteado entre os dois lados. A prioridade inicial alterna a cada nova rodada. A IA pode começar.
- Arena solo/online: A/B/C têm prioridade inicial sorteada na rodada 1 e a prioridade gira a cada rodada (ex.: B→C→A, depois C→A→B, depois A→B→C). Exércitos eliminados/sem turno são pulados.
- Arena solo: processamento das IAs ocorre em blocos sucessivos; se A for eliminado, B×C continuam sendo resolvidos sem parar após 100 ações.
- Arena Online: restauradas proteções de cliente fora do turno e validação de `view.side`; servidor continua autoridade final.
- Clássico/Online/Treino: tabuleiro 8×8 agora se adapta à largura de celulares sem depender de rolagem horizontal.
- Cache-bust unificado em v1.15.23 para JS/CSS ativos de Clássico, Online, Arena e Treino.
- Textos revisados: preferência por “turno”; popup antigo do Piromante corrigido para Alc. Hab.; ordem da Arena atualizada nas Regras.
- package.json atualizado para 1.15.23; nome técnico do Worker/wrangler preservado.

## Não incluído
- Reconexão automática Online continua pendente e não foi implementada nesta versão.
