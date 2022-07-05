import React from 'react';
import { View, FlatList } from 'react-native';
import EveryContact from './EveryContact';

const allContactsData = [
  {
    name: 'Aron Ashluxe',
    number: '(907) 555-0101',
    id: Math.random(),
    photo: '',
  },
  {
    name: 'Annette Black',
    number: '(907) 555-0102',
    id: Math.random(),
    photo: '',
  },
  {
    name: 'Albert Cooper',
    number: '(907) 555-0103',
    id: Math.random(),
    photo: '../ContactsListComponents/ContactsImage/Rectangle60.png',
  },
  {
    name: 'Annette Flores',
    number: '(907) 555-0104',
    id: Math.random(),
    photo: '',
  },
  {
    name: 'Peter Parker',
    number: '(907) 555-0105',
    id: Math.random(),
    photo: '',
  },
  {
    name: 'Johnny Depp',
    number: '(907) 555-0106',
    id: Math.random(),
    photo: '',
  },
];

const ContactsList = () => {
  const renderContacts = contacts => {
    return <EveryContact contacts={contacts} />;
  };

  return (
    <View>
      <FlatList
        data={allContactsData}
        renderItem={renderContacts}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ContactsList;
