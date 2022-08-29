import {
  StyleSheet,
  View,
  Modal,
  // ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { color } from '../comman/theme';
import { Styles } from '../comman/styles';

const ModalDescription = ({visible, description, onChangeData}) => {

console.log(description);
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={visible}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <TouchableOpacity
        style={styles.modalBackground}
        activeOpacity={1}
        onPress={() => onChangeData()}>
        <TouchableOpacity style={styles.activityIndicatorWrapper}>
            <Text style={Styles.text14B}>
                {description.name}
            </Text>
          <Text style={Styles.text14L}>
              {description.description}
              </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalDescription;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
      marginVertical:15,
    backgroundColor: '#FFFFFF',
    width: '90%',
    paddingVertical: 10,
    borderRadius: 10,
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth:1,
    paddingHorizontal:20,
    color:color.secondary
  },
});
