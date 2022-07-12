import React from 'react';
import { View, StyleSheet } from 'react-native';
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
import SearchContact from '../Components/Search/SearchContact';

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

  const flatData = getFavorateContacts(firstGanaretedData);

  return (
    <View style={styles.mainScreencontainer}>
      <SearchContact contacts={flatData} />
      <FavorateContactsList data={flatData} />
      <AllListContacts memoizedValue={memoizedValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreencontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ContactsList;
