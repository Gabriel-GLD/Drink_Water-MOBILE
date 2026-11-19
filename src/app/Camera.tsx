/**
 * Rota reservada para captura e verificacao visual.
 *
 * A integracao com a camera sera feita na Fase 2. Esta tela nao simula
 * reconhecimento nem registra consumo automaticamente.
 */

import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CameraScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Verificacao visual</Text>
        <View style={styles.card}>
          <Text style={styles.text}>A camera sera integrada na Fase 2.</Text>
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