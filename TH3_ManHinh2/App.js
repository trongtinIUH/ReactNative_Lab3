import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, Linking } from 'react-native';


const MyApp = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#e0f7fa', justifyContent: 'center', alignItems: 'center' }}>
      {/* Logo Section */}
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            borderWidth: 10,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </View>

      {/* Title Section */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 28, fontWeight: 'bold' }}>GROW</Text>
        <Text style={{ fontSize: 28, fontWeight: 'bold' }}>YOUR BUSINESS</Text>
      </View>

      {/* Description Section */}
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
        <Text style={{ textAlign: 'center',fontSize:16, fontWeight: 'bold' }}>
          We will help you to grow your business using online server
        </Text>
      </View>

      {/* Button Section */}
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffc107',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            width: 100,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            
          }}
          onPress={() => Linking.openURL('https://www.Youtube.com')}
        >
          <Text style={{ color: 'black', fontWeight: 'bold' }}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#ffc107',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            width: 100,
            height: 60,
            justifyContent: 'center',
            alignItems: 'center', 
          }}
          onPress={() => Linking.openURL('https://www.google.com')}
        >
          <Text style={{ color: 'black', fontWeight: 'bold' }}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Section */}
      <View style={{ width: '100%', backgroundColor: '#14d0fc', paddingVertical: 10, alignItems: 'center' }}>
        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', marginBottom: 50 }}>HOW WE WORK?</Text>
      </View>
    </View>
  );
};

export default MyApp;
