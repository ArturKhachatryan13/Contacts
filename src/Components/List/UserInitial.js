import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserInitial = ({ contact }) => {
  const userInitials = contact.name[0] + contact.surname[0];

  return (
    <View style={styles.initialsContainer}>
      <Text style={styles.initialsTextStyle}>{userInitials}</Text>
    </View>
  );
};

export default UserInitial;

const styles = StyleSheet.create({
  initialsContainer: {
    width: 53,
    height: 53,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B2124',
    borderRadius: 16,
  },
  initialsTextStyle: {
    fontSize: 12,
    lineHeight: 24,
    color: '#FFFFFF',
  },
});
