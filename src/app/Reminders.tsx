/**
 * Rota de gerenciamento de lembretes.
 *
 * Atualmente apresenta a estrutura da tela. O cadastro persistente e as
 * notificacoes locais serao implementados nas fases posteriores.
 */

import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RemindersScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Lembretes</Text>
        <View style={styles.card}>
          <Text style={styles.text}>O gerenciamento sera integrado na Fase 4.</Text>
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