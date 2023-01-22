import React, { useState } from 'react';
import tw from 'twrnc';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { Divider, Image } from '@rneui/themed';
import { historyData } from '../../data/HistoryData';
import { useFonts, Rubik_300Light, Rubik_400Regular } from '@expo-google-fonts/rubik';


// Spending History Flatlist
const SpendingHistoryFlatlist = () => {
  // list Items
  const [listItems] = useState(historyData);
  // Decalre Fonts Loaded
  const [ fontsLoaded ] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
  });
  //  Load no font if no font is found
  if (!fontsLoaded) {
    return null;
  }

  // Item View   
  const ItemView = ({ item }: { item: any }) => {
    return (
      <ScrollView>
        <View style={tw`flex-row items-center`}>
          {/* Spending Image */}
          <Image
            source={{ uri: item.imageUrl }}
            style={tw`w-[48px] h-[48px] rounded-full my-[16px] ml-[16px]`} />
          {/* Spending Title and Spending Date  */}
          <View style={tw`flex-1 pl-[8px] my-[20px]`}>
              {/* Spending Title */}
                <Text style={[tw`text-white text-[16px]`,{fontFamily:'Rubik_400Regular'}]}>{item.transactionTitle}</Text>
                {/* Spending Date */}
                <Text style={[tw`text-[#F3F3F3] text-[12px]`,{fontFamily:'Rubik_400Regular'}]}>{item.date} <Text style={tw`text-[#A2A1A2] text-[12px]`}>{item.currency}</Text></Text>
            </View>
          {/* Spending Currency and Eth amount */}
          <View style={tw`my-[20px] mr-[16px]`}>
              {/* Spending Currency */}
              <Text style={[tw`text-[#FFFFFF] text-[16px] mx-1`,{fontFamily:'Rubik_400Regular'}]}>{item.transactionPrt}</Text>
              {/* Eth amount */}
                <Text style={[tw`text-[#A2A1A2] text-[12px] mx-5`,{fontFamily:'Rubik_400Regular'}]}>{item.eth}</Text>
          </View>
        </View>
      </ScrollView>
    );
  };

  const ItemSeparatorView = () => {
    return (
      //Item Separator
      <Divider />
    );
  };

  return (
    <View>
      <FlatList
        data={listItems}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
        keyExtractor={(item, index) => item.id + '-' + index.toString()}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

export default SpendingHistoryFlatlist;