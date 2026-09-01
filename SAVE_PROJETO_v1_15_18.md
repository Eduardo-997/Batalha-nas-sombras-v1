# SAVE_PROJETO — Batalha nas Sombras v1.15.18 LOCAL

Base: v1.15.17 GIT_CLOUDFLARE.

## Alterações desta versão

### Armadilhas em casas ocupadas
- Caçador (armadilha de dano) e Sentinela (armadilha de revelação) agora podem preparar armadilha em uma casa que já contenha uma peça viva, aliada ou inimiga.
- A armadilha NÃO dispara no momento em que é colocada sob uma peça.
- Ela só é ativada quando um inimigo entra naquela casa posteriormente.
- Cadáver continua não bloqueando armadilha.
- Árvores e Postos continuam bloqueando a colocação.
- Aplicado ao Clássico local/Treino, Clássico Online e Arena.
- Textos visíveis de Caçador/Sentinela foram atualizados para explicar o comportamento.

### Auditoria do Treino
O Treino foi comparado com o estado atual do Clássico.

Conclusão funcional:
- O Treino já usava o mesmo `rules.js` e `referee.js` do Clássico, portanto as regras atuais, 20 personagens, Alc. Hab., Bardo, Postos, invocações, transformações, Confronto, Fantasma, Paranoia, Zumbi etc. estavam atualizados.
- O atraso estava na apresentação visual de alguns sistemas adicionados depois.

Feedbacks sincronizados no Treino:
- marcador 💥 de ataque;
- marcador ⚔️ de Confronto Direto já existente foi mantido/revisado;
- área ativa do Vidente 👁️;
- marcações de PER (❗ / ◇ / 📍);
- indicação 📍 de revelação ativa causada pela Sentinela;
- ficha de inspeção agora mostra melhor tipo da unidade (invocação/forma/possessão) e bônus permanentes relevantes;
- ficha de Caçador/Sentinela explica a nova regra de armadilha em casa ocupada.

## Testes realizados
- Sintaxe de todos os JS de `public/` e `src/`: OK.
- `wrangler.jsonc`: inalterado em relação à v1.15.17.
- `public/rules.js`: inalterado em relação à v1.15.17.
- Treino carrega 20 personagens atuais.
- Cliente do Treino expõe todas as ações atuais do Árbitro.
- Caçador armando sob aliado: OK.
- Caçador armando sob inimigo: OK e não dispara imediatamente.
- Sentinela armando sob aliado: OK.
- Armadilha do Caçador armada sob aliado é consumida/dá dano quando inimigo entra depois: OK.
- Arena: Caçador e Sentinela armando em casa ocupada: OK.

## Publicação
Esta versão é LOCAL PARA TESTE. Não publicar no Git/Cloudflare até aprovação explícita do usuário.
