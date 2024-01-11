import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Text,TransparentView } from './Themed'

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = () => {
  return (
    <TransparentView style={{flexDirection: "row", justifyContent: "space-between", backgroundColor: "none", padding: 10}}>
        <Pressable>
            <Text>
            <MaterialCommunityIcons name="view-dashboard" size={30}  />
            </Text>
        </Pressable>

        <Pressable>
            <Text>
            <MaterialCommunityIcons name="view-dashboard" size={30}  />
            </Text>
        </Pressable>
        
    </TransparentView>
  )
}

export default Header

const styles = StyleSheet.create({})