import * as React from 'react';
import { 
  Platform, StyleSheet, Text, 
  View, ImageBackground, KeyboardAvoidingView,
  ActivityIndicator, StatusBar
} from 'react-native';

import getImageForWeather from './utils/getImageForWeather';
import {fetchLocationId, fetchWeather} from './utils/api';
import SearchInput from './components/SearchInput';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      city: '',
      temperature: 0,
      weather: '',
    };
  }

  componentDidMount() {
    this.handleUpdateCity('Rome');
  }

  handleUpdateCity = async city => {
    if(!city) return;
    this.setState({loading: true},  async () => {
      try {
        const cityId = await fetchLocationId(city);
        const {location, weather, temperature} = await fetchWeather(cityId);
        
        this.setState({
          loading: false,
          error: false,
          city: location,
          temperature,
          weather,
        });
      } catch (e) {
        this.setState({
          loading: false, 
          error: true,
        });
        console.log(e);
      }

    });
  }

  render() {
    const {loading, error, city, temperature, weather} = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behaviour="padding">
        <StatusBar barStyle="light-content"/>
        <ImageBackground
          source={getImageForWeather(weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}>
          <View style={styles.detailsContainer}>
            <ActivityIndicator animating={loading} color='white' size='large'/>
              {!loading && (
                <View>
                  {error && (
                    <Text style={[styles.smallText, styles.textStyle]}>
                      Could not load weather, please try with a different city.
                    </Text>
                  )}

                  {!error && (
                    <View>
                      <Text style={[styles.largeText, styles.textStyle]}>{city}</Text>
                      <Text style={[styles.smallText, styles.textStyle]}>{weather}</Text>
                      <Text style={[styles.largeText, styles.textStyle]}>
                        {`${Math.round(temperature)}°`}
                      </Text>   
                    </View>               
                  )}

                  <SearchInput placeholder="Search any city"
                          onSubmit={this.handleUpdateCity}/>
                </View>
              )}
            
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
