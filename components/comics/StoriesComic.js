import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { COLORS, FONT, SIZES } from "../../constants";
import { FlatGrid } from "react-native-super-grid";
import { ListItem } from "@react-native-material/core";
import axios, { all } from "axios";
const StoriesComic = ({ comicId }) => {
  const [busqueda, setbusqueda] = useState(comicId);
  const [stories, setStories] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/comics/${busqueda}/stories?ts=1&apikey=60aaa1ccf66c273c5d5983f388993fd1&hash=914796b1123c53d97218163f05ce53c5` //aqui este url no tiene que cambiar a comis?
      )
      .then((res) => {
        setStories(res.data.data.results);
      })
      .catch((error) => console.log(error));
  }, [busqueda]);
  if (stories.length != 0) {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <ScrollView style={{ flex: 1 }}>
          <Text style={styles.title}>STORIES</Text>
          {stories.map((elemento, index) => (
            <View key={index}>
              <Text numberOfLines={3} style={styles.itemName}>{elemento.title}</Text>
              <Text style={styles.creatorsLabel}>Creators</Text>
              {elemento.creators.items.map((element, index) => (
                <ListItem
                  disabled={true}
                  key={index}
                  title={element.name}
                  secondaryText={element.role}
                />
              ))}
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default StoriesComic;
const styles = StyleSheet.create({
  creatorsLabel: {
    marginTop: 10,
    marginLeft: 15,
    textAlign: "left",
    fontSize: 25,
    color: COLORS.darkred,
    fontWeight: "300",
  },
  title: {
    textAlign: "center",
    fontFamily: FONT.bold,
    fontSize: 40,
    color: COLORS.red,
    marginTop: 20,
  },
  itemName: {
    marginTop: 10,
    marginLeft: 15,
    textAlign: "center",
    fontSize: 25,
    textTransform: "capitalize",
    color: COLORS.darkblue,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
