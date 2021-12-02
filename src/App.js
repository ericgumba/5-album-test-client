 
import './App.css';
import ArtistTable from './components/ArtistTable';
import React from 'react'; 
import AdComponent from './components/ad';
import AppMenu from './components/Menu';
import AdSense from 'react-ssr-adsense';

const ENTIRE_DISCOGRAPHY = 0

const filterArtistList = (artistList,n) => {
  if (n == 0) return artistList
  
  let filteredList = []
   
  if (n < 5){
    filteredList = artistList.filter(artist => artist.acclaimed_albums_count == n)
  } else {
    filteredList = artistList.filter(artist => artist.acclaimed_albums_count >= n)
  }  
 
  return filteredList
} 
const filterGenreList = (artistList, genre) => {
  if (genre === "all") return artistList 
  return artistList.filter( (artist) => artist.genre.includes( genre ) ) 
} 
 
const albumAverage = (albums, numberOfAlbums) => { 
  const albumsSortedByScore = albums.sort(function(a, b) {
    return b.rating - a.rating;
  }); 
  const ENTIRE_DISCOGRAPHY = 0
  if (numberOfAlbums == ENTIRE_DISCOGRAPHY) numberOfAlbums =albums.length 
  let totalScore = 0
  for(let i=0; i<numberOfAlbums;i++){ 
    totalScore += parseInt(albumsSortedByScore[i].rating) 
  }
  const avg = totalScore / numberOfAlbums  
  return (totalScore / numberOfAlbums).toPrecision(3)
}


const calculateListWithScore = (artistList, numberOfAlbums ) => {
  return artistList.map( artist => {  
    return {...artist, average:albumAverage(artist.albums, numberOfAlbums)}
  } )
}


const filterByName = (artistList, artistNameSearch) => { 
  if(!(!!artistNameSearch)) { 
    return artistList
  }  
  return artistList.filter( (artist) => artist.name.includes( artistNameSearch ) ) 
}

function App() {
  

  const [artistList, setArtistList] = React.useState([]);
  const [filteredArtistList, setFilteredArtistList] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);
  const [numberOfAlbums, setNumberOfAlbums] = React.useState(5);
  const [artistNameSearch, setArtistNameSearch] = React.useState("");
  const [genre, setGenre] = React.useState("all");
  const [buttonClick, setButtonClick] = React.useState(0);

  const buttonClicked = () => {
    setButtonClick(buttonClick+1)
  }
  const filterArtists = () => {
    if(artistNameSearch){
      setFilteredArtistList(calculateListWithScore(filterByName(artistList,artistNameSearch),ENTIRE_DISCOGRAPHY))
    } else{
      const listWithNumOfAlbumsFilter = filterArtistList(artistList ,numberOfAlbums)
      const genreList = filterGenreList(listWithNumOfAlbumsFilter,genre)
      const finalList = calculateListWithScore(genreList, numberOfAlbums)
      setFilteredArtistList(finalList)
    }
  }

  

  React.useEffect(() => {
    async function retrieve(){ 
      const url = `https://gq9ukp1155.execute-api.us-west-2.amazonaws.com/dev/artist`; 
      const res = await fetch(url);  
      const artists  = await res.json();   
      setArtistList(artists.body)   
      setLoaded(true)
    } 
    retrieve()

  }, [] ); 

  React.useEffect(filterArtists, [numberOfAlbums,genre,artistNameSearch,loaded]) 

  if (artistList.length > 0){

    return (
      <div className="App">
      <header className="App-header"> 
      Finished Loading... Scroll Below For Results
      </header>   
      <AdComponent/>
      <AppMenu buttonClicked={buttonClicked} artistList={artistList} setNumberOfAlbums={setNumberOfAlbums} setGenre={setGenre} setArtistNameSearch={setArtistNameSearch}/>
      <ArtistTable artistList={filteredArtistList} numberOfAlbums={numberOfAlbums}/>  

    </div>
    )
  } else {
    return (
      <div className="App">
    <header className="App-header"> 
    Loading...
    </header>  
    {/* <AdComponent/> */}
    </div>
      )
    }
  }

export default App; 