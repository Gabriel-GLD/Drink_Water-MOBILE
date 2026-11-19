/**
 * Rota reservada ao historico de consumo.
 *
 * Os dados reais serao consultados no Expo SQLite na Fase 3.
 */

import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HistoryScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Historico</Text>
        <View style={styles.card}>
          <Text style={styles.text}>O historico sera integrado na Fase 3.</Text>
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
  text: { color: '#61758A', fontSize: 16, lineHeight: 24 },
});