import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../../utils/colors';
import Avatar from '../../ui-kit/Avatar';

const EveryContact = ({ size, title }) => {
  return (
    <View style={styles.contactMainContainer}>
      <Avatar
        name={title.name}
        surname={title.surname}
        image={title.photo}
        size={size}
      />

      <View style={styles.contactNameContainer}>
        <Text style={styles.name}>{title?.name + ' ' + title?.surname}</Text>
        <Text style={styles.number}>{title?.number}</Text>
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
