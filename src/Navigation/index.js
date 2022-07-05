import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreensComponents from './screens';
import Routes from './routes';

const Stack = createNativeStackNavigator();

function NavigationRoot() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ cardStyle: { backgroundColor: '#fff' } }}>
        <Stack.Screen
          name={Routes.HOME}
          component={ScreensComponents.HomeScreen}
        />
        <Stack.Screen
          name={Routes.MAIN}
          component={ScreensComponents.UserProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavigationRoot;
