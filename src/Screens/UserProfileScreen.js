import * as React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Avatar from '../ui-kit/Avatar';
import { AvatarSize } from '../ui-kit/Avatar';
import colors from '../../utils/colors';
import ProfileButton from '../ui-kit/ProfileButton';

function UserProfile({ route }) {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Avatar
          name={route.params.name}
          surname={route.params.surname}
          image={route.params.photo}
          size={AvatarSize.medium}
        />
        <Text style={styles.nameStyle}>
          {route.params.name + ' ' + route.params.surname}
        </Text>
        <Text style={styles.numberStyle}>{route.params.number}</Text>
      </View>
      <View style={styles.iconContainer}>
        <ProfileButton path="Chat" color="green" />
        <ProfileButton path="Call" color="blue" stroke="white" />
        <ProfileButton path="Video" color="red" />
        <ProfileButton path="Message" color="grey" />
      </View>
      <View style={styles.textMobileContainer}>
        <Text style={styles.textMobile}>Mobile</Text>
        <View>
          <Text>{route.params.number}</Text>
          <ProfileButton path="Chat" stroke="black" />
          <ProfileButton path="Call" stroke="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 101,
  },
  iconContainer: {
    marginVertical: 13,
    marginHorizontal: 50,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  nameStyle: {
    height: 24,
    fontSize: 18,
    lineHeight: 28,
    color: colors.cornFlowerBlue,
  },
  numberStyle: { fontSize: 12, lineHeight: 28, color: colors.stormGrey },
  textMobileContainer: {
    marginLeft: 16,
    marginTop: 12,
  },
  textMobile: {
    fontSize: 14,
    lineHeight: 28,
    color: colors.stormGrey,
  },
});

export default UserProfile;
