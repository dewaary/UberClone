import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import tw from 'twrnc';
import {useSelector} from 'react-redux';
import {selectOrigin} from '../slices/navSlice';

const Map = () => {
  const origin = useSelector(selectOrigin);
  console.log('ini origin', origin);
  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default Map;

const styles = StyleSheet.create({});
