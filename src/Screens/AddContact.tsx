import React, { useState } from 'react';

import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

import AddContactInput from '../ui-kit/Input/index';
import SaveContact from '../ui-kit/Button';
import UploadPhoto from '../Components/UploadPhoto';
import colors from '../../utils/colors';
import { addContact } from '../Configs/contactsSlice';
import { ButtonSizeVariant } from '../ui-kit/Button';

import { useDispatch } from 'react-redux';
type Options = {
  selectionLimit: number;
  mediaType: 'photo';
};

const AddContact = () => {
  console.log(13)
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [nameValue, setNameValue] = useState<string>('');
  const [surnameValue, setSurnameValue] = useState<string>('');
  const [phoneValue, setPhoneValue] = useState<string>('');
  const [photoValue, setPhotoValue] = useState<string>('');

  const addNewContact = (): void => {
    const contact = {
      name: nameValue,
      surname: surnameValue,
      number: phoneValue,
      photo: photoValue,
    };
    if (nameValue && phoneValue.length >= 6) {
      dispatch(addContact(contact));
      navigation.goBack();
    } else if (!nameValue && phoneValue.length <= 6) {
      Alert.alert('Please enter the Name and the Number');
    } else if (!nameValue && phoneValue.length >= 6) {
      Alert.alert('Please enter the Name ');
    } else {
      Alert.alert('Missing numbers');
    }
  };

  const uploadPhoto = async () => {
    const options: Options = { selectionLimit: 1, mediaType: 'photo' };
    const res = await launchImageLibrary(options);

    const uri = res?.assets?.[0].uri;
    if (uri) {
      setPhotoValue(uri);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.Container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.inputAndButtonContainer}>
        <View style={styles.uploadContainer}>
          <UploadPhoto uri={photoValue} onPress={uploadPhoto} />
        </View>

        <AddContactInput
          title="name"
          value={nameValue}
          onChangeText={text => {
            setNameValue(text);
          }}
        />
        <AddContactInput
          title="surname"
          value={surnameValue}
          onChangeText={text => {
            setSurnameValue(text);
          }}
        />
        <AddContactInput
          keyboardType="numeric"
          title="phone"
          value={phoneValue}
          onChangeText={text => {
            setPhoneValue(text);
          }}
        />

        <View style={styles.buttonContainer}>
          <SaveContact
            title="Save"
            onPass={addNewContact}
            small={ButtonSizeVariant.small}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  uploadContainer: { alignItems: 'center' },
  inputAndButtonContainer: { marginBottom: 10 },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default AddContact;
