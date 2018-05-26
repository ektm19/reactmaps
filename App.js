import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.528196,
          longitude: 115.327458
        },
        title: 'Babi Guling Pande Egi',
        subtitle: 'Jl. Bukit Buluh, Beng, Kec. Gianyar, Kabupaten Gianyar, Bali 80513'
      },
      {
        key:2,
        latlng: {
          latitude:-8.494280,
          longitude: 115.329088
        },
        title: 'Warung Babi Guling Bangun Lemah',
        subtitle: 'Jl. Desa Apuan, Apuan, Susut, Bangli Regency, Bali 80661'
      },
      {
        key:3,
        latlng: {
          latitude:-8.643996,
          longitude: 115.239993
        },
        title: 'Warung Nasi Men Lotri',
        subtitle: 'Jl. Noja l No.14, Kesiman Petilan, Denpasar Timur, Kesiman Petilan, Denpasar Tim., Kota Denpasar, Bali 80237'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.368453,
          longitude: 115.192460
        },
        title: 'Babi Genyol Men Darta',
        subtitle: 'Jl. Mekarsari - Baturiti Bedugul No.5, Mekarsari, Baturiti, Kabupaten Tabanan, Bali 82191'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
            Aplikasi Tempat Makan Enak
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> Wilayah Bali </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
