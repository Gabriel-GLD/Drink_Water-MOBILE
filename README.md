# HydroTrack

HydroTrack e um aplicativo mobile para acompanhar o consumo diario de agua,
organizar lembretes e utilizar verificacao visual como etapa de confirmacao.

## Estado atual

O projeto esta na Fase 1: estrutura inicial, TypeScript, Expo Router e navegacao
basica entre telas. Banco de dados, notificacoes, camera e reconhecimento visual
serao implementados nas fases seguintes.

## Tecnologias previstas

- React Native 0.88
- TypeScript
- Expo SDK 58
- Expo Router
- Expo SQLite
- Expo Notifications
- Expo Camera

## Como executar

```powershell
npm install
npx expo start
```

Use um dispositivo ou emulador Android. Recursos nativos adicionados nas fases
seguintes exigirao um Development Build.

## Estrutura

- `src/app`: telas e configuracao do Expo Router
- `src/components`: componentes visuais reutilizaveis
- `src/hooks`: estados e comportamentos reutilizaveis
- `src/services`: integracoes e regras dos recursos
- `src/database`: inicializacao e acesso ao SQLite
- `src/types`: contratos TypeScript
- `src/utils`: funcoes auxiliares

## Documentacao

A documentacao tecnica inicial esta na pasta `docs/`.
