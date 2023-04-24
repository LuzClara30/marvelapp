import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, StyleSheet, Image } from "react-native";
import { COLORS, FONT, SIZES, images } from "../../constants";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ImageBackground } from "react-native-web";

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

  const imagenes = [
    { id: 1, uri: images.hulkCreator },
    { id: 2, uri: images.spideyCreator },
    { id: 3, uri: images.wolverineCr },
    
  ];
  if (personaje.length != 0) {
    return (
      <ImageBackground
        style={styles.ImageBackground}
        source={shuffle(imagenes)}
        resizeMode="cover"
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
          <View>
            <Image
              style={styles.image}
              source={{ uri: path + "." + extension }}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Text style={styles.title}>{personaje.name}</Text>
          </View>
          <View>
            <Text style={{ textAlign: "center" }}>{personaje.description}</Text>
            <Text style={styles.subtitle}>Contenido</Text>
            <Text style={styles.text}>
              {"COMICS: " + personaje.comics.available}
            </Text>
            <Text style={styles.text}>
              {"SERIES: " + personaje.series.available}
            </Text>
            <Text style={styles.text}>
              {"STORIES: " + personaje.stories.available}
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
};

export default Creators;
const styles = StyleSheet.create({
  title: {
    textAlign: "left",
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.red,
    marginTop: 2,
  },
  subtitle: {
    textAlign: "center",
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.blue,
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 300,
  },
  text: {
    textAlign: "center",
    fontFamily: FONT.bold,
    color: "white",
  },
});
