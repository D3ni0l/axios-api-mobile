import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    input: {
        height: 40,
        borderColor: '#gray',
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        marginTop: 60,
    },
    titulo:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        padding: 20,
    },
    lista: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    card: {
        width: 350,
        height: 350,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        overflow: 'hidden',
        elevation: 3,
        boxShadowColor: '#000',
        boxShadowOpacity: 0.1,
        boxShadowRadius: 4,
    },
    imagem: {
        width: '100%',
        height: '60%',
    },
    infoContainer: {
        padding: 10,
        flex: 1,
        justifyContent: 'space-around',
    },

    tituloFilme: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    url: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    }
});

export default globalStyles;