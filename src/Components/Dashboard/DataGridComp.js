import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Stack, Button, FormControl, Typography, MenuItem, } from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Select from '@mui/material/Select';
import CustomizedDialogs from './createModal'
import './dashboard.css'
import { elementAcceptingRef } from '@mui/utils';

const defaultRows = [
  { id: 1, track_title: 'Some Track Title 1', artist: 'Some Artist Name', isrc: '0123456789011', label: 'Universal Music', release_date: '01/01/2022' },
];

export default function DataGridDemo() {

  const columns = [
    {
      field: 'track_title',
      headerName: 'Track Title',
      flex: 1,
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'artist',
      headerName: 'Artist',
      flex: 1,
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'isrc',
      headerName: 'ISRC',
      flex: 1,
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'label',
      headerName: 'Label',
      sortable: true,
      flex: 1,
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'release_date',
      headerName: 'Release Date',
      sortable: true,
      flex: 1,
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'notes',
      headerName: 'Notes',
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => (
        <QuestionAnswerIcon />
      ),
    },
    {
      field: 'action',
      headerName: 'Action',
      sortable: false,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params) => (
        <Stack direction="row" spacing={3}>
          <EditIcon className="icon editIcon" onClick={(() => editModal(params))} />
          <DeleteIcon />
        </Stack>
      ),
    },
  ];

  const [rows, setRows] = React.useState(defaultRows);
  const [limit, setLimit] = React.useState(10);
  const [open, setOpen] = React.useState(false);
  const [param, setParam] = React.useState(null);

  const handleChange = (event) => {
    setLimit(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setParam(null)
  };

  const editModal = (params) => {
    setParam(params)
    handleClickOpen()
  }

  const addRow = (values) => {
    setRows([...rows, values]);
    setOpen(false);
  }

  const updateRow = (values) => {
    let updatedRows = rows.map(el => {
      if (el.id === values.id) {
        console.log(el, "came", values)
        return values
      }
      return el
    })
    setRows(updatedRows);
    setOpen(false);
  }

  return (
    <Box
      display="flex"
      flexDirection='column'
      justifyContent="center"
      alignItems="center"
      mt='50px'
    >
      {open && <CustomizedDialogs addRow={addRow}
        open={open}
        handleClickOpen={handleClickOpen}
        param={param}
        handleClose={handleClose}
        updateRow={updateRow}
      />}
      <Stack direction="row" spacing={3}
        sx={{
          display: "flex",
          justifyContent: 'space-between',
          width: '90%',
          mb: '20px'
        }}>
        <FormControl sx={{}}>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }} >
            Viewing&nbsp;
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={limit}
              onChange={handleChange}
              autoWidth
              size='small'
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={21}>25</MenuItem>
              <MenuItem value={22}>50</MenuItem>
            </Select>
            &nbsp;of 250 Results
          </Typography>
        </FormControl>
        <Stack direction="row" spacing={3}>
          <Button onClick={handleClickOpen} variant="contained" startIcon={<AddCircleIcon />} sx={{ bgcolor: 'button.primary', color: 'text.primary', borderRadius: '2px', '&:hover': { bgcolor: '#ddd' } }}>
            Create
          </Button>
          <Button variant="contained" endIcon={<FileDownloadIcon />} sx={{ bgcolor: 'button.primary', color: 'text.primary', borderRadius: '2px', '&:hover': { bgcolor: '#ddd' }, }}>
            Export
          </Button>
        </Stack>
      </Stack>
      <Box
        sx={{
          minHeight: 500,
          width: '90%',
          height: 100
        }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          checkboxSelection
          disableSelectionOnClick
          // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          hideFooter={true}
          autoPageSize
        // components={{
        //   Footer: () => <div>hey a footer</div>,
        // }}
        />
      </Box>
      <Button variant="text" endIcon={<KeyboardArrowDownIcon />} sx={{ mt: '20px', color: 'text.primary', textTransform: 'none', fontWeight: 'bold' }}>
        Load More
      </Button>
    </Box>

  );
}
