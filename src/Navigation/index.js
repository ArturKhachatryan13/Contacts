import * as React from 'react';

import SeachContact from '../Screens/SeachContactButton';
import ContactsList from '../Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreensComponents from './screens';
import Routes from './routes';

const Stack = createNativeStackNavigator();

function NavigationRoot() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.HOME}
          component={ScreensComponents.HomeScreen}
          options={ScreensComponents.HomeScreen.options}
        />
        <Stack.Screen
          name={Routes.MAIN}
          component={ScreensComponents.UserProfileScreen}
        />
        <Stack.Screen
          name={Routes.CONTACTS}
          component={ScreensComponents.SeachContact}
          options={ScreensComponents.SeachContact.options}
        />
        <Stack.Screen
          name={Routes.ADD_CONTACT}
          component={ScreensComponents.AddContact}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavigationRoot;
