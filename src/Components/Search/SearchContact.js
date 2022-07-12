import React from 'react';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import SearchModalWindow from './SeachModalWindow';
import SearchButton from './SearchButton';

const SearchContact = ({ contacts }) => {
  const [modalWindow, setModalWindow] = useState(false);

  const changeModalWindowState = () => {
    setModalWindow(!modalWindow);
  };

  return (
    <>
      <SearchModalWindow
        contacts={contacts}
        onPress={changeModalWindowState}
        visible={modalWindow}
      />
      <TouchableOpacity onPress={changeModalWindowState}>
        <SearchButton />
      </TouchableOpacity>
    </>
  );
};

export default SearchContact;
