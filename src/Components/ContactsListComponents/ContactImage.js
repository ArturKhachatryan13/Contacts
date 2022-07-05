import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ContactImage = ({ contacts }) => {
  const nameAndSurname = contacts.item.name.split(' ');
  const userInitials = nameAndSurname[0][0] + nameAndSurname[1][0];
  const contactPictureAdress = contacts.item.photo;
  const userInitialsComponents = (
    <View style={styles.initialsContainer}>
      <Text style={styles.initialsTextStyle}>{userInitials}</Text>
    </View>
  );
  let userPictureComponents = (
    <View>
      <Image
        style={styles.pictureStyle}
        source={require('../ContactsListComponents/ContactsImage/Rectangle60.png')}
      />
    </View>
  );

  return contactPictureAdress ? userPictureComponents : userInitialsComponents;
};

export default ContactImage;

const styles = StyleSheet.create({
  initialsContainer: {
    width: 53,
    height: 53,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B2124',
    borderRadius: 16,
  },
  initialsTextStyle: {
    fontSize: 12,
    lineHeight: 24,
    color: '#FFFFFF',
  },
  pictureStyle: {
    marginTop: 10,
    backgroundColor: '#D7E9E5',
    borderRadius: 12,
  },
});
