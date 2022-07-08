import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Avatar from '../../../ui-kit/Avatar';

const renderItem = ({ item }) => {
  const contactName = item.name + ' ' + item.surname;

  const getChangeName = name => {
    return name.length > 9 ? name?.substring(0, 9) + '...' : name;
  };

  return (
    <View style={styles.flatListContainer}>
      <Avatar
        name={item.name}
        surname={item.surname}
        image={item.photo}
        size="medium"
      />
      <Text style={styles.nameStyle}>{getChangeName(contactName)}</Text>
    </View>
  );
};

const FlatListContacts = ({ data }) => {
  return <FlatList horizontal data={data} renderItem={renderItem} />;
};

export default FlatListContacts;

const styles = StyleSheet.create({
  flatListContainer: {
    paddingVertical: 20,
    marginHorizontal: 5,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameStyle: {
    marginLeft: 10,
    width: 83,
    height: 24,
    fontSize: 14,
    lineHeight: 24,
  },
});
