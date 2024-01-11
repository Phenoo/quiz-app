import { FlatList, ImageBackground, Pressable, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Text, View } from '../../components/Themed'
import Quizcategory from '../../components/Quizcategory';
import { useRouter } from 'expo-router';

const Pageindex = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const router = useRouter()
    const toggleCategory = (category) => {
        const isSelected = selectedCategories.includes(category);
    
        if (isSelected) {
          const updatedCategories = selectedCategories.filter((item) => item !== category);
          setSelectedCategories(updatedCategories);
        } else {
          setSelectedCategories([...selectedCategories, category]);
        }
      };
    const quizCategories = [
        { category: 'Science', icon: '🔬' },
        { category: 'History', icon: '📜' },
        { category: 'Geography', icon: '🌍' },
        { category: 'Music', icon: '🎵' },
        { category: 'Movies', icon: '🎬' },
        { category: 'Sports', icon: '⚽' },
        { category: 'Art', icon: '🎨' },
        { category: 'Language', icon: '🗣️' },
        { category: 'Technology', icon: '💻' },
      ];
      
      
  return (
    <ImageBackground
    source={require("../../assets/images/bg2.jpg")}
    style={styles.background}
>

    <SafeAreaView style={styles.container}>
    <Pressable onPress={() => router.push("/(tabs)")} style={{ position: "absolute", top: 80, right: 20 }}>
       {/* <Link href={"/login"} asChild> */}
        <Text style={{fontSize: 20, fontFamily: "extrabold"}}>
            Skip
          </Text>
      </Pressable>
     <Text style={styles.title}>Select Topic</Text>
        <Text style={styles.separator}>
            By selecting topics, we will show you related quiz
        </Text>
        <Pressable style={{alignItems: "center", justifyContent: "center"}}>
        <FlatList
            data={quizCategories}
            keyExtractor={(item, index) => index.toString()}
            // numColumns={3}
            numColumns={3}
        
            renderItem={({ item }) => (
            <Quizcategory
                category={item.category}
                icon={item.icon}
                selected={selectedCategories.includes(item.category)}
                onSelect={() => toggleCategory(item.category)}
            />
            )}
        />
        </Pressable>
         <TouchableOpacity style={styles.click} onPress={() => router.push("/(tabs)")}>
          <Text style={{textAlign: "center", color: "white", fontFamily: "extrabold", fontSize: 20}}>
           Continue
          </Text>
        </TouchableOpacity>   
     
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
      position: 'relative',
    //   alignItems: 'center',
      justifyContent: 'center',
      height: "100%"
    },
    title: {
      fontSize: 50,
      marginTop: 20,
      color: "white",
      fontFamily: 'extrabold',
      textAlign: "center",
    },
    separator: {
      marginVertical: 5,
      textAlign: "center",
      fontSize: 16,
      color: "white",
      opacity: 0.7,
    },
    click: {
        backgroundColor: "#7a5bff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 7,
        margin: 40,
      },
  });
  