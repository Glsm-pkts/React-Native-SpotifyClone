import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ArtistContext = createContext()

const ArtistProvider = ({children}) => {

const [artists, setArtist] = useState([])
const [loading , setLoading] = useState(true)
const [error , setError] = useState(null)

const getArtist  = async () => {
    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/search/',
        params: {
          q: 'Türkiye de popüler olanlar',
          type: 'artists',
          offset: '0',
          limit: '10',
          numberOfTopResults: '5'
        },
        headers: {
          'x-rapidapi-key': '6ad72a036cmsh9832e8732b1c6f2p18737cjsn98b92290c4ec',
          'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
      };

      try{
        const response = await axios.request(options)//axiostan gelen cevap
        const data = response.data.artists.items;
        setArtist(data); 
      } catch (error){
        setError(error);
        setLoading(false);
      }
  
};
//getArtist fonksiyonunu çağırdık
useEffect(() => {
    getArtist()
    setLoading(false)
}, [])


    return (
        <ArtistContext.Provider value={{artists, loading, error}}>
            {children}
        </ArtistContext.Provider>
    )
}

export { ArtistContext, ArtistProvider }