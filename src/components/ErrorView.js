import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native';


const ErrorView = props => (
    <View style={styles.container}>
        <Text style={styles.title}>UPS!</Text>
        <Text style={styles.body}>Ubo un problema al cargar las noticias, intenta nuevamente.</Text>
        <Button style={styles.button} title="Recargar" onPress={props.onPress} />
    </View>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        width: 200,
    },
    title: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    body: {
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        width: 200,
    }
});

export default ErrorView;