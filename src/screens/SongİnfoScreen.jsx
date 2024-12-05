import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import Ionicons from'react-native-vector-icons/Ionicons'
import AntDesign from'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons//Entypo'

const SongİnfoScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()

  //* homescreenden gönderilen veriyi useroute ile aldık
  const { album } = route.params || {}

  //* gelen verileri parçalayarak aldık

  const {coverArt, name, artist, year} = album



  return (
    <LinearGradient colors={["#040306" , "#131624"]} style={{flex: 1}}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.paddingView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
<Ionicons name="arrow-back" size={24} color="white"/>
          </TouchableOpacity>

<View style={styles.ImageView}>
  <Image source={{uri: album.coverArt }} style={styles.coverImage}/>
</View>

        </View>

        <Text style={styles.albumNameText}>{name}</Text>

<View style={styles.artistWiew}>
  <Text style={styles.artistText}>{artist}</Text>
</View>

<Pressable style={styles.controlView}>
  <Pressable style={styles.downloadButton}>
    <AntDesign name="arrowdown" size={24} color="white" />
  </Pressable>

  <View style={styles.playButtonView}>
    <MaterialCommunityIcons
      name="cross-bolnisi"
      size={24}
      color="#1DB954"
    />
    <Pressable style={styles.playButton}>
      <Entypo name="controller-play" size={24} color="white" />
    </Pressable>
  </View>
</Pressable>

<View>
<View style={styles.infoVeiw}>
  <View style={styles.infoContainer}> 
    <Text style={styles.infoText}>Album {name}</Text>
    <Text style={styles.infoText}>Artist {artist}</Text>
    <Text style={styles.infoText}>Year {year}</Text>
  </View>

  <Entypo name="dots-three-vertical" size={24} color="white" />
</View>
</View>

      </ScrollView>
    </LinearGradient>
  )
}

export default SongİnfoScreen

const styles = StyleSheet.create({
scrollView: {
 marginTop: 50
},
paddingView:{
  paddingTop: 10,
  
},
coverImage: {
  width: 200,
  height: 200,
  resizeMode: "cover",
},
ImageView:  {flex: 1, 
  alignItems: 'center'
},
albumNameText: {
  color: 'white',
  marginHorizontal: 12,
  marginTop: 10,
  fontSize: 22,
  fontWeight: 'bold',
},
artistWiew: {
  marginHorizontal: 12,
  marginTop: 10,
},
artistText: {
  color: '#909090', 
  fontSize: 13, 
  fontWeight: 'bold'
},
controlView: {
flexDirection: "row",
justifyContent: "space-between",
alignItems: "center",
marginTop: 10,
marginHorizontal: 10
},
downloadButton: {
width: 30,
height:30,
backgroundColor: "#1DB954",
borderRadius: 15,
justifyContent: "center",
alignItems: "center"
},
playButtonView: {
  flexDirection: 'row',
  gap: 10,
 alignItems: "center"
},
playButton: {
width: 60,
height:60,
backgroundColor: "#1DB954",
borderRadius: 50,
justifyContent: "center",
alignItems: "center"
},
infoContainer: {
alignItems: "center",
textAlign: "center"

},
infoVeiw: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: 12,
  marginTop: 10,
  alignItems: "center"
},
infoContainer: {
  gap: 5,
},
infoText: {
color: 'white',
fontWeight: "500",
fontSize:13
}



});

