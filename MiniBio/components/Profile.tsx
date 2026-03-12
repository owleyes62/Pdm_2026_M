import { View, Text, Image, StyleSheet } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/profile.jpg')}  // <- assim funciona
        style={styles.foto}
      />
      <Text style={styles.nome}>Iwerson Guilherme</Text>
      <Text style={styles.bio}>
        Estudante de Análise e Desenvolvimento de Sistemas apaixonado por tecnologia.
        Gosto de aprender novas linguagens e criar aplicativos mobile.
        Nas horas vagas curto jogar videogame e ouvir música.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4ff',
    borderRadius: 12,
    margin: 16,
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#6c63ff',
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    lineHeight: 22,
  },
});