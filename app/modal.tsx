import { StatusBar } from 'expo-status-bar';
import { Image, Platform, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';

import verify from "../assets/images/purple-verified-sign-and-tick-18754.png"
import { useRouter } from 'expo-router';

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={verify} />
      <Text style={styles.title}>You are verified</Text>
      <TouchableOpacity style={styles.click} onPress={() => router.push("/category/")}>
          <Text style={{textAlign: "center", fontFamily: "extrabold", color: "#7a5bff", fontSize: 20}}>
           Continue
          </Text>
        </TouchableOpacity>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    fontFamily: 'extrabold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  click: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 7,
    marginTop: 40,
    width: 260
  },
});
