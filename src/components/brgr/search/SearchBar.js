import React from 'react';
import { InputBase, IconButton, Paper,Container } from '@mui/material';
import Iconify from '../iconify';

const SearchBar = ({ prop, states, styles, themeColors }) => {
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
          border: `1px solid ${
            styles?.SearchBarOutlineColor?.value !== ""
              ? styles?.SearchBarOutlineColor?.value
              : themeColors?.SearchBarOutlineColor?.value
          }`,
          borderRadius: '999px',
          padding: '6px 12px',
          width: '100%',
          boxShadow: 'none',
          mx: 'auto',
        }}
      >
        <InputBase
          sx={{ ml: 2, flex: 1 }}
          placeholder={prop.editable.SearchBarBackgroundText.value}
          inputProps={{ 'aria-label': 'search items' }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <IconButton
          type="submit"
          sx={{
            backgroundColor:
              styles?.SearchBarIconBackgroundColor?.value != ""
                ? styles?.SearchBarIconBackgroundColor?.value
                : themeColors?.SearchBarIconBackgroundColor?.value
            ,
            color:
              styles?.SearchBarIconColor?.value != ""
                ? styles?.SearchBarIconColor?.value
                : themeColors?.SearchBarIconColor?.value,
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
