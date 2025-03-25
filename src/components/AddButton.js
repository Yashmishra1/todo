import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const AddButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('addTodo')}
      style={styles.container}>
      <Image
        style={{width: 30, height: 30, tintColor: '#fff'}}
        source={require('../assets/images/plus.png')}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    right: 20,
    borderRadius: 120,
    backgroundColor: '#0090B0',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 10,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 2,
    shadowOpacity: 0.7,
  },
});

export default AddButton;
