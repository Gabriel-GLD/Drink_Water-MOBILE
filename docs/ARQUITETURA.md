# Arquitetura

## Estrutura atual

- `src/app`: rotas e telas gerenciadas pelo Expo Router
- `src/components`: componentes visuais reutilizaveis
- `src/hooks`: estado reutilizavel e coordenacao entre telas e servicos
- `src/services`: camera, IA, notificacoes e regras de consumo
- `src/database`: inicializacao e consultas do SQLite
- `src/types`: tipos e interfaces TypeScript
- `src/utils`: calculos e validacoes independentes

## Comunicacao

As telas usarao hooks para estados compartilhados. Os hooks chamarao servicos
ou o banco de dados. Os componentes visuais receberao dados por props e nao
acessarao a persistencia diretamente.
