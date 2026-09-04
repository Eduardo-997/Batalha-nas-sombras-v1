# SAVE_PROJETO — Batalha nas Sombras v1.15.24

Base: **v1.15.23 LOCAL**.
Destino deste pacote: **GIT + CLOUDFLARE**.

## Alterações desta versão

### 1. Morte por armadilha
- Quando uma unidade entra numa casa com armadilha de dano e morre, o cadáver é criado **na casa da armadilha/entrada**.
- A posição anterior da unidade não é mais usada para o cadáver nessa situação.
- Mantida a regra já aprovada: armadilhas podem ser preparadas sob uma peça e não disparam na colocação; só ativam quando um inimigo entra depois.
- Aplicado a Clássico, Clássico Online, Arena e Treino.

### 2. Vidente — 2 casas ligadas
- A habilidade deixou de revelar 4 casas/área 2×2.
- Agora seleciona exatamente **2 casas**:
  1. primeira casa dentro do **Alc. Hab.** real do Vidente;
  2. segunda casa obrigatoriamente ligada por lado (ortogonal) à primeira.
- Diagonal não conta como ligação.
- Ao clicar em Habilidade, a interface mostra o Alc. Hab. disponível e guia a seleção 1/2 → 2/2.
- Bônus de Alc. Hab. continuam aumentando a distância permitida para a primeira casa.
- IA do Clássico e da Arena foi atualizada para o novo formato.

### 3. Replay mais informativo
- O Replay agora registra/destaca eventos relevantes do quadro, além do estado completo:
  - 💥 ataques e casas atacadas;
  - 👣 movimento;
  - percepção/PER e detecção de presença;
  - 👁️ área usada pelo Vidente;
  - ⚔️ Confronto Direto;
  - 🕳️/🦉 armadilhas ativadas;
  - 🛡️ Vincular/Desvincular do Escudeiro.
- O painel do Replay mostra um resumo do evento do quadro.
- Arena Online continua liberando Replay completo apenas após o fim da partida.

### 4. Escudeiro — habilidade ativa Vincular
- O Escudeiro continua podendo compartilhar casa com 1 aliado.
- Quando estiver na mesma casa de um aliado, pode usar **Vincular**.
- Depois de vinculado, ao aliado se mover, o Escudeiro acompanha automaticamente para a mesma casa.
- Enquanto vinculado, o Escudeiro não pode se mover sozinho.
- Para separar, usa a habilidade novamente: **Desvincular**.
- Desvincular consome o turno do Escudeiro e exige confirmação na interface para evitar uso acidental.
- O vínculo é limpo caso uma das peças deixe de poder mantê-lo por morte/remoção.
- Proteção adicional: uma dupla vinculada não pode entrar numa casa já ocupada por outro aliado, evitando pilha de 3 unidades.
- Aplicado a Clássico, Clássico Online, Arena e Treino.

### 5. Doppelgänger + Escudeiro
- Se o Doppelgänger copiar a habilidade do Escudeiro, ele também consegue compartilhar uma casa com 1 aliado para tornar **Vincular** utilizável.
- A cópia não transforma o Doppelgänger no interceptador passivo do Escudeiro; a compatibilidade adicionada é a necessária para a habilidade ativa copiada funcionar.

## Ninja
- **Emote do Ninja NÃO foi alterado.** Continua `🗡️`, conforme decisão do usuário.

## Compatibilidade e segurança
- `public/tri-core.js` e `src/tri-core.js` estão sincronizados.
- IA embutida em `public/ai.js` corresponde ao `public/ai-worker.js` atual.
- Clássico local e Clássico Online expõem o mesmo conjunto de ações do Árbitro, incluindo `shieldLink`.
- Relação `linkedToId` é informação do próprio lado; não é exposta como vínculo secreto ao adversário.
- `wrangler.jsonc` permanece inalterado em relação à v1.15.23.
- Cache-bust dos ativos ativos foi atualizado para `v=1.15.24`.

## Fora desta versão
- Emote do Ninja: mantido.
- Modo História/Campanha: continua para depois.
- Reconexão robusta do Online: continua pendente e não foi incluída aqui.
