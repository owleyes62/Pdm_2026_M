import React from 'react';
import {Text, StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [number, onChangeNumber] = React.useState('');
  const today = new Date();

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
    
        <Text>Seu ano de nascimento é:</Text>
        <TextInput
          style={styles.input}
          value={String(today.getFullYear() - Number(number))}
          
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  titulo:{
    fontSize: 42,
  },

  input: {
    fontSize: 20,
    height: 45,
    margin: 10,
    borderWidth: 1,
   
  },
});

export default TextInputExample;