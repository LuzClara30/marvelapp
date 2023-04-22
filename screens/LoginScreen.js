import React from 'react';
import { View, Text, TouchableOpacity,Button,StyleSheet,Image } from 'react-native';
import { images } from '../constants';
import { Alert } from 'react-native';

import * as Google from 'expo-auth-session/providers/google';




const Login = ({navigation}) => {

  const [accessToken, setAccessToken] = React.useState();
  const [user, setUser] = React.useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
      androidClientId: '770865736932-3hsmqplc8tqsfi8jscm9mrk9j17upvvf.apps.googleusercontent.com',
      iosClientId: '770865736932-qikoen631mkj0fsohgjt8nrjdl5ng4tl.apps.googleusercontent.com',
      expoClientId: '770865736932-k69r5imm2497skf4h9iu7re3fgtlsl2v.apps.googleusercontent.com',
  });
  React.useEffect(() => {
    if (response?.type === 'success') {
        setAccessToken(response.authentication.accessToken);
    }
}, [response]);

React.useEffect(() => {
    if (accessToken !== undefined) {
        fetchUserInformation();
    }
}, [accessToken]);

React.useEffect(() => {
    if (user !== null) {
      Alert.alert(
        
        'Bienvenido(a)',
        'Bienvenido fanatico(a) '+user.name,
       
      );
        console.log("name: " + user.name);
        console.log("email: " + user.email);
        navigation.navigate('Home');
    }
}, [user]);

const fetchUserInformation = async () => {
    let response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${accessToken}` }
    });
    const data = await response.json();
    setUser(data);
}


   
return (
  <View style={styles.container}>
          <Text> </Text>
          <Text> </Text>
          <Text style={{ fontSize: 40, fontWeight: 'bold',  color: '#E84236' }}>        Welcome to </Text>
          <Text style={{ fontSize: 40, fontWeight: 'bold',  color: '#E84236' }}>    Marvel Universe</Text>
          <Text> </Text>
          <Text> </Text>
          <TouchableOpacity
              style={{ width: 170, height: 80, marginBottom: 100, flex: 1 / 4 }}
              disabled={!request}
              onPress={() => { promptAsync({ useProxy: true, showInRecents: true }) }}
          >
              <Image source={images.btn} style={{width: 395, height: 60,top:20 } } resizeMode='contain' />
          </TouchableOpacity>
          
      
  </View> 
)
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'white',
},

});
export default Login;

