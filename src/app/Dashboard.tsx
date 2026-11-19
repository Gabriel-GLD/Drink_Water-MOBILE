/**
 * Rota do painel principal do HydroTrack.
 *
 * Nesta fase inicial apresenta um estado vazio explicito, sem dados ficticios.
 * Nas fases seguintes sera conectado ao hook useWater e ao banco SQLite.
 */

import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PrimaryButton } from '../components/PrimaryButton';

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Meu consumo</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>O painel sera integrado ao SQLite na Fase 3.</Text>
        </View>
        <View style={styles.actions}>
          <PrimaryButton
            label="Verificar pela camera"
            onPress={() => router.push('/camera')}
            variant="secondary"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F7FBFF' },
  container: { flex: 1, gap: 16, padding: 24 },
  title: { color: '#17324D', fontSize: 28, fontWeight: '700' },
  card: { borderRadius: 16, backgroundColor: '#FFFFFF', padding: 20 },
  cardText: { color: '#61758A', fontSize: 16, lineHeight: 24 },
  actions: { marginTop: 'auto' },
});