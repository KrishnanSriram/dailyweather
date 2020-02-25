import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const SearchInput = ({placeholderText, location, onLocationSubmit}) => {
  const [inputText, setInputText] = useState(location);
  // console.log('Location information is', location);
  const handleChangeText = e => {
    setInputText(e);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={location}
        autoCorrect={false}
        placeholder={placeholderText}
        placeholderTextColor="white"
        clearButtonMode="always"
        style={styles.textInput}
        onChangeText={handleChangeText}
        onSubmitEditing={onLocationSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
  textInput: {
    color: 'white',
    height: 40,
    width: 300,
    borderRadius: 5,
    padding: 10,
    // borderWidth: 0.1,
    backgroundColor: '#666',
  },
});

export default SearchInput;
