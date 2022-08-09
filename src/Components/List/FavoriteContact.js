import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Avatar, { AvatarSize } from '../../ui-kit/Avatar';
import Contacts from '../../Navigation/routes';
import { useNavigation } from '@react-navigation/native';

const FavoriteContact = ({ contact }) => {
  const navigation = useNavigation();

  const contactName =
    contact.name + (contact.surname ? ` ${contact.surname}` : '');

  return (
    <View style={styles.avatarContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate(Contacts.MAIN, contact)}>
        <Avatar
          name={contact.name}
          surname={contact.surname}
          image={contact.photo}
          size={AvatarSize.medium}
        />
        <Text style={styles.nameStyle} numberOfLines={1}>
          {contactName}
        </Text>
      </TouchableOpacity>
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
