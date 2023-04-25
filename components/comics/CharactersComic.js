import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ImageBackground
} from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";
import axios from "axios";

const CharacterComic = ({ comicId }) => {
  const width = Dimensions.get("screen").width;
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [busqueda, setbusqueda] = useState(comicId);
  const [consulta, setConsulta] = useState([]);
  const ESPACIO_CONTENEDOR = width * 0.7;
  const fondo = {uri: "https://i5.walmartimages.com/asr/2cca00b8-6884-4e7c-94bd-559dc18a4227.6d3322d4e23b30d0d59e4bdbfe05365a.jpeg"};
  const ESPACIO = 10;
  renderItem = ({ item, index }) => {
    const inputRange = [
      (index - 1) * ESPACIO_CONTENEDOR,
      index * ESPACIO_CONTENEDOR,
      (index + 1) * ESPACIO_CONTENEDOR,
    ];
    const outputRange = [0, -50, 0];
    const translateY = scrollX.interpolate({
      inputRange,
      outputRange,
    });
    return (
      <View
        style={{
          
          maxWidth: ESPACIO_CONTENEDOR,
        }}
      >
        <Animated.View
          style={{
            
            marginHorizontal: ESPACIO,
            padding: ESPACIO,
            borderRadius: 34,
            backgroundColor: "#fff",
            alignItems: "center", //forma parte del movimiento circulart sin este elemento las imagenes se mueven en línea horizontal
            transform: [{ translateY }],
          }}
        >
          <Image
            style={styles.posterImage}
            source={{
              uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
            }}
          />
          <Text style={styles.title}>{item.name}</Text>
          <Text numberOfLines={7} style={styles.description}>{item.description}</Text>
        </Animated.View>
      </View>
    );
  };
  useEffect(() => {
    if (busqueda) {
      axios
        .get(
          `https://gateway.marvel.com:443/v1/public/comics/${busqueda}/characters?ts=1&apikey=60aaa1ccf66c273c5d5983f388993fd1&hash=914796b1123c53d97218163f05ce53c5`
        )
        .then((res) => {
          setConsulta(res.data.data.results);
        })
        .catch((error) => console.log(error));
    }
  }, [busqueda]);
  if (consulta.length != 0) {
    return (
      <View style={styles.container}>
      <ImageBackground source={fondo} resizeMode={"cover"} style={{flex:1, justifyContent: "center"}}

      >
        
        <Animated.FlatList
          data={consulta}
          //permite observar como un movimiento circular
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          snapToInterval={ESPACIO_CONTENEDOR}
          scrollEventThrottle={16}
          contentContainerStyle={{
            paddingTop: 120,
          }}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      
      </ImageBackground>
      </View>
    );
  }
};

export default CharacterComic;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  posterImage: {
    width: "100%",
    height: Dimensions.get("screen").width * 0.7 * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.darkred,
    marginTop: 2,
  },
  description: {
    fontFamily: FONT.medium,
    fontSize: 10,
    color: COLORS.darkblue,
    marginTop: 2,
  },
});
