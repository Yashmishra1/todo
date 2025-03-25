import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {deleteTodo, updateTodo} from '../redux/reducers/todoSlice';
import CustomButton from './CustomButton';

const TodoItem = ({item}) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(item?.title);
  const [description, setDescription] = useState(item?.desc);
  const dispatch = useDispatch();
  const deleteHandler = async () => {
    dispatch(deleteTodo(item));
  };

  const onUpdate = async () => {
    dispatch(updateTodo({id: item?.id, title: value, desc: description}));
    setVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text>{item.title}</Text>
          <Text>{item.desc}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => {
              setVisible(true);
            }}>
            <Image
              style={styles.icon}
              source={require('../assets/images/edit.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={deleteHandler}>
            <Image
              tintColor={'red'}
              style={styles.icon}
              source={require('../assets/images/trash.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        transparent={true}
        animationType="slide"
        style={styles.mainModal}
        visible={visible}
        onRequestClose={() => setVisible(false)}>
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
                source={require('../assets/images/close.png')}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
            <View style={styles.modalContainer}>
              <TextInput
                placeholder="Enter you text here!"
                value={value}
                onChangeText={setValue}
                style={[styles.input, styles.morePadding]}
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
              <CustomButton title="UPDATE" onPress={onUpdate} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    backgroundColor: '#f2f2f2',
    margin: 10,
    borderRadius: 20,
    padding: 10,
    elevation: 10,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 2,
    shadowOpacity: 0.7,
  },
  infoContainer: {
    width: '70%',
  },
  iconContainer: {
    width: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  desc: {
    fontSize: 14,
    color: '#888',
    textAlign: 'left',
  },
  icon: {
    width: 24,
    height: 24,
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  morePadding: {
    marginTop: 20,
  },
  minHeight: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    margin: 10,
    width: '90%',
  },
  closeIcon: {
    resizeMode: 'contain',
    position: 'absolute',
    top: 10,
    right: 10,
    width: 20,
    height: 15,
  },
});

export default TodoItem;
