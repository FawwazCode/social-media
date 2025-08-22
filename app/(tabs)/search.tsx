import React from 'react'
import { Text, TextInput, View } from 'react-native'

const search = () => {
  return (
    <View 
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 30,
      }}
    >
      <TextInput placeholder="Search..."
      style={{
        width: 350,
        backgroundColor: "white",
        borderColor: "black",
        borderRadius: 10,
      }}
      >

      </TextInput>
    </View>
  )
}

export default search