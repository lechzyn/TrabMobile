import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Telas/Home';

export default function App() {
 
 const Stack = createStackNavigator();
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Médico' component={Medi}/>
        <Stack.Screen name='Usuário' component={Usuario}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
    
}


