import React from 'react';
import { FlatList } from 'react-native';
import EveryContact from './EveryContact';

const name = ['Artur', 'Peter', 'Albert'];
const surName = ['Khachatryan', 'Parker', 'Cooper'];
const numbers = [
  '(907) 555-0106',
  '(907) 555-0105',
  '(907) 555-0104',
  '(907) 555-0103',
];
const img = ['', './ContactsImage/Rectangle60.png'];

function numberGenerator(objKey) {
  let number = Math.floor(Math.random() * objKey.length);
  return number;
}

function generateData(newName, surname, num, image, count) {
  const newContactsList = Array(count).fill(null);
  newContactsList.forEach((element, index, arr) => {
    let randomindexforName = numberGenerator(newName);
    let randomindexforSurName = numberGenerator(surname);
    let ramdomIforNumber = numberGenerator(num);
    let randomIImg = numberGenerator(image);

    element = {};
    element.name = newName[randomindexforName];
    element.surname = surname[randomindexforSurName];
    element.number = num[ramdomIforNumber];
    element.id = Math.random();
    element.photo = image[randomIImg];
    arr[index] = element;
  });
  return newContactsList;
}

const ContactsList = () => {
  const renderContacts = ({ item }) => {
    return <EveryContact contact={item} />;
  };

  return (
    <FlatList
      data={generateData(name, surName, numbers, img, 15)}
      renderItem={renderContacts}
      keyExtractor={item => item.id}
    />
  );
};

export default ContactsList;
