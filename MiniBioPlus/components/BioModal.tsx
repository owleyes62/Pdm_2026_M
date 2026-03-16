import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  visivel: boolean;
  fechar: () => void;
};

export default function BioModal({ visivel, fechar }: Props) {
  return (
    <Modal
      visible={visivel}
      transparent={true}
      animationType="fade"
    >
      <View style={styles.fundo}>
        <View style={styles.caixa}>
          <Text style={styles.titulo}>Mais sobre mim 👋</Text>

          <Text style={styles.texto}>
            🎓 Cursando ADS na faculdade desde 2023, atualmente no 3º período.
          </Text>
          <Text style={styles.texto}>
            💻 Tenho experiência com JavaScript, Python e estou aprendendo React Native.
          </Text>
          <Text style={styles.texto}>
            🎮 Fã de RPGs e jogos de estratégia, especialmente nos finais de semana.
          </Text>
          <Text style={styles.texto}>
            🎵 Meu estilo musical vai de lo-fi a rock alternativo dependendo do humor.
          </Text>

          <TouchableOpacity style={styles.botaoFechar} onPress={fechar}>
            <Text style={styles.botaoTexto}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  caixa: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    width: '85%',
    gap: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6c63ff',
    marginBottom: 8,
    textAlign: 'center',
  },
  texto: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
  },
  botaoFechar: {
    marginTop: 12,
    backgroundColor: '#6c63ff',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});