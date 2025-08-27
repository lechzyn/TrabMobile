import { Text,View,TouchableOpacity } from "react-native";
import Styles from "../../Componentes/Styles";

export default function Home(props){

    const AbrirMedico = () => {
        props.navigation.navigate('Médico');
    }

    const AbrirUsuario = () => {
        props.navigation.navigate('Usuário');
    }

    return(
        <View style={Styles.container}>
            <Image
                source={require('../../assets/dava.png')}
                style={Styles.imagem}
            />

            <TouchableOpacity style={Styles.buttonHome} activeOpacity={0.7}>
                <Text style={Styles.buttonText}>Cadastro de Médico</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonHome} activeOpacity={0.7}>
                <Text style={Styles.buttonText}>Cadastro de Usuário</Text>
            </TouchableOpacity>
        </View>
    )
}