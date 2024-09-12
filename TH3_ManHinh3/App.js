import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons'; // Thêm thư viện icon nếu chưa cài

const ForgetPassword = () => {
  return (
    <LinearGradient
      colors={['#cef4f6', '#e1f4f5', '#4ed1fa']}
      style={styles.container}
    >
      {/* Icon Section */}
      <View style={styles.iconContainer}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3064/3064197.png' }} // Thay đổi URL nếu cần icon khác
          style={styles.lockIcon}
        />
      </View>

      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>FORGET</Text>
        <Text style={styles.titleText}>PASSWORD</Text>
      </View>

      {/* Description Section */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Provide your account’s email for which you want to reset your password
        </Text>
      </View>

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={20} color="black" style={styles.icon} />
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
        />
      </View>

      {/* Button Section */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockIcon: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -190,
    
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  descriptionContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 200,
    paddingHorizontal: 15,
    backgroundColor: '#eee',
    width: '100%',
   
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  button: {
    position: 'absolute',
    bottom: 130,
    backgroundColor: '#ffc107',
    paddingVertical: 15,
    width: 300,
    paddingHorizontal: 80,
    borderRadius: 5,
    marginTop: -50,
    
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ForgetPassword;
