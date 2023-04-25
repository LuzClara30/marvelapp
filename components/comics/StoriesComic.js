import * as React from 'react';
import { Text, View,StyleSheet,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
const StoriesComic = ({comicId }) => {
    return(
        <SafeAreaView>
            <View>
                <Text> estoy en Stories 
                    {comicId}
                </Text>
            </View>
        </SafeAreaView>
        );
}

export default StoriesComic;