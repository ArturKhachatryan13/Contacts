import React from 'react';

import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

import EveryContact from '../List/EveryContact';

const ContactsBar = ({ data }) => {
  const renderContact = ({ item }) => {
    return <EveryContact contact={item} />;
  };
  return (
    <KeyboardAvoidingView
      style={styles.KeyboardContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.Container}>
        <FlatList
          data={data}
          renderItem={renderContact}
          keyExtractor={item => item.id}
        />
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  KeyboardContainer: { marginBottom: 40 },
  Container: { marginBottom: 40 },
});

export default ContactsBar;
