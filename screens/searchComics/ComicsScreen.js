import * as React from 'react';
import { Text, View,StyleSheet,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';
import CharacterComic from '../../components/comics/CharactersComic';
import StoriesComic from '../../components/comics/StoriesComic';
import CreatorsComic from '../../components/comics/CreatorsComic';
import { COLORS,FONT } from '../../constants';
const Comics = ({navigation }) => {
    const comicId =navigation.getParam("comicId");
    const [selected, setSelected] = React.useState("");
    const data = [
        {key:'1', value:'Characters'},
        {key:'2', value:'Stories'},
        {key:'3', value:'Creators'},

    ]
    return(
        <SafeAreaView style={styles.container}>
         <View>
         <SelectList styles={styles.container}
         fontFamily={FONT.medium}
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        />
         </View>
         {selected === "Characters"? <CharacterComic comicId = {comicId}/>
         :selected === "Stories"? <StoriesComic comicId = {comicId}/>:  <CreatorsComic comicId = {comicId}/>}
        </SafeAreaView>
    );
}
export default Comics;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        backgroundColor: COLORS.white,
      },
})