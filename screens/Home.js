import React, {useState} from 'react';
import {  View, ScrollView, SafeAreaView,Text} from 'react-native';
import  {COLORS, images, SIZES} from '../constants';
import Welcome from '../components/home/welcome/Welcome';
import Selectoption from '../components/home/selectOption/selectOption';


const Home = ({navigation}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeSearchType, setActiveSearchType] = useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>

      <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    padding: SIZES.medium
                }}>
                 <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        activeSearchType={activeSearchType}
                        handleClick={(searchTerm, activeSearchType) => {navigation.navigate('Search', {parametro: searchTerm, busqueda: activeSearchType})
                            }}
                    />
                    <Selectoption
                    setActiveSearchType={setActiveSearchType} />
                </View>
            </ScrollView>
      
    </SafeAreaView>

  );
};

export default Home;