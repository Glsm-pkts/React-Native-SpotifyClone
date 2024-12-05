import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ProfileContext = createContext()

const ProfileProvider = ({ children }) => {
 const [profileData, setProfileData] = useState(null)
 const [loading, setLoading] = useState(true)
 const [error, setError] = useState(null)

const getData = async () => {

    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/user_profile/',
        params: {
          id: 'nocopyrightsounds',
          playlistLimit: '10',
          artistLimit: '10'
        },
        headers: {
          'x-rapidapi-key': '6ad72a036cmsh9832e8732b1c6f2p18737cjsn98b92290c4ec',
          'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
      };
      try{
        const response = await axios.request(options)
        setProfileData(response.data)
        setLoading(false)
      }
       catch(error){
  setError(error)
  setLoading(false)
      }
}

 useEffect(() => {
   getData()
   setLoading(false)
 }, [])


   return(
    <ProfileContext.Provider value={{profileData,loading, error}}>
    {children}
</ProfileContext.Provider>
   )
}


export { ProfileContext, ProfileProvider }