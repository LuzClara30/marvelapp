import React from 'react';
import { View, Text, TouchableOpacity,Button } from 'react-native';

const Comics = ({route}) => {
  const { characterId } = route.params;
  console.log(characterId);
  return (
    <View>
     <Text>Comics</Text>
    </View>
  );
};

export default Comics;