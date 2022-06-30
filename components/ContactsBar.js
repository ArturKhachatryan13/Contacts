import * as React from 'react';
import {View, Button, StyleSheet} from 'react-native';

function ContactsBar({navigation}) {
  const loadScene = () => {
    navigation.navigate('Main');
  };
  return (
    <View style={styles.contactsBarContainer}>
      <Button title="ADD" onPress={loadScene} />
    </View>
  );
}

export default ContactsBar;

const styles = StyleSheet.create({
  contactsBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
