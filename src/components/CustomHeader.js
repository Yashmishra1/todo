import { View, Text ,SafeAreaView, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CustomHeader = ({title, isBackButton}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
    <SafeAreaView>
      <View>
      <Text style={styles.text}>{title}</Text>
      {isBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack() } style={styles.backButton}>
          <Image style={{width : 25, height : 25}} source={require("../assets/images/back.png")} />
          </TouchableOpacity>
        )}
        </View>
    </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
    container : {
        backgroundColor : "#0090B0",
        padding:15
    },
    text:{
        fontSize : 22,
        color  : "#fff",
        fontFamily : "Roboto-Regular",
        textAlign : "center"
    },
    backButton : {
      position :"absolute",
      bottom : 0
    }
})
export default CustomHeader