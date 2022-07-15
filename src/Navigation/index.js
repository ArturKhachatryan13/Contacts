import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreensComponents from './screens';
import Routes from './routes';
import SeachContact from '../Screens/SeachContactButton';

const Stack = createNativeStackNavigator();

function NavigationRoot() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.HOME}
          component={ScreensComponents.HomeScreen}
        />
        <Stack.Screen
          name={Routes.MAIN}
          component={ScreensComponents.UserProfileScreen}
        />
        <Stack.Screen
          name={Routes.CONTACTS}
          component={ScreensComponents.SeachContact}
          options={SeachContact.options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavigationRoot;
