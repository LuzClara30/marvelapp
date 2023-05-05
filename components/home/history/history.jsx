import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './history.style';
import { SIZES, icons } from '../../../constants';

const searchTypes = ["creators", "comics", "characters"];

const History = ({ btnLateFinding, lastItemId, busqueda, navigation }) => {
    //const [selectedType, setSelectedType] = useState();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Check your lastest finding:</Text>
            </View>

            <TouchableOpacity
                style={styles.containerHistory}
                onPress={() => {
                    btnLateFinding ?
                        busqueda === 'characters' ?
                            navigation.navigate('Characters', { characterId: lastItemId })
                            : busqueda === 'creators' ?
                                navigation.navigate('Creators', { characterId: lastItemId })
                                : navigation.navigate('ComicsScreen', { comicId: lastItemId }):
                                console.log("not active")

                }}
            >
                <Image
                    source={btnLateFinding ? icons.history : icons.historyGray}
                    resizeMode='contain'
                    style={styles.searchBtnImage}
                />
            </TouchableOpacity>

        </View >
    );
};

export default History;