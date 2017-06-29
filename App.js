import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome!
        </Text>
        <Text style={styles.instructions}>
          This is not the official Home4Students app
        </Text>
        <Text style={styles.instructions}>
          ...but hopefully it can make{'\n'}
          our life easier :)
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
