import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SectionTitle = ({ title }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

export default SectionTitle;

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    height: 26,
    backgroundColor: '#C0C0C0',
  },
  titleStyle: {
    fontSize: 15,
    color: '#4E4B66',
    marginLeft: 17,
  },
});
