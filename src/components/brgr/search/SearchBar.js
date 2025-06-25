import React from 'react';
import { InputBase, IconButton, Paper } from '@mui/material';
import Iconify from '../iconify';

export default function SearchBar ({ prop, searchTerm, setSearchTerm }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can trigger a search action here if needed (e.g. analytics or navigation)
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid black',
        borderRadius: '999px',
        padding: '6px 12px',
        width: '100%',
        boxShadow: 'none',
        mx: 'auto',
      }}
    >
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="Search for item by title..."
        inputProps={{ 'aria-label': 'search items' }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          backgroundColor: 'black',
          color: 'white',
          p: 1,
          '&:hover': {
            backgroundColor: '#333',
          },
        }}
        aria-label="search"
      >
        <Iconify icon="eva:arrow-forward-fill" width={14} height={14} color="#eac7aa" />
      </IconButton>
    </Paper>
  );
};