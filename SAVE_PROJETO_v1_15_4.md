# SAVE_PROJETO — v1.15.4

## Base
Esta versão foi criada diretamente sobre a **v1.15.3 MARCAÇÕES + ALC. HAB. LOCAL**, que por sua vez descende da base correta **v1.14.1 HOTFIX ALC**.

A v1.15.4 é a primeira versão após esses ajustes preparada para o usuário enviar ao Git e publicar pelo Cloudflare.

## Alterações aprovadas nesta versão

### Galho-Vivo
- Vida base alterada de **2 para 1**.
- Arquétipo alterado de **Pedra (🪨)** para o mesmo arquétipo especial do Esqueleto do Necromante: **🦴 / tipo C**.
- No Confronto Direto, portanto, o Galho-Vivo segue a mesma regra do Esqueleto: perde contra os arquétipos normais/especiais conforme a lógica já existente para tipo C.
- A alteração foi aplicada às regras usadas por Clássico/Treino e ao núcleo da Arena, não apenas à interface.

### Árvores da Arena
- Emoji visual das árvores da Arena aumentado levemente de **20 para 24** no SVG.
- Nenhuma coordenada, quantidade, estado ou regra de terreno foi alterada.

## Sistemas que NÃO foram alterados
- Balanceamento dos demais personagens.
- Regras do Druida além da vida/arquétipo do Galho-Vivo invocado.
- IA.
- Informação oculta.
- Regras dos Postos.
- Treino e Replay, fora do efeito indireto de exibirem a nova ficha real do Galho-Vivo.
- Segurança/protocolo do multiplayer.
- Configuração estrutural do Worker/Durable Objects.

## Testes executados
- Checagem de sintaxe dos 19 arquivos JavaScript em `public/` e `src/`.
- Teste de `GameRules.defOf()` confirmou Galho-Vivo com Vida 1, tipo C e ícone de arquétipo 🦴.
- Teste de Confronto Direto confirmou comportamento equivalente ao Esqueleto contra Tesoura, Pedra, Papel e Coringa.
- Smoke test do Treino: Druida despertou árvore em C3; Galho-Vivo surgiu corretamente com **1/1 de vida** e arquétipo **🦴**.
- Conferência das árvores da Arena: mesmas posições iniciais; apenas `font-size` alterado de 20 para 24.

## Publicação
- `package.json` atualizado para versão **1.15.4**.
- Pacote preparado para Git/Cloudflare.
- O nome do projeto em `wrangler.jsonc` foi **preservado** para não criar/trocar projeto Cloudflare sem decisão explícita do usuário.
