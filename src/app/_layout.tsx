/**
 * Configura o navegador principal do aplicativo com Expo Router.
 *
 * Este arquivo define as telas compartilhadas e a barra superior da navegacao.
 * Os modulos das telas ficam separados em arquivos de rota dentro desta pasta.
 */

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#F7FBFF' },
          headerTintColor: '#17324D',
          headerTitleStyle: { fontWeight: '600' },
          contentStyle: { backgroundColor: '#F7FBFF' },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Duartk HydroTrack' }} />
        <Stack.Screen name="dashboard" options={{ title: 'Meu consumo' }} />
        <Stack.Screen name="reminders" options={{ title: 'Lembretes' }} />
        <Stack.Screen name="camera" options={{ title: 'Verificacao visual' }} />
        <Stack.Screen name="history" options={{ title: 'Historico' }} />
        <Stack.Screen name="settings" options={{ title: 'Configuracoes' }} />
      </Stack>
    </>
  );
}
