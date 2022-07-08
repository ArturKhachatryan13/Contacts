import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Routes from '../Navigation/routes';
import ContactsList from '../Components/List/ContactsList';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();
  const loadScene = () => {
    navigation.navigate(Routes.MAIN);
  };
  return <ContactsList />;
}

export default HomeScreen;

const styles = StyleSheet.create({
  contactsBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
