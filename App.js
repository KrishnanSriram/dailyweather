/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  Platform,
  View,
  ImageBackground,
} from 'react-native';
import SearchInput from './components/SearchInput';
import getImageForWeather from './utils/getImageForWeather';
import {fetchLocationId, fetchWeather} from './utils/api';

const App = () => {
  const [location, setLocation] = useState('Dublin, OH');
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [error, setError] = useState(false);

  const onLocationSubmit = async () => {
    setLocation('');
    //TODO: Invoke API to fetch weather information!
    try {
      setLoading(true);
      console.log('Fetching location ID information');
      const locationId = await fetchLocationId("Dublin");
      console.log('Location ID', locationId, " Now fetching weather details");
      const {location, weather, temperature} = await fetchWeather(locationId);
      setWeather(weather);
      setTemperature(temperature);
      setLoading(false);
      console.log("Updated information", weather, temperature);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <ImageBackground
        source={getImageForWeather('Light Cloud')}
        style={styles.imageContainer}
        imageStyle={styles.image}>
        <View style={styles.detailContainer}>
          <Text style={[styles.textStyle, styles.largeText]}>
            San Francisco
          </Text>
          <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
          <Text style={[styles.largeText, styles.textStyle]}>24</Text>
          <SearchInput
            placeholderText="Search any city"
            location={location}
            onLocationSubmit={onLocationSubmit}
          />
        </View>
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
  detailContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
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
