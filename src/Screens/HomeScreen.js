import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Routes from '../Navigation/routes';
import ContactsList from '../Components/List/ContactsList';

function HomeScreen({ navigation }) {
  const loadScene = () => {
    navigation.navigate(Routes.MAIN);
  };
  return (
    <View>
      <View style={styles.contactsBarContainer}>
        <Button title="ADD" onPress={loadScene} />
      </View>
      <View>
        <ContactsList />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  contactsBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
