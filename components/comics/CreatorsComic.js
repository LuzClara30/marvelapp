import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { COLORS, FONT, SIZES } from "../../constants";
import { ListItem } from "@react-native-material/core";
import axios, { all } from "axios";

const CreatorsComic = ({ comicId }) => {
  const [busqueda, setbusqueda] = useState(comicId);
  const [creators, setCreators] = useState([]);
  const fondo = {
    uri: "https://i5.walmartimages.com/asr/2cca00b8-6884-4e7c-94bd-559dc18a4227.6d3322d4e23b30d0d59e4bdbfe05365a.jpeg",
  };
  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/comics/${busqueda}/creators?ts=1&apikey=60aaa1ccf66c273c5d5983f388993fd1&hash=914796b1123c53d97218163f05ce53c5` //aqui este url no tiene que cambiar a comis?
      )
      .then((res) => {
        setCreators(res.data.data.results);
      })
      .catch((error) => console.log(error));
  }, [busqueda]);
  if (creators.length != 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <ScrollView style={{ flex: 1 }}>
          <ImageBackground
            source={fondo}
            resizeMode={"cover"}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <Text style={styles.title}>CREATORS</Text>
            {creators.map((elemento, index) => (
              <View key={index}>
                <ListItem
                  disabled={true}
                  key={index}
                  title={elemento.fullName}
                  secondaryText={
                    "Number of related comics: " + elemento.comics.available
                  }
                />
              </View>
            ))}
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default CreatorsComic;
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
    textShadowColor: "white",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
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
