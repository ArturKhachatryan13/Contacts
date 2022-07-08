import React from 'react';
import { SectionList } from 'react-native';
import Contact from './Contact';
import SectionTitle from './SectionTitle';

const ContactsList = ({ memoizedValue }) => {
  return (
    <SectionList
      sections={memoizedValue}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Contact contact={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <SectionTitle title={title} />
      )}
    />
  );
};

export default ContactsList;
