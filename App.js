import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Telas/Home';
import CriarMedico from './Telas/CriarMedico/CriarMedico';
import CriarUsuario from './Telas/CriarUsuario/CriarUsuario';
export default function App() {
 
 const Stack = createStackNavigator();
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Médico' component={CriarMedico}/>
        <Stack.Screen name='Usuário' component={CriarUsuario}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
    
}


