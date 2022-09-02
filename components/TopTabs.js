import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {color} from '../comman/theme';
import {Styles} from '../comman/styles';

const TopTabs = ({activeTabs, onChangeTabs}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={activeTabs == 'A' ? styles.tobBox : styles.tobBoxInactive}
        onPress={() => onChangeTabs('A')}
      >
        <Text
          style={[
            Styles.text14MU,
            activeTabs == 'A' ? styles.isActiveColor : styles.isInActiveColor,
          ]}
        >
          History
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={activeTabs == 'B' ? styles.tobBox : styles.tobBoxInactive}
        onPress={() => onChangeTabs('B')}
      >
        <Text
          style={[
            Styles.text14MU,
            activeTabs == 'B' ? styles.isActiveColor : styles.isInActiveColor,
          ]}
        >
          Medicine
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopTabs;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tobBox: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderColor: color.primary,
  },
  isActiveColor: {color: color.primary},
  isInActiveColor: {color: color.textColor},
  tobBoxInactive: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderColor: color.white,
  },
});
