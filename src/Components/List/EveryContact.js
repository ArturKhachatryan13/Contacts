import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContactImage from './ContactImage';
import Colors from '../../../utils/colors';

const EveryContact = ({ title }) => {
  return (
    <View style={styles.contactMainContainer}>
      <ContactImage contact={title} />
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
    height: 70,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 16,
    paddingBottom: 10,
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
