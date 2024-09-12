import React from 'react';
import { Text, View, Image, Button, Linking } from 'react-native';

const Myapp = () => {
    return ( 
        <View style ={{flex:1}}>
              <View style ={{flex:2, backgroundColor:'pink', justifyContent:'center', alignItems:'center'}}> 
              <Image
                source = {{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
                style = {{width: 150, height: 150}}
            />
            </View>
         
            <View style = {{ flex:1, backgroundColor:'pink' ,alignItems:'center'}}>
            <Text style={{fontSize:24,fontWeight: 'bold'}}>Grow </Text>
            <Text style={{fontSize:24,fontWeight: 'bold'}}>Your bussiness</Text>
            </View>
            <View style = {{ flex:1, backgroundColor:'pink',alignItems:'center'}}>
            <Text style={{fontWeight:'bold', textAlign:'center'}}>we will help you to grow bussiness online server to buy shoppefood sale voucher 50k </Text>
            </View>
       
            
            <View style = {{
                                  flex: 1,
                                  flexDirection: 'row', alignItems: 'center',
                                  justifyContent: 'space-around',
                                  backgroundColor: 'pink',
                width: '100%',
            
            }}>
                <View style={{
                    borderWidth: 5,  // thickness of the border
                    borderColor: 'pink',  // color of the border
                    borderRadius: 10,  // radius for the rounded corners
                    overflow: 'hidden',  // this is required for rounded corners
                    width: '100px'
                }}>
                <Button
                    title = "LOGIN"
                     onPress = {() => Linking.openURL('https://www.Youtobe.com')}
                />
                </View>
                <View style={{
                    borderWidth: 6,  // thickness of the border
                    borderColor: 'pink',  // color of the borderd xin chào
                    borderRadius: 10,  // radius for the rounded corners
                    overflow: 'hidden',  // this is required for rounded corners
                     width: '100px'
                }}>
                <Button
                    title = "SIGN UP"
                   onPress = {() => Linking.openURL('https://www.google.com')}
                />
                </View>
                
                </View>
       
        </View>
    );
};
export default Myapp;