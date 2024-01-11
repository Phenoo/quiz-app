import { ImageBackground, Pressable, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { Text } from '../../components/Themed'


import { AntDesign } from '@expo/vector-icons';

import React from 'react'
import { useRouter } from 'expo-router';

const Pageindex = () => {
  const router = useRouter()
  return (
    <ImageBackground 
        source={require("../../assets/images/bg2.jpg")}
        style={styles.background}
    >
    <View style={styles.container}>
      <Text style={styles.text} >Sign Up</Text>
      <Text style={styles.small} >Enter details to sign up</Text>

      <View style={{ width: "100%", marginTop:10}}>
        <View style={{ gap: 16 }}>
          <TextInput placeholder='desco@gmaail.com' placeholderTextColor={"white"} style={styles.input} />
          <TextInput placeholder='Enter password' placeholderTextColor={"white"} style={styles.input} />
          <TextInput placeholder='Enter password' placeholderTextColor={"white"} style={styles.input} />
        </View>
        <TouchableOpacity style={styles.click} onPress={() => router.push("/verify/")}>
          <Text style={{textAlign: "center", fontFamily: "extrabold", fontSize: 20}}>
            Sign up
          </Text>
        </TouchableOpacity>

        <View style={{alignItems: "center", flexDirection: "row", justifyContent: "center", marginTop: 10, gap: 4}}>
            <Text style={{opacity: 0.7}}>Have Acount?</Text>
            <Pressable onPress={() => router.push("/login")}><Text>Log in</Text></Pressable>
        </View>

      </View>

      <View style={{alignItems: "center", gap: 20, position: "absolute", bottom: 50, width: "100%", marginHorizontal: 10}}>
        <Text style={{ fontFamily: "bold", fontSize: 18}}>
          Or Use
        </Text>
        <View style={{flexDirection: 'row', gap: 10, justifyContent: "space-between"}}>
          <Pressable style={styles.google}>
            <AntDesign name="google" size={24} color="white" />
            <Text style={{color: "white", fontFamily: "bold", fontSize: 18}} >Google</Text>
          </Pressable>
          <Pressable style={styles.apple}>
            <AntDesign name="apple1" size={24} color="black" />
            <Text style={{color: "black", fontFamily: "bold", fontSize: 18}} >Apple</Text>
          </Pressable>
         
        </View>
      </View>
     </View>
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
        marginHorizontal: 20
        // fontFamily: "bold"
      },
      text: {
        fontSize: 35,
        fontFamily: "extrabold"
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
        borderRadius: 10,
      },
      google: {
        backgroundColor: "black",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        padding: 15,
        borderRadius: 10,

      }
})