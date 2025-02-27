import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


const ArtistCard = ({artist}) => {
  return (
    <TouchableOpacity>
      <View style={styles.artistContainer}>
        <Image
          source={{uri: artist?.data.visuals?.avatarImage?.sources[1].url}}
          style={styles.artistImage}
        />
{/** tek satıra sığsın numberOflines */}
        <Text numberOfLines={1} 
        style={styles.artistName}>
          
          {artist.data.profile.name}
        
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ArtistCard

const styles = StyleSheet.create({
  artistContainer: {
    margin: 10,
    width: 100,
  },
  artistImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  artistName: {
    color: 'white',
    marginTop: 7,
    textAlign: 'center',
  },
});
