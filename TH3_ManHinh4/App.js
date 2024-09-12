import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CodeVerificationScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Giữ trạng thái của 6 ô OTP
  const [enterOtp, setEnterotp] = useState(''); // Giữ trạng thái của OTP đã nhập
  // Hàm xử lý khi nhập vào một ô OTP
  const handleChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Tự động chuyển sang ô tiếp theo khi nhập xong 1 ký tự
    if (text && index < otp.length - 1) {
      const nextInput = `input${index + 1}`;
      const input = inputs[nextInput];
      if (input) input.focus();
    }
  };

  const xuly = () => {
   const otpCode = otp.join('');
   if(otpCode.length< otp.length){
      Alert.alert('Nhập đủ 6 số OTP');
      return; 
  }

   setEnterotp(otpCode);
   Alert.alert('Code OTP đã nhập', otpCode);
  }

  // Lưu tham chiếu tới các ô input OTP
  const inputs = {};

  return (
    <LinearGradient colors={['#cef4f6', '#e1f4f5', '#4ed1fa']} style={styles.container}>
      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>CODE</Text>
        <Text style={styles.subtitleText}>VERIFICATION</Text>
      </View>

      {/* Description Section */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Enter ontime password sent on {"\n"} ++849092605798
        </Text>
      </View>

      {/* OTP Input Section */}
      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={(input) => (inputs[`input${index}`] = input)} // Gán input vào object để dễ dàng focus
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleChange(text, index)}
            value={value}
          />
        ))}
      </View>

      {/* Button Section */}
      <TouchableOpacity style={styles.button} onPress={xuly}>
        <Text style={styles.buttonText}>VERIFY CODE</Text>
      </TouchableOpacity>
   

    {/* Display Entered OTP */}
    {enterOtp ? ( 
    <View style={styles.enteredOtpContainer}>
        <Text style={styles.enteredOtpText}> Entered OTP: {enterOtp}</Text>
      </View>
    ): null }
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
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 80,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 60,
  },
  descriptionContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    
  },
  descriptionText: {
    position: 'relative',
    bottom: 150,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  otpContainer: {
    position: 'relative',
    bottom: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    marginBottom: 20,
    
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#000',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    borderRadius: 5,
  },
  button: {
    position: 'relative',
    bottom: 100,
    backgroundColor: '#ffc107',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
  enteredOtpContainer: {
    marginTop: 20,
  },
  enteredOtpText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default CodeVerificationScreen;
