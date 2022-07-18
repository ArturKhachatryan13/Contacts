import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Avatar from '../../ui-kit/Avatar';

const FavoriteContact = ({ contact }) => {
  const contactName =
    contact.name + (contact.surname ? ` ${contact.surname}` : '');

  return (
    <View style={styles.avatarContainer}>
      <Avatar
        name={contact.name}
        surname={contact.surname}
        image={contact.photo}
        size="medium"
      />
      <Text style={styles.nameStyle} numberOfLines={1}>
        {contactName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    paddingVertical: 20,
    marginHorizontal: 10,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameStyle: {
    marginLeft: 10,
    width: 83,
    height: 24,
    fontSize: 14,
    lineHeight: 24,
  },
});

export default FavoriteContact;
