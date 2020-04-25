import * as React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, KeyboardAvoidingView } from 'react-native';

import SearchInput from './components/SearchInput';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const city = "San Francisco";
const weather = "Light Cloud";
const temperature = "24°";

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behaviour="padding">
      <Text style={[styles.largeText, styles.textStyle]}>{city}</Text>
      <Text style={[styles.smallText, styles.textStyle]}>{weather}</Text>
      <Text style={[styles.largeText, styles.textStyle]}>{temperature}</Text>
      <SearchInput placeholder="Search any city"/>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular': 'Roboto',
  },
  largeText: {
    fontSize: 44,
    textAlign: 'center',
    margin: 10,
  },
  smallText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  
});
