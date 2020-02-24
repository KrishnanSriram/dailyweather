/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, KeyboardAvoidingView, Text, Platform, View, ImageBackground} from 'react-native';
import SearchInput from './components/SearchInput';
import getImageForWeather from './utils/getImageForWeather';

const App = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ImageBackground source={getImageForWeather('Light Cloud')} style={styles.imageContainer} imageStyle={styles.image}>
        <View style={{flex: 1, alignItems:'center', justifyContent: 'flex-end'}}>
          <Text style={[styles.textStyle, styles.largeText]}>San Francisco</Text>
          <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
          <Text style={[styles.largeText, styles.textStyle]}>24</Text>
        </View>
        <SearchInput placeholderText="Search any city" />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    marginTop: 15,
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  textInput: {
    height: 40,
    backgroundColor: '#666',
    color: '#fff',
    marginTop: 25,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});

export default App;
