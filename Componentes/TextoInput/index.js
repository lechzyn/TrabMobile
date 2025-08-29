import { Component } from "react";
import { TextInput, Text } from "react-native";
import Styles from "../Styles";

class TextoInput extends Component{
    render() {
        return (
            <>
             <Text style={{fontSize: 14 , marginBottom: -5, marginTop: 4, width:'89%', marginLeft: 20}}>{this.props.label}</Text>

             <TextInput style={this.props.estilo}  
                            value={this.props.value} 
                            onChangeText={this.props.setvalue}
                            placeholder={this.props.placeholder}
                            maxLength={this.props.maxLength}
                            secureTextEntry= {this.props.password}/>
            </>
        )
    }
}

export default TextoInput;