
import { ArtistProvider } from './src/context/ArtistContext';
import {AlbumsProvider} from './src/context/AlbumsContext';
import Router from './src/navigation/Router';
import {  ProfileProvider } from './src/context/ProfileContext';

const App = () => {
  return (

 <ProfileProvider>
   <ArtistProvider>
    <AlbumsProvider> 
  <Router/>
</AlbumsProvider>
  </ArtistProvider>  
 </ProfileProvider>

    
  )
}

export default App