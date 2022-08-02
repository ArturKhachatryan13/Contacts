import React from 'react';

import { SectionList, View, Text, StyleSheet } from 'react-native';

import Contact from './Contact';
import { selectSectionsContacts } from '../../Configs/selectors';

import { useSelector } from 'react-redux';

const ContactsList = () => {
  const contacts = useSelector(selectSectionsContacts);

  return (
    <SectionList
      sections={contacts}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Contact contact={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      )}
    />
  );
};
const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    height: 26,
    backgroundColor: '#F7F7FC',
  },
  titleStyle: {
    fontSize: 15,
    color: '#4E4B66',
    marginLeft: 17,
  },
});

export default ContactsList;
