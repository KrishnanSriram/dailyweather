import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const SearchInput = ({placeholderText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCorrect={false}
        placeholder={placeholderText}
        placeholderTextColor="white"
        clearButtonMode="always"
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
  textInput: {
    color: 'white',
    height: 40,
    borderRadius: 5,
    // borderWidth: 0.1,
    backgroundColor: '#666',
  },
});

export default SearchInput;
