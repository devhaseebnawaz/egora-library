import React from 'react';
import { InputBase, IconButton, Paper,Container } from '@mui/material';
import Iconify from '../iconify';

const SearchBar = ( { prop, states } ) => {
  let { query, setQuery } = states ?? {}

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container style={{ marginTop: '30px' }}>
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
          placeholder={states.searchPlaceHolder.placeholder}
          inputProps={{ 'aria-label': 'search items' }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
    </Container>
  );
};

export default SearchBar;
