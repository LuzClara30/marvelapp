import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import GridFlatList from 'grid-flatlist-react-native';//SE DEBE INSTALAR******
import styles from './selectoption.style'
import { SIZES } from '../../../constants';
import SelectOptionCard from '../../cards/SelectOptionCard';

const searchTypes = ["creators", "comics", "characters"];

const Selectoption = ({setActiveSearchType}) => {
  const [selectedType, setSelectedType] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Select your searching option:</Text>
      </View>

      <View style={styles.cardsContainer} >
        <FlatList
          data={searchTypes}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
          renderItem={({item}) => (
            <SelectOptionCard
            item={item}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            setActiveSearchType={setActiveSearchType}
            />
          )}
          contentContainerStyle={{ columnGap: SIZES.small }}
        />
      </View>
    </View>
  );
};

export default Selectoption;