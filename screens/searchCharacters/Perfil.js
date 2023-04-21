import React from 'react';
import { View, Text, TouchableOpacity,Button } from 'react-native';

const Perfil = ({route}) => {
  const { characterId } = route.params;
  console.log(characterId);
  return (
    <View>
     <Text>Perfil</Text>
    </View>
  );
};

export default Perfil;