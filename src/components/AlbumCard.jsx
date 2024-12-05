import { StyleSheet, Text ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AlbumCard = ({album}) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Info", {album})}
    style={styles.container}>
     <Image source={{uri: album.coverArt}} style={styles.albumImage}/>
     <Text numberOfLines={1} style={styles.albumName}>{album.name}</Text>
     <Text style={styles.albumArtist}>{album.artist}</Text>
    </TouchableOpacity>
  )
}

export default AlbumCard

const styles = StyleSheet.create({
    container: {
        width: 100,
        alignItems: 'center',
        marginHorizontal:10,
        marginVertical: 10
    },
    albumImage: {
      width: 100,
      height: 100,
      
    },
    albumName: {
color: "white",
marginTop: 7
    },
    albumArtist: {
        color: "gray",
        fontSize: 12
    }
})