import React from 'react';
import { SectionList } from 'react-native';
import EveryContact from './EveryContact';
import SectionTitle from './SectionTitle';

const ContactsList = ({ memoizedValue }) => {
  return (
    <SectionList
      sections={memoizedValue}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <EveryContact size="small" title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <SectionTitle title={title} />
      )}
    />
  );
};

export default ContactsList;
