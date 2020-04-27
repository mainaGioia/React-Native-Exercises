import * as React from 'react';
import { 
  Platform, StyleSheet, Text, 
  View, ImageBackground, KeyboardAvoidingView 
} from 'react-native';

import getImageForWeather from './utils/getImageForWeather';
import SearchInput from './components/SearchInput';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: "Innsbruck",
    };
  }

  handleUpdateCity = city => {
    this.setState({city});
  }

  render() {
    const weather = "Light Cloud";
    const temperature = "24°";
    return (
      <KeyboardAvoidingView style={styles.container} behaviour="padding">
        <ImageBackground
          source={getImageForWeather('Clear')}
          style={styles.imageContainer}
          imageStyle={styles.image}>
          <View style={styles.detailsContainer}>
            <Text style={[styles.largeText, styles.textStyle]}>{this.state.city}</Text>
            <Text style={[styles.smallText, styles.textStyle]}>{weather}</Text>
            <Text style={[styles.largeText, styles.textStyle]}>{temperature}</Text>
            <SearchInput placeholder="Search any city"
                          onSubmit={this.handleUpdateCity}/>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null, 
    height: null, 
    resizeMode: 'cover'
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular': 'Roboto',
    color: 'white',
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
