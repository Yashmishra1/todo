import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../components/CustomHeader';
import CustomButton from '../components/CustomButton';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/reducers/todoSlice';
import { useNavigation } from '@react-navigation/native';

const AddTodo = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const onSubmit = async () => {
    if(value.trim() == "" || description.trim() == "")
    {
      Alert.alert("Please enter something")
      return;
    }
    await dispatch(addTodo({title : value, desc : description}))
    navigation.goBack()
  };
  return (
    <View style={styles.container}>
      <CustomHeader title="Add new todo" isBackButton={true} />

      <TextInput
        placeholder="Enter you text here!"
        value={value}
        onChangeText={setValue}
        style={[styles.input,styles.morePadding
        ]}
      />
      <TextInput
        placeholder="Enter your Description!"
        value={description}
        onChangeText={setDescription}
        style={[styles.input, styles.minHeight]}
        numberOfLines={10}
        multiline
        maxLength={120}
      />
      <CustomButton title="ADD" onPress={onSubmit} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    marginHorizontal : 10,
    marginBottom : 10,
    borderRadius: 10,
    fontSize: 16 ,
  },
  morePadding : {
    marginTop : 20,
  },
  minHeight : {
    minHeight : 120,
    textAlignVertical:"top"
  }
});

export default AddTodo;
