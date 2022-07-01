import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContactImage from './ContactImage';

const EveryContact = ({ contacts }) => {
  return (
    <View style={styles.contactMainContainer}>
      <View>
        <ContactImage contacts={contacts} />
      </View>
      <View style={styles.contactNameContainer}>
        <Text style={styles.name}>{contacts.item.name}</Text>
        <Text style={styles.number}>{contacts.item.number}</Text>
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
    borderBottomColor: '#D9DBE9',
  },
  name: {
    fontWeight: '500',
    fontSize: 16,
    color: '#4E4B66',
    lineHeight: 28,
  },
  number: {
    fontWeight: '500',
    fontSize: 12,
    color: '#6E7191',
    marginBottom: 5,
    lineHeight: 28,
  },
});
