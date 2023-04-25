import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { COLORS,images } from "../constants";
import ScreenHeaderBtn from "../components/header/ScreenHeaderBtn";
import React from "react";
import Home from "../screens/Home";
import Login from "../screens/LoginScreen";
import Characters from "../screens/searchCharacters/Characters";
import Search from "../screens/Search";
import Creators from "../screens/searchCharacters/Creators";
import Comics from "../screens/searchComics/ComicsScreen";

const headerStyle ={
    title: "Marvel app",
    headerTintColor: COLORS.lightWhite,
    headerStyle: { backgroundColor: COLORS.darkblue },
    headerShadowVisible: false,
    headerRight: () => (
        <ScreenHeaderBtn iconUrl={images.marvel}/>
    ),
}
const screens = {
    Login: {
        screen: Login,
        navigationOptions: headerStyle,
    },
    Home:{
        screen: Home,
        navigationOptions: headerStyle,
                       
    },
    Search:{
        screen: Search,
        navigationOptions: headerStyle,
                       
    },
    Characters:{
        screen: Characters,
        navigationOptions: headerStyle,
                       
    },
    Creators:{
        screen: Creators,
        navigationOptions: headerStyle,
                       
    },
    ComicsScreen:{
        screen: Comics,
        navigationOptions: headerStyle,

    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);