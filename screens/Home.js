import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { COLORS, images, SIZES } from '../constants';
import Welcome from '../components/home/welcome/Welcome';
import Selectoption from '../components/home/selectOption/selectOption';
import History from '../components/home/history/history';

const Home = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearchType, setActiveSearchType] = useState("");
  const [lastItemId, setLastItemId] = useState();
  const [busqueda, setBusqueda] = useState("");
  const [btnLateFinding, setBtnLateFinding] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <View style={{
          flex: 1,
          padding: SIZES.medium
        }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            activeSearchType={activeSearchType}
            handleClick={(searchTerm, activeSearchType) => {
              navigation.navigate('Search', { parametro: searchTerm, busqueda: activeSearchType, setBtnLateFinding, setLastItemId, setBusqueda})
            }}
          />
          <Selectoption
            setActiveSearchType={setActiveSearchType} />
          <History
            btnLateFinding={btnLateFinding}
            lastItemId={lastItemId}
            busqueda={busqueda}
            navigation={navigation}
          />
        </View>
    </SafeAreaView>

  );
};

export default Home;