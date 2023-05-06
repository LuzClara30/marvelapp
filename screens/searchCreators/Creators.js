import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, StyleSheet, Image,ImageBackground } from "react-native";
import { COLORS, FONT, SIZES, images } from "../../constants";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Creators = ({ navigation }) => {
  const characterId = navigation.getParam("characterId");

  const [searchTerm, setSearchTerm] = useState(characterId);
  const [personaje, setPersonaje] = useState([]);
  const [path, setPath] = useState("");
  const [extension, setExtension] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/creators/${searchTerm}?&ts=1&apikey=60aaa1ccf66c273c5d5983f388993fd1&hash=914796b1123c53d97218163f05ce53c5`
      )
      .then((res) => {
        setPersonaje(res.data.data.results[0]);
        setPath(res.data.data.results[0].thumbnail.path);
        setExtension(res.data.data.results[0].thumbnail.extension);
      })
      .catch((error) => console.log(error));
  }, [searchTerm]);

  
  if (personaje.length != 0) {
    return (
      
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <View style={styles.container}>
      
      <View style={styles.textContainer}>
        <Text style={styles.title}>NOMBRE:</Text>
        <Text style={styles.text}> {personaje.fullName} </Text>
        <Text style={styles.title}>SERIES:</Text>
        <Text style={styles.text}> {""+personaje.series.available}</Text>
        <Text style={styles.title}>STORIES:</Text>
        <Text style={styles.text}>{" "+personaje.stories.available}</Text>

       
        
      </View>
      <Image
              style={styles.image2}
              source={images.user} />
    </View>
    <Image
              style={styles.image}
              source={images.team2} />
        </SafeAreaView>
        
      
      
    );
  }
};

export default Creators;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  text: {
    fontSize: 18,
    color: 'blue',
    fontWeight: 'bold',

  },
  image: {
    width: "100%",
    height: "100%",
  },
  image2: {
    width: 100,
    height: 100,
    left:100
  },
 

 
  
});
