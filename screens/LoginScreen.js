import React from 'react';
import { View, Text, TouchableOpacity,Button } from 'react-native';

const Login = ({navigation}) => {
    const pressHandler = ()=>{
        navigation.navigate('Home');
    }
  return (
    <View>
      <Button title='presione aquí' onPress={pressHandler}/>
    </View>
  );
};

export default Login;