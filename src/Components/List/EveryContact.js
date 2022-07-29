import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../../utils/colors';
import Avatar, { AvatarSize } from '../../ui-kit/Avatar';

const EveryContact = ({ contact }) => {
  return (
    <View style={styles.contactMainContainer}>
      <Avatar
        name={contact.name}
        surname={contact.surname}
        image={contact.photo}
        size={AvatarSize.small}
      />

      <View style={styles.contactNameContainer}>
        <Text style={styles.name}>
          {contact.name + (contact.surname ? ` ${contact.surname}` : ' ')}
        </Text>
        <Text style={styles.number}>{contact?.number}</Text>
      </View>
    </View>
  );
};
export default EveryContact;

const styles = StyleSheet.create({
  contactMainContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 16,
    paddingBottom: 20,
  },
  contactNameContainer: {
    height: 53,
    width: 300,
    justifyContent: 'space-around',
    paddingLeft: 8,
    marginTop: 10,
    marginLeft: 13,
    borderBottomWidth: 1,
    borderBottomColor: Colors.quartz,
  },
  name: {
    fontWeight: '500',
    fontSize: 16,
    color: Colors.cornFlowerBlue,
    lineHeight: 28,
  },
  number: {
    fontWeight: '500',
    fontSize: 12,
    color: Colors.stormGrey,
    marginBottom: 5,
    lineHeight: 28,
  },
});
