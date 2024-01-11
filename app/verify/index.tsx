import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import OtpForm from '../../components/Otpform';

const Pageindex = () => {
  const router = useRouter();

  return (
    <ImageBackground
    source={require("../../assets/images/bg2.jpg")}
    style={styles.background}>
      <SafeAreaView>
      <View style={{ margin: 20}}>
        <TouchableOpacity 
          onPress={() => router.back()}
          style={{backgroundColor: "#808080", borderRadius: 50, padding: 10, width: 45, }}>
          <Entypo name="chevron-thin-left" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{ margin: 20  }}>
        <Text style={styles.text}>
          Verification
        </Text>
        <Text style={{ textAlign: "center", color: "white", fontSize: 16, opacity: 0.7, marginBottom: 20 }}>
          Enter Verification code
        </Text>
        <OtpForm />
        <TouchableOpacity style={styles.click} onPress={() => router.push("/modal")}>
          <Text style={{textAlign: "center", fontFamily: "extrabold", color: "white", fontSize: 20}}>
           Verify
          </Text>
        </TouchableOpacity>

      </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Pageindex

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        opacity: 0.8
      },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: "relative",
      
        // fontFamily: "bold"
      },
      text: {
        fontSize: 35,
        fontFamily: "extrabold",
        color: "white",
        textAlign: "center",
        // fontWeight: "bold"
      },
      small: {
        fontSize: 18,
        opacity: 0.7
      },
      click: {
        backgroundColor: "#7a5bff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 7,
        marginTop: 40,
      },
      link: {
        color: "#111111",
        fontFamily: "bold",
        fontSize: 18,
        textTransform: "capitalize"
      },
      input:{
        backgroundColor: "#848290",
        color: "#fff",
        padding: 16,
        borderRadius: 5
      },
      apple: {
        backgroundColor: "white",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        padding: 15,
        borderRadius: 10
      },
      google: {
        backgroundColor: "black",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        padding: 15,
        borderRadius: 10
      }
})