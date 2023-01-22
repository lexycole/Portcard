import React, { useState } from 'react';
import tw from 'twrnc';
import { StyleSheet, View, Text,FlatList } from 'react-native';
import { Image } from '@rneui/themed';
import { assetsData } from '../../data/AssetsData';


const AssetsFlatlist = () => {
  const [listItems] = useState(assetsData);

  const ItemView = ({ item }: { item: any }) => {
    return (
          <View style={tw`flex-row items-center px-3 py-3`}>
            <Image 
                source={{uri:item.imageUrl}} 
                style={tw`w-[48px] h-[48px] rounded-full`} />
            <View style={tw`flex-1 space-x-2 pl-[8px]`}>
                <Text style={tw`font-bold text-white text-base`}>{item.assetTitle}</Text>
                <Text style={tw`font-bold text-gray-100 text-xs`}>{item.currency}</Text>
            </View>
            <View>
              <Text style={tw`font-bold text-gray-200 text-base mx-1`}>{item.assetAmount}</Text>
                <Text style={tw`text-gray-200 text-xs mx-5`}>{item.eth}</Text>
            </View>
          </View>
        );
    };  

  return (
    <View>
      <FlatList
        data={listItems}
        renderItem={ItemView}
        keyExtractor={(item, index) => item.id + '-' + index.toString()}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
sectionTitle: {
    marginTop:25,
    marginLeft:25
},
image: {
    width: 300,
    height:190,
    borderRadius: 25,
},
title: {
    fontSize:19,
    fontWeight: 'bold',
},
bottomSection : {
    padding: 25,
    flex:1,
    justifyContent: "space-between",
},
authorRow: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
},
author: {
    flexDirection: 'row',
    alignItems: "center",
    marginRight: 25
},
avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,  
    flex:3   
},
date:{
    textAlign: 'right',
    flex:2,
}
});

export default AssetsFlatlist;