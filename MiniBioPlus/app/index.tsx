import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Profile from '../components/Profile';
 
export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>
        App criado para a disciplina Programação para Dispositivos Móveis
      </Text>
      <Profile />
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6c63ff',
    textAlign: 'center',
    paddingHorizontal: 24,
    marginBottom: 10,
  },
});
 