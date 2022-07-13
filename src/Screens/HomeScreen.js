import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  generateData,
  changeDataStructure,
  compare,
  getFavorateContacts,
} from '../../utils/helperFunctions/сontactsListGenerator';
import userInfo from '../../utils/constants';
import FavorateContactsList from '../Components/List/FavorateContactsList';
import AllListContacts from '../Components/List/ContactsList';

const generetedData = generateData(userInfo, 50);
const firstGanaretedData = [...generetedData];
const flatListData = getFavorateContacts(generetedData);
const sectionListData = changeDataStructure(firstGanaretedData.sort(compare));

const ContactsList = () => {
  return (
    <View style={styles.mainScreencontainer}>
      <FavorateContactsList data={flatListData} />
      <AllListContacts memoizedValue={sectionListData} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreencontainer: {
    flex: 1,
  },
});

export default ContactsList;
