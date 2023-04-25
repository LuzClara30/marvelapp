import * as React from 'react';
import { Text, View,StyleSheet,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
const CreatorsComic = ({comicId }) => {
    return(
        <SafeAreaView>
            <View>
                <Text> estoy en Creators 
                    {comicId}
                </Text>
            </View>
        </SafeAreaView>
        );
}

export default CreatorsComic;