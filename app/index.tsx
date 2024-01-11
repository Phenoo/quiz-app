import { ImageBackground, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from '../components/Themed'
import { Link, useRouter } from 'expo-router'

const Pageindex = () => {
  const router = useRouter()
  return (
    <ImageBackground 
        source={require("../assets/images/bg2.jpg")}
        style={styles.background}
    >
    <View style={styles.container}>
      <Text style={styles.text} >Quizabi</Text>
      <Text style={styles.small} >The best quiz app</Text>

      <Pressable style={styles.click} onPress={() => router.push("/login")}>
       {/* <Link href={"/login"} asChild> */}
        <Text style={styles.link}>
            get started
          </Text>
      </Pressable>
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
        position: "relative"
        // fontFamily: "bold"
      },
      text: {
        fontSize: 50,
        fontFamily: "extrabold"
        // fontWeight: "bold"
      },
      small: {
        fontSize: 18,
        opacity: 0.7
      },
      click: {
        backgroundColor: "#FFFFFF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        position: "absolute", 
        bottom: 80
        // marginTop: 40,
      },
      link: {
        color: "#111111",
        fontFamily: "bold",
        fontSize: 18,
        textTransform: "capitalize"
      }
})