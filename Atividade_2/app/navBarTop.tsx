import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const navBarTop = () => {
    return (
        <View style={styles.navBar}>
            <Text style={styles.navBarTitle}>Calculadora de ano de nascimento</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        height: 60,
        backgroundColor: '#6200EE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navBarTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default navBarTop;