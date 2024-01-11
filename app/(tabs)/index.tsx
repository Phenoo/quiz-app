import { Pressable, SafeAreaView, StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import Header from '../../components/Header';
import { StatusBar } from 'react-native';
// import { StatusBar } from 'expo-status-bar';

export default function TabOneScreen() {
  return (
    <>
    <StatusBar />
       <View>
        <SafeAreaView>
        <Header />
        <Pressable>
          <Text style={styles.title}>
            Explore The Best Quiz
          </Text>
          <Text style={styles.subtitle}>
            Test Your IQ With US
          </Text>
        </Pressable>
        
        </SafeAreaView>
    </View>
    </>

  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 64,
    color: "#ffffff",
    fontFamily: "extrabold"
  },
  subtitle: {
    fontSize: 26,
    color: "#848290",
    fontFamily: "bold"
  }
});
