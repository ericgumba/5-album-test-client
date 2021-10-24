import AlbumNumberFilter from "./AlbumNumberFilter";
import ArtistGenreFilter from "./ArtistGenreFilter";
import Search from "./Table/Search";
import { Button } from '@mui/material';
export default function AppMenu(props) { 
    return(
        <div>
            <AlbumNumberFilter setNumberOfAlbums={props.setNumberOfAlbums} setArtistNameSearch={props.setArtistNameSearch}/>
            <ArtistGenreFilter setGenre={props.setGenre} setArtistNameSearch={props.setArtistNameSearch}/>
            <Search artistList={props.artistList} setArtistNameSearch={props.setArtistNameSearch}/> 
        </div>
    ) 
}