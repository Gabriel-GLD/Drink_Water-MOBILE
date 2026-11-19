/**
 * Rota reservada as configuracoes do usuario.
 *
 * Nesta fase inicial descreve o proposito da tela sem apresentar valores
 * predefinidos como configuracoes pessoais ja escolhidas pelo usuario.
 */

import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Configuracoes</Text>
        <View style={styles.card}>
          <Text style={styles.text}>
            Meta diaria, quantidade padrao e preferencias serao configuradas nas fases
            seguintes.
          </Text>
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