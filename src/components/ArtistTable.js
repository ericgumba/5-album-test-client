import React from 'react';  
import CollapsibleTable from './Table/CollapsibleTable'; 


const ArtistTable = (props) => { 
  console.log(props.artistList)
  
  return ( 
      <div> 
        <CollapsibleTable list={props.artistList} numberOfAlbums={props.numberOfAlbums}></CollapsibleTable>
      </div>
  );
}

export default ArtistTable;