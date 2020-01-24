import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

function Login({ navigation }) {
    return (
        <>
            <View style={styles.center}>
                <Text style={styles.title}>BolaApp</Text>
                <TextInput placeholder="Login" />
                <TextInput placeholder="Senha" />
                <Button raised title="Entar" onPress={() => {
                    navigation.navigate('Escala');
                }} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
    },

    center: {
        marginTop: 100,
    }
})

export default Login;