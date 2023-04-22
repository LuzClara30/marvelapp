import { View, Text, TouchableOpacity } from 'react-native'

import styles from './selectoptioncard.style';

const SelectOptionCard = ({item,setActiveSearchType,selectedType,setSelectedType}) => {
  return (
    <TouchableOpacity 
    style = {styles.container(selectedType, item)}
    onPress={() => {
      setActiveSearchType(item);
      setSelectedType(item);
    }}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.option()} numberOfLines={1}> 
        {item}
        </Text>
      </View>
    </TouchableOpacity>
  )
};

export default SelectOptionCard;