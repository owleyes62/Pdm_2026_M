import React from 'react';
import {Text, StyleSheet, TextInput, View, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import navBarTop from './navBarTop';

const CalculadoraDeNascimento = () => {
  const [number, onChangeNumber] = React.useState('');
  const [number2, onChangeNumber2] = React.useState('');
  const [number3, onChangeNumber3] = React.useState('');  
  const today = new Date();
  const data = new Date(today.getFullYear(), Number(number3) - 1, Number(number2));

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView keyboardShouldPersistTaps="handled">
            {navBarTop()}

            <Text style={styles.titulo}>Calculadora de ano de nascimento{"\n"}</Text>
          
            <Text style={styles.titulo2}>Digite sua idade</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              keyboardType="numeric"
            />
            <Text style={styles.titulo2}>{'\n'}Aniversario</Text>
            <View style={styles.containerHorizontal}>
              <TextInput
                style={styles.Aniversario}
                placeholder="Dia"
                onChangeText={onChangeNumber2}
                value={number2}
                keyboardType="numeric"
              />

              <TextInput
                style={styles.Aniversario}
                placeholder="Més"
                onChangeText={onChangeNumber3}
                value={number3}
                keyboardType="numeric"
              />
            </View>

            <Text style={styles.titulo2}>Seu ano de nascimento é:</Text>
            <TextInput
              style={styles.input}
              value={String(today.getFullYear() - Number(number) - (data > today ? 1 : 0))}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  titulo:{
    fontSize: 42,
  },

  titulo2:{
    fontSize: 20,
    padding: 10,
  },

  containerHorizontal: {
    flexDirection: 'row',
  },

  Aniversario: {
    fontSize: 20,
    height: 45,
    margin: 10,
    borderWidth: 1,
    width: 100,
    padding: 5,
  },

  input: {
    fontSize: 20,
    height: 45,
    margin: 10,
    padding: 5,
    width: 200,
    borderWidth: 1,
  },
});

export default CalculadoraDeNascimento;