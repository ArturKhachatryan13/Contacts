import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreensComponents from './screens';
import Routes from './routes';
import SeachContact from '../Screens/SeachContactButton';
import ContactsList from '../Screens/HomeScreen';
const Stack = createNativeStackNavigator();
import { useDispatch, useSelector } from 'react-redux';

function NavigationRoot() {
  const contactsData = useSelector(state => state);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.HOME}
          component={ScreensComponents.HomeScreen}
          options={ContactsList.options}
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
        <Stack.Screen
          name={Routes.ADDNEWCONTACT}
          component={ScreensComponents.AddNewContact}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavigationRoot;
