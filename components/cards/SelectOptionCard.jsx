import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './selectoptioncard.style';
import { icons } from '../../constants';

const SelectOptionCard = ({ item, setActiveSearchType, selectedType, setSelectedType }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedType, item)}
      onPress={() => {
        setActiveSearchType(item);
        setSelectedType(item);
      }}
    >
      <View style={styles.infoContainer}>
        <View style={styles.infoOptions1}>
          <Text style={styles.options}>
            {item}
          </Text>
        </View>
        <View style={styles.infoOptions2}>
        <Image
          style={styles.logoOptions}
          source={item=== 'characters'? icons.thanos: item=== 'creators'? icons.stan: icons.comics}
        />
        </View>
      </View>
    </TouchableOpacity>
  )
};

export default SelectOptionCard;