import React, { useState } from 'react';
import tw from 'twrnc';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';
import { cardTransactionHistory } from '../../data/CardTransactionHistoryData';
import { Divider, Image } from '@rneui/themed';


const CardsTransactionHistory = () => {
  const [listItems] = useState(cardTransactionHistory);

  const ItemView = ({ item }: { item: any }) => {
    return (
      <ScrollView>
        <View style={tw`flex-row items-center p-3`}>
          <View style={tw`flex-1 space-x-2`}>
            <Text style={tw`text-white text-base`}>Transaction History</Text>
            <Text style={tw`text-gray-100 text-xs`}>Showing your wallet</Text>
          </View>
          <View>
            <Text style={tw`text-gray-100 text-xs text-[#00ff00]`}>View all</Text>
          </View>
        </View>

        <View style={tw`flex-row items-center p-3`}>
          <Image
            source={{ uri: item.imageUrl }}
            style={tw`w-[48px] h-[48px] rounded-full`} />
          <View style={tw`flex-1 space-x-2 pl-[8px]`}>
            <Text style={tw`text-white text-base`}>{item.title}</Text>
            <Text style={tw`text-gray-100 text-xs`}>{item.date}</Text>
          </View>
          <View>
            <Text style={tw`text-gray-100 text-xs`}>{item.amount}</Text>
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

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionTitle: {
    marginTop: 25,
    marginLeft: 25
  },
  image: {
    width: 300,
    height: 190,
    borderRadius: 25,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  bottomSection: {
    padding: 25,
    flex: 1,
    justifyContent: "space-between",
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
    flex: 3
  },
  date: {
    textAlign: 'right',
    flex: 2,
  }
});
export default CardsTransactionHistory;