import { StyleSheet, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Text } from './Themed';

const QuizCategory = ({ category, icon, selected, onSelect }) => {
    return (
      <TouchableOpacity onPress={onSelect} activeOpacity={0.8}>
        <View style={[styles.categoryContainer, selected && styles.selectedCategory]}>
          <Text style={styles.icon}>{icon}</Text>
        </View>
        <Text style={styles.categoryText}>{category}</Text>

      </TouchableOpacity>
    );
  };

export default QuizCategory

const styles = StyleSheet.create({
    categoryContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "center",
      backgroundColor: '#808080',
      borderRadius: 80,
      width: 60,
      height: 60,
      margin: 20 ,
    },
    selectedCategory: {
      borderWidth: 4,
      borderColor: '#7a5bff', // Change this color to indicate selected categories
    },
    icon: {
      fontSize: 29,
    //   marginRight: 10,
      textAlign: 'center',
      justifyContent: "center",
      alignItems: "center",

    },
    categoryText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });