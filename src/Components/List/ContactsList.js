import React from 'react';
import { SafeAreaView, SectionList } from 'react-native';
import EveryContact from './EveryContact';
import SectionTitle from './SectionTitle';

const name = [
  'Artur',
  'Peter',
  'Albert',
  'Karo',
  'Sevak',
  'Mher',
  'Igor',
  '1',
  '12',
  'Фкум',
  'Андей',
];
const surName = ['Khachatryan', 'Parker', 'Cooper', 'Barseghyan'];
const numbers = [
  '(907) 555-0106',
  '(907) 555-0105',
  '(907) 555-0104',
  '(907) 555-0103',
];

const img = ['', './ContactsImage/Rectangle60.png'];

const numberGenerator = objKey => {
  let number = Math.floor(Math.random() * objKey.length);
  return number;
};

const generateData = (newName, surname, num, image, count) => {
  const genereteNewArray = Array(count).fill(null);
  let generatedNewData = [];
  generatedNewData = genereteNewArray.map(element => {
    const randomindexforName = numberGenerator(newName);
    const randomindexforSurName = numberGenerator(surname);
    const ramdomIforNumber = numberGenerator(num);
    const randomIImg = numberGenerator(image);

    element = {};
    element.name = newName[randomindexforName];
    element.surname = surname[randomindexforSurName];
    element.number = num[ramdomIforNumber];
    element.id = Math.random();
    element.photo = image[randomIImg];
    return element;
  });
  return generatedNewData;
};
const generetedData = generateData(name, surName, numbers, img, 50);

// new function

const changeDataStructure = contactsData => {
  const sectionListArray = [{ title: '', data: [] }];
  sectionListArray[0].data.push(contactsData[0]);
  sectionListArray[0].title = contactsData[0].name[0];
  let count = 0;
  for (let i = 1; i < contactsData.length; i++) {
    if (contactsData[i].name[0] === sectionListArray[count].data[0].name[0]) {
      sectionListArray[count].data.push(contactsData[i]);
    } else {
      const newObj = { title: '', data: [] };
      sectionListArray.push(newObj);
      count++;
      sectionListArray[count].data.push(contactsData[i]);
      sectionListArray[count].title = contactsData[i].name[0];
    }
  }
  return sectionListArray;
};
// The function for the filter
const compare = (a, b) => {
  if (a.name > b.name) return 1;
  if (a.name == b.name) return 0;
  if (a.name < b.name) return -1;
};
const sectionData = changeDataStructure(generetedData.sort(compare));
// new part

const ContactsList = () => {
  return (
    <SafeAreaView>
      <SectionList
        sections={sectionData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <EveryContact title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle title={title} />
        )}
      />
    </SafeAreaView>
  );
};

export default ContactsList;
