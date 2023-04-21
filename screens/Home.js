import React, {useState} from 'react';
import {  View, ScrollView, SafeAreaView,Text} from 'react-native';
import  {COLORS, images, SIZES} from '../constants';
import Welcome from '../components/home/welcome/Welcome';

const Home = ({navigation}) => {
    const [searchTerm, setSearchTerm] = useState("");
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
                        handleClick={() => {
                            }}
                    />

                </View>
            </ScrollView>
      
    </SafeAreaView>

  );
};

export default Home;