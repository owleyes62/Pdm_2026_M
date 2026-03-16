import { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import BioModal from './BioModal';

export default function Profile() {
  const [modalVisivel, setModalVisivel] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/profile.jpg')}
        style={styles.foto}
      />
      <Text style={styles.nome}>Iwerson Guilherme</Text>
      <Text style={styles.bio}>
        Estudante de Análise e Desenvolvimento de Sistemas apaixonado por tecnologia.
        Gosto de aprender novas linguagens e criar aplicativos mobile.
        Nas horas vagas curto jogar videogame e ouvir música.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => setModalVisivel(true)}
      >
        <Text style={styles.botaoTexto}>Ver mais detalhes</Text>
      </TouchableOpacity>

      <BioModal
        visivel={modalVisivel}
        fechar={() => setModalVisivel(false)}
      />
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
    marginBottom: 16,
  },
  botao: {
    backgroundColor: '#6c63ff',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});