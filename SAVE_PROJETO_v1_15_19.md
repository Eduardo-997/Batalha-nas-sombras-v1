# SAVE_PROJETO_v1_15_19

## Base
v1.15.18 LOCAL, incorporando também o Online robusto da v1.15.17.

## Mudanças
- Marcador ⚔️ de Confronto Direto ampliado em todos os tabuleiros.
- Árvores da Arena aumentadas de 24 para 28 para melhorar leitura.
- Efeitos sonoros recebem ganho leve de +18%, preservando o controle de volume do jogador.
- Nova regra **Cerco Final**:
  - Clássico / Clássico Online / Treino: quando os 4 Postos estiverem sabotados, a borda externa (linha 1, linha 8, coluna A e coluna H) revela permanentemente unidades para os dois lados.
  - Arena: quando todos os Postos ainda ativos estiverem sabotados, o contorno externo real do mapa triangular (células com menos de 4 vizinhos normais) revela permanentemente unidades para A/B/C. Postos de exércitos eliminados ficam desativados e não impedem o Cerco Final.
  - A revelação mostra somente unidades. Armadilhas, Espelhos e demais informações ocultas continuam seguindo suas regras.
- Regras ampliadas para explicar M (Movimento), ATQ, ALC e Alc. Hab., além do Cerco Final.
- Mudanças aplicadas/revisadas em Clássico, Online, Arena e Treino quando cabível.

## Publicação
Pacote preparado para Git + Cloudflare.
