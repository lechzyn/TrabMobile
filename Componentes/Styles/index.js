import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
        margin: 10
    },
    buttonHome: {
        backgroundColor: '#154360',
        width: '90%',
        margin: 10,
        height: 60,
        borderRadius: 20
    },
    buttonText: {
        fontFamily: 'Arial',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 15,
        color: '#FFFFFF',
    },
    card_dados: {
        marginLeft: 20,
        marginRight: 20,
        width: '90%',
        backgroundColor: 'white',
        padding: 10,
        height: 470
    },
    input: {
        width: '90%',
        height: 50,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#081534',
        fontSize: 15,
        borderRadius: 10
    },
})

export default styles;