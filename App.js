import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactsBar from './components/ContactsBar';
import UserProfile from './components/UserProfile';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ContactsBar} />
        <Stack.Screen name="Main" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
