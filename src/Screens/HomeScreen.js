import * as React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Routes from '../Navigation/routes';

function HomeScreen({ navigation }) {
  const loadScene = () => {
    navigation.navigate(Routes.MAIN);
  };
  return (
    <View style={styles.contactsBarContainer}>
      <Button title="ADD" onPress={loadScene} />
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
