import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Comics from './Comics';
import Perfil from './Perfil';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants';

const Tab = createBottomTabNavigator();
const Characters = ({navigation }) => {
    const characterId =navigation.getParam("characterId");
  
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown:false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Perfil') {
            iconName = focused
              ? 'person-circle'
              : 'person-circle-outline';
          } else if (route.name === 'Comics') {
            iconName = focused ? 'book' : 'book-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.red,
        tabBarInactiveTintColor: COLORS.darkblue,
      })}
      >
        <Tab.Screen name="Perfil" component={Perfil} initialParams={{ characterId: characterId }}/>
        <Tab.Screen name="Comics" component={Comics} initialParams={{ characterId: characterId }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Characters;