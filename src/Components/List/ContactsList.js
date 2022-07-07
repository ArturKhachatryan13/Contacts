import React from 'react';
import { SafeAreaView, SectionList } from 'react-native';
import {
  generateData,
  changeDataStructure,
  compare,
} from '../../../utils/helperFunctions/сontactsListGenerator';
import EveryContact from './EveryContact';
import SectionTitle from './SectionTitle';
import userInfo from '../../../utils/constants';
import { useMemo } from 'react';

const generetedData = generateData(
  userInfo.name,
  userInfo.surName,
  userInfo.numbers,
  userInfo.img,
  50,
);

const ContactsList = () => {
  const memoizedValue = useMemo(
    () => changeDataStructure(generetedData.sort(compare)),
    [],
  );
  return (
    <SafeAreaView>
      <SectionList
        sections={memoizedValue}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <EveryContact title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle title={title} />
        )}
      />
    </SafeAreaView>
  );
};

export default ContactsList;
