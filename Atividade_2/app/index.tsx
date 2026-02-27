import React from 'react';
import {Text, StyleSheet, TextInput, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [number, onChangeNumber] = React.useState('');
  const [number2, onChangeNumber2] = React.useState('');
  const [number3, onChangeNumber3] = React.useState('');  
  const today = new Date();
  const data = new Date(today.getFullYear(), Number(number3) - 1, Number(number2));

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={styles.titulo}>Calculadora de ano de nascimento{"\n"}</Text>
      
        <Text>Digite sua idade</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
        />
        <Text>{'\n'}Aniversario</Text>
        <View style={styles.containerHorizontal}>
          <TextInput
            style={styles.Aniversario}
            placeholder="Dia"
            onChangeText={onChangeNumber2}
            value={number2}
          />

          <TextInput
            style={styles.Aniversario}
            placeholder="Mes"
            onChangeText={onChangeNumber3}
            value={number3}
          />
        </View>

        <Text>Seu ano de nascimento é:</Text>
        <TextInput
          style={styles.input}
          value={String(today.getFullYear() - Number(number) - (data > today ? 1 : 0))}
          
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  titulo:{
    fontSize: 42,
  },

  containerHorizontal: {
    flexDirection: 'row',
  },

  Aniversario: {
    fontSize: 20,
    height: 45,
    margin: 10,
    borderWidth: 1,
  },

  input: {
    fontSize: 20,
    height: 45,
    margin: 10,
    borderWidth: 1,
  },
});

export default TextInputExample;