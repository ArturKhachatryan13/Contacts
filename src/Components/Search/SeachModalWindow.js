import React from 'react';
import { useState } from 'react';
import BackButton from '../../ui-kit/BackButton';

import { Modal, SafeAreaView } from 'react-native';
import ContactInput from './ContactInput';
import ContactsBar from './ContactsBar';

const SearchModalWindow = ({ visible, onPress, contacts }) => {
  const [contactName, setContactName] = useState('');
  const getSearchInputValue = name => {
    setContactName(name);
  };
  const getNecesseryContact = contactsList => {
    return contactsList.filter(
      contact =>
        contact?.name.toUpperCase().includes(contactName.toUpperCase()) ||
        contact?.surname.toUpperCase().includes(contactName.toUpperCase()),
    );
  };
  const mockContactsData = contacts.slice(0, 10);

  return (
    <Modal visible={visible} animationType="slide">
      <SafeAreaView>
        <BackButton onPress={onPress} />
        <ContactInput
          contactName={contactName}
          getSearchInputValue={getSearchInputValue}
        />
        <ContactsBar
          data={contactName ? getNecesseryContact(contacts) : mockContactsData}
        />
      </SafeAreaView>
    </Modal>
  );
};

export default SearchModalWindow;
