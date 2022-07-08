import React from 'react';
import { View } from 'react-native';
import {
  generateData,
  changeDataStructure,
  compare,
  getFavorateContacts,
} from '../../utils/helperFunctions/сontactsListGenerator';
import userInfo from '../../utils/constants';
import { useMemo } from 'react';
import FavorateContactsList from '../Components/List/FavorateContactsList';
import AllListContacts from '../Components/List/ContactsList';

const generetedData = generateData(
  userInfo.name,
  userInfo.surName,
  userInfo.numbers,
  userInfo.img,
  50,
);
const firstGanaretedData = [...generetedData];

const ContactsList = () => {
  const memoizedValue = useMemo(
    () => changeDataStructure(generetedData.sort(compare)),
    [],
  );

  let flatData = getFavorateContacts(firstGanaretedData);

  return (
    <View style={{ flex: 1 }}>
      <FavorateContactsList data={flatData} />
      <AllListContacts memoizedValue={memoizedValue} />
    </View>
  );
};

export default ContactsList;
