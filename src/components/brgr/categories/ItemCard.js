import React, { useState } from 'react';
import {
  Card, CardMedia, CardContent, Typography, Box, Button
} from '@mui/material';
import ItemDetailModal from './ItemDetailModal';

export default function ItemCard({ item, actions, states }) {
  const [selectedQty, setSelectedQty] = useState('0');
  const [instructions, setInstructions] = useState('');

  return (
    <>
      <Card
        style={{
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          padding: '0',
        }}
        onClick={actions.handleOpenCard}

      >
        <CardMedia
          component="img"
          image={item.img}
          alt={item.name}
          style={{ height: '250px', objectFit: 'cover' }}
        />

        <CardContent style={{ textAlign: 'center' }}>
          <Typography variant="h6" style={{ fontWeight: 'bold' }}>{item.name}</Typography>
          <Typography variant="body1" style={{ color: '#555', marginBottom: '16px' }}>{item.type}</Typography>
          <Box style={{ marginBottom: '16px' }}>
            <Button
              disableRipple
              style={{
                backgroundColor: '#f4e3d3',
                color: '#000',
                padding: '4px 16px',
                fontWeight: 'bold',
                borderRadius: '12px',
                textTransform: 'none',
                boxShadow: 'none',
              }}
            >
              Rs. {item.price}
            </Button>
          </Box>

          <Button
            variant="contained"
            style={{
              backgroundColor: '#121212',
              color: '#fff',
              borderRadius: '20px',
              padding: '8px 32px',
              fontWeight: 'bold',
              textTransform: 'none',
            }}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>

      <ItemDetailModal
        open={states.openCard}
        onClose={actions.handleOpenCard}
        item={item}
        selectedQty={selectedQty}
        setSelectedQty={setSelectedQty}
        instructions={instructions}
        setInstructions={setInstructions}
        actions={actions}
      />
    </>
  );
}
