import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

const PaymentDropdown = ({ options, onSelectPayment }) => {
  return (
    <View style={tw`bg-white p-4`}>
      {options.map((option, index) => (
        <TouchableOpacity key={index} onPress={() => onSelectPayment(option.screenName)}>
          <Text>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PaymentDropdown;
