# SAVE_PROJETO v1.15.17 — CORREÇÃO ARENA ONLINE / ROBUSTEZ

Base: v1.15.16 GIT_CLOUDFLARE.

## Correções
- Corrigido bug crítico da Arena Online: `TRI_SIDES` agora é importado no Worker. O erro ocorria depois de uma ação válida ao tentar registrar o Replay, deixando o estado alterado no servidor sem a atualização normal dos clientes.
- Registro do Replay da Arena tornou-se defensivo: falha ao iniciar ou registrar o Replay é capturada e não interrompe a partida.
- Envio do Replay pós-partida também fica isolado do envio da visão normal.
- Arena Online bloqueia visualmente Mover, Parar, Atacar, Habilidade, Encerrar e Cancelar quando não é o turno daquele navegador.
- O cliente Arena valida `view.side === side`; uma visão pertencente ao lado errado é recusada e gera aviso de sincronização.
- `doAction()` também impede o envio de ações fora do turno no cliente. O Árbitro no servidor continua sendo a validação autoritativa.
- Persistência pós-ação ganhou `safePersist()` no Clássico Online e Arena Online: uma falha de storage é registrada, mas não impede resposta/atualização do estado corrente aos clientes.
- Cache-bust da Arena atualizado para v1.15.17.

## Auditoria do Clássico Online
- O Clássico Online não possuía o erro `TRI_SIDES`, pois não usa o gravador de Replay da Arena.
- Recebeu apenas a proteção de persistência pós-ação; regras, filtragem e fluxo continuam iguais.

## Não alterado
- Regras, atributos e balanceamento.
- `src/tri-core.js`, `public/tri-core-global.js` e matriz do Confronto Direto.
- Informação oculta/visões filtradas.
- `wrangler.jsonc`.

Status: GIT_CLOUDFLARE.
