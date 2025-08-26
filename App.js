import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from './src/components/Button';
import Input from './src/components/Input';

const App = () => {
  return (
    <View>
      <Input placeholder={'Enter Username'}></Input>
      <Input placeholder={'Enter Password'}></Input>

      <Button title={'Login'} iconRight="logo-instagram"></Button>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
