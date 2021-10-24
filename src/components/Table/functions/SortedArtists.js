
const isNumerical = (property) => {  
    return (property === sortProperties.albumCount || property === sortProperties.average )
  }
  
  const sortByAverage = (rows, isAsc) => {
    let ret = [] 
    if (isAsc){
     ret = rows.sort(function(a, b) { 
      return a.average - b.average;
    }) } else
     ret = rows.sort(function(a, b) { 
      return b.average - a.average;
    })
    return ret
  }
  
  const sortByAlbumCount = (rows, isAsc) => {
    let ret = [] 
    if (isAsc){
     ret = rows.sort(function(a, b) { 
      return a.acclaimed_albums_count - b.acclaimed_albums_count;
    }) } else
     ret = rows.sort(function(a, b) { 
      return b.acclaimed_albums_count - a.acclaimed_albums_count;
    })
    return ret
  }
  
  const sortProperties = {
    albumCount: "acclaimed_albums_count",
    average: "average",
    genre: "genre",
    name: "name",
  }
  const numericalSort = (property, rows, isAsc) =>{ 
    if (property === sortProperties.average){
      return sortByAverage(rows,isAsc)
    }  
    else if (property === sortProperties.albumCount) { 
      sortByAlbumCount(rows,isAsc)
      return rows 
    } 
    else {
      return rows
    }
  }
  const nameSort = (property, rows,isAsc) => {  
    if (property === sortProperties.name){ 
      if (isAsc)
        return rows.sort((a,b) => {
          return a.name.localeCompare(b.name)
        })
      else  
      return rows.sort((a,b) => {
        return b.name.localeCompare(a.name)
      })
  }
  
    return rows
  }
  export default function sortedArtists(property,rows,isAsc) {
    if (isNumerical(property)){
  
      return numericalSort(property,rows,isAsc)
   
    } else {
      return nameSort(property,rows,isAsc)
    }
  
   
  }
  