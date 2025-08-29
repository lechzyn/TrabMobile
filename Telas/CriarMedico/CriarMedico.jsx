import { Text, View, TouchableOpacity, Alert,StyleSheet} from "react-native";
import { useEffect, useState } from "react";
import { initDB, addMedico } from "../../db/db";
import Styles from "../../Componentes/Styles";
import DropDownPicker from 'react-native-dropdown-picker';
import TextoInput from '../../Componentes/TextoInput';
import md5 from "md5";

export default function CriarMedico() {
    const [dadosNome, setDadosNome] = useState(null);
    const [dadosCRM, setDadosCRM] = useState(null);
    const [dadosSenha, setDadosSenha] = useState(null);
    const [abrirDropdown, setAbrirDropdown] = useState(false);
    const [valorDropdown, setValorDropdown] = useState(null);
    const [items, setItems] = useState([
        { label: 'Pediatria', value: 'pediatria' },
        { label: 'Cardiologia', value: 'cardiologia' },
        { label: 'Dermatologia', value: 'dermatologia' },
        { label: 'Cirurgião Geral', value: 'cirurgião geral' },
    ]);

    useEffect(() => {
        (async () => {
            await initDB();
        })();
    }, []);

    const salvar = async () => {
        if (dadosNome.length <= 0) {
            Alert.alert('Favor digitar um de nome');
        }
        else if (dadosCRM.length <= 0) {
            Alert.alert('Favor digitar a usuario');
        }
        else if (valorDropdown.length <= 0) {
            Alert.alert('Favor escolher a especialidade');
        }
        else if (dadosSenha.length <= 0) {
            Alert.alert('Favor digitar a senha');
        }
        else {
            addMedico(dadosNome, valorDropdown, dadosCRM, null, dadosSenha)
        }
    }

    return (
        <View style={estilos.container}>
            <View style={Styles.card_dados}>
                
                <Text style={Styles.header}>Cadastro de Médico</Text>
                
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 15,
                }}>
                    <DropDownPicker
                        open={abrirDropdown}
                        value={valorDropdown}
                        items={items}
                        setOpen={setAbrirDropdown}
                        setValue={setValorDropdown}
                        setItems={setItems}
                        placeholder="Especialidade"
                    />
                </View>

                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text>Especialidade escolhida: {valorDropdown === null ? 'Nenhuma' : valorDropdown}</Text>
                </View>

                <TextoInput estilo={Styles.input}
                    placeholder='Digite seu nome'
                    maxLength={30}
                    value = {dadosNome}
                    setvalue={setDadosNome} 
                    label='Nome'
                />

                <TextoInput estilo={Styles.input}
                    placeholder='Digite seu CRM'
                    maxLength={6}
                    value = {dadosCRM}
                    setvalue={setDadosCRM} 
                    label='CRM'
                />

                <TextoInput estilo={Styles.input}
                    placeholder='Digite seu CRM'
                    maxLength={30}
                    value = {dadosSenha}
                    setvalue={setDadosSenha} 
                    label='Senha'
                    password={true}
                />

                {/* Implementar funcionalidade de Foto aqui */}

            </View>

        </View>
    )
}

const estilos = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#ebf0f7',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
  },
  buttonsalvar: {
        backgroundColor: '#154360',
        width: 100,
        height: 30,
        marginTop: 10,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
  },
  buttontexto: {
        fontSize: 16,
        color: '#ffffff'
  }
});
