import { DrawerContentScrollView } from '@react-navigation/drawer';
import { StyleSheet, Switch, Text, TouchableOpacity } from 'react-native';
import React from 'react';
const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      style={props.darkMode ? styles.darkContainer : null}>
      <TouchableOpacity
        style={[styles.darkMode, props.darkMode ? styles.darkView : null]}>
        <Text style={[styles.boldTxt, props.darkMode ? styles.darkTxt : null]}>
          Dark Mode
        </Text>
        <Switch
          value={props.darkMode}
          onValueChange={(v) => {
            props.toggleDarkMode();
            props.navigation.closeDrawer();
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.logOut();
        }}
        style={[styles.darkMode, props.darkMode ? styles.darkView : null]}>
        <Text
          style={[
            styles.boldTxt,
            styles.logout,
            props.darkMode ? styles.darkTxt : null
          ]}>
          Log Out
        </Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({
  darkMode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FAFAFA',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10
  },
  boldTxt: {
    fontSize: 20
  },
  darkContainer: {
    backgroundColor: '#23120b'
  },
  darkView: {
    backgroundColor: '#532e1c'
  },
  darkTxt: {
    color: '#c5a880'
  },
  logout: {
    textDecorationLine: 'underline',
    color: 'blue',
    textAlign: 'center'
  }
});