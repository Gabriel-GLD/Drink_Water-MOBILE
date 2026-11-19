/**
 * Tela inicial do HydroTrack.
 *
 * Apresenta o acesso as principais areas do aplicativo. Nesta fase inicial,
 * os destinos sao navegacoes estruturais; recursos como banco de dados,
 * notificacoes e reconhecimento visual serao integrados nas fases seguintes.
 */

import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PrimaryButton } from '../components/PrimaryButton';

export default function IndexScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.hero}>
          <Text style={styles.title}>Duartk-HydroTrack</Text>
          <Text style={styles.subtitle}>
            Organize seus lembretes e acompanhe sua hidratacao.
          </Text>
        </View>

        <View style={styles.actions}>
          <PrimaryButton label="Abrir painel" onPress={() => router.push('/dashboard')} />
          <PrimaryButton
            label="Gerenciar lembretes"
            onPress={() => router.push('/reminders')}
            variant="secondary"
          />
          <PrimaryButton
            label="Historico"
            onPress={() => router.push('/history')}
            variant="secondary"
          />
          <PrimaryButton
            label="Configuracoes"
            onPress={() => router.push('/settings')}
            variant="secondary"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F7FBFF' },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  hero: { gap: 12 },
  title: { color: '#17324D', fontSize: 36, fontWeight: '700' },
  subtitle: { color: '#61758A', fontSize: 17, lineHeight: 24 },
  actions: { gap: 12 },
});
