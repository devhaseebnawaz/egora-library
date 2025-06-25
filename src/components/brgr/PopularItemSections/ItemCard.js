import React, { useState } from 'react';
import { Card, Typography, Box } from '@mui/material';
import ItemDetailModal from '../categories/ItemDetailModal';


export default function ItemCard  ({item}) {
  
  const [open, setOpen] = useState(false);
  const [selectedQty, setSelectedQty] = useState('5');
  const [instructions, setInstructions] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card
        style={{
          position: 'relative',
          borderRadius: 24,
          overflow: 'hidden',
          textAlign: 'center',
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 8px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        onClick={handleOpen}
      >
        <Typography
          variant="subtitle1"
          style={{
            position: 'absolute',
            top: 16,
            left: 16,
            zIndex: 2,
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          {item?.name}
        </Typography>

        <Box
          component="img"
          src={`https://api.dev.egora.pk/v1/images/${item?.photoURL}`}
          alt={item?.name}
          style={{
            maxWidth: '300px',
            height:"300px",
            objectFit: 'contain',
          }}
        />

        <Box
          style={{
            position: 'absolute',
            bottom: 12,
            right: 12,
            backgroundColor: '#fff',
            padding: '4px 12px',
            borderRadius: 20,
            fontWeight: 600,
            fontSize: 14,
            boxShadow: 'rgba(0, 0, 0, 0.14) 0px 1px 4px',
          }}
        >
          Rs {item?.price}
        </Box>
      </Card>
      <ItemDetailModal
        open={open}
        onClose={handleClose}
        item={item}
        selectedQty={selectedQty}
        setSelectedQty={setSelectedQty}
        instructions={instructions}
        setInstructions={setInstructions}
      />
    </>
  );
};
