import {StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import {postReq} from '../services/apiService';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Cog from '../components/Cog';
import Toast from '../components/Toast';
import useToast from '../hooks/useToast';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {toast, showToast, hideToast} = useToast();

  const handleLogin = async () => {
    const url = 'https://q1gdzrt1-5000.inc1.devtunnels.ms/api/users/login';
    const body = {
      username: username,
      password: password,
    };
    try {
      const res = await postReq(url, body, false);
      console.log(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'black',
      }}>
      <View style={{position: 'absolute', top: 40, right: 20}}>
        <Cog iconName={'cog'}></Cog>
      </View>
      {/* <Ionicons name="logo-instagram" size={70} style={styles.icon} /> */}
      <Input
        // label="Username"
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
        // leftIcon="person"
      />
      {/* <AndroidToastExample></AndroidToastExample> */}
      <Input
        // label="Password"
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        // leftIcon="lock-closed"
        // helperText="Min 6 characters"
      />
      <Button
        title={'Log In'}
        // iconRight="logo-instagram"
        // disabled={username === '' || password === ''}
        // onPress={handleLogin}
        onPress={() => showToast('Check your input', 'warning')}
        backgroundColor="#0097ff"></Button>
      <Toast
        visible={toast.visible}
        message={toast.message}
        type={toast.type}
        // duration={toast.duration}
        onHide={hideToast}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'center',
    marginBottom: 20,
    color: 'white',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Billabong',
    color: 'white',
    alignSelf: 'center',
    marginBottom: 40,
  },
});
