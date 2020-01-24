import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Profile() {
    return (
        <>
            <View style={styles.center}>
                <Text style={styles.title}>Perfil</Text>
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

export default Profile;