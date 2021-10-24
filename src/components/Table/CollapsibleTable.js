import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box'; 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'; 
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import TableSortLabel from '@mui/material/TableSortLabel'; 
import Row from './Row';
import sortedArtists from './functions/SortedArtists';
function createData(name, acclaimed_albums_count, average, genre, albums) {
  return {
    name,
    genre,
    acclaimed_albums_count,
    average,
    albums
  };
}
 
const createRows = (item) => createData(item.name, item.acclaimed_albums_count, item.average,  item.genre, item.albums)
 

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'acclaimed_albums_count',
    numeric: true,
    disablePadding: false,
    label: 'Acclaimed Albums Count',
  },
  {
    id: 'average',
    numeric: true,
    disablePadding: false,
    label: 'Average',
  },
  {
    id: 'genre',
    numeric: true,
    disablePadding: false,
    label: 'Genre',
  }, 
];
function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow> 
            <TableCell />
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
export default function CollapsibleTable(props) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories'); 
  const [rows, setRows] = React.useState(props.list.map(createRows)) 
  
  let numOfAlbums = `Average Score Of Top ${props.numberOfAlbums} Albums`;
 

  const handleRequestSort = (event, property) => { 
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);

    setRows(sortedArtists(property,rows,isAsc))
  }; 
  React.useEffect(() => {
    setRows(props.list.map(createRows))
  }, [props]);

  
  if (props.numberOfAlbums == 0 ) {numOfAlbums = "Average Score Of All Albums"}
 
  let r;

  if (rows.length > 0){
    r = rows;
  } else{
    r = props.list.map(createRows)
  }
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table"> 

          <EnhancedTableHead 
              order={order}
              orderBy={orderBy} 
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
        <TableBody>
         {r.map((row) => (
             <Row key={row.name} row={row} />
           ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}