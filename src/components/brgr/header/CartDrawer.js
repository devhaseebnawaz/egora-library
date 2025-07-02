import React from 'react';
import { Drawer, Box, Typography, Button, IconButton, Divider, Avatar } from '@mui/material';
import { Icon } from '@iconify/react';
import arrowRightIcon from '@iconify-icons/mdi/arrow-right';
import deleteIcon from '@iconify-icons/mdi/delete';
import plusIcon from '@iconify-icons/mdi/plus';
import closeIcon from '@iconify-icons/mdi/close';

const CartDrawer = ({ open, onClose, themeColors, actions, prop, styles, states }) => {

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          width: '100%',
          maxWidth: 400,
          padding: 16,
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
        },
      }}
    >
      <Box style={{ position: 'relative', height: '100%' }}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <Typography style={{ fontWeight: 'bold', fontSize: 20 }}>Your Cart</Typography>

          <IconButton
            onClick={onClose}
            style={{
              backgroundColor: '#000',
              color: '#fff',
              width: 32,
              height: 32,
              borderRadius: '50%',
            }}
          >
            <Icon icon={closeIcon} width={18} height={18} />
          </IconButton>
        </Box>

        {states?.cardItems?.length === 0 ? (
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '80%',
              textAlign: 'center',
            }}
          >
            <Icon icon="mdi:bag-personal-outline" width={80} height={80} />
            <Typography style={{ fontWeight: 'bold', marginTop: 16 }} variant="h6">
              Your Cart is Empty
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ marginTop: 8, marginBottom: 16, maxWidth: 240 }}
            >
              Looks like you haven’t added anything to your cart yet. Start exploring and shop your
              favorite items!
            </Typography>
            <Button
              variant="contained"
              onClick={onClose}
              style={{
                borderRadius: 16,
                textTransform: 'none',
                paddingLeft: 24,
                paddingRight: 24,
              }}
            >
              Browse Products
            </Button>
          </Box>
        ) : (
          <>
            {states?.cardItems?.map((item) => (
              <Box
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 16,
                }}
              >
                <Avatar
                  variant="rounded"
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 8,
                    marginRight: 16,
                  }}
                />
                <Box style={{ flex: 1 }}>
                  <Typography style={{ fontSize: 15, fontWeight: 500 }}>{item.name}</Typography>
                  <Typography style={{ fontSize: 13, color: '#888' }}>(Single)</Typography>
                  <Typography style={{ fontSize: 15, fontWeight: 'bold' }}>
                    Rs. {item.price}
                  </Typography>
                </Box>
                <Box
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid #ccc',
                    borderRadius: 30,
                    paddingLeft: 8,
                    paddingRight: 8,
                    paddingTop: 4,
                    paddingBottom: 4,
                    minWidth: 110,
                    justifyContent: 'space-between',
                    marginLeft: 8,
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={() => removeFromCart(item.id)}
                    style={{ color: '#f44336' }}
                  >
                    <Icon icon={deleteIcon} width={18} height={18} />
                  </IconButton>

                  <Typography style={{ fontWeight: 500, fontSize: 14 }}>{item.quantity}</Typography>

                  <IconButton size="small">
                    <Icon icon={plusIcon} width={18} height={18} />
                  </IconButton>
                </Box>
              </Box>
            ))}

            <Divider style={{ margin: '16px 0' }} />

            <Button
              fullWidth
              disableRipple
              disableElevation
              startIcon={<Icon icon="mdi:plus" width={18} height={18} style={{ marginRight: 4 }} />}
              style={{
                color: '#888',
                fontWeight: 500,
                textTransform: 'none',
                justifyContent: 'flex-start',
                paddingLeft: 0,
                paddingRight: 0,
                marginTop: 8,
                backgroundColor: 'transparent',
              }}
            >
              Add more items
            </Button>

            <Divider style={{ margin: '16px 0' }} />

            <Box style={{ marginBottom: 8 }}>
              <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Total</Typography>
                <Typography>Rs. {total}</Typography>
              </Box>
              <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Delivery Fee</Typography>
                <Typography>Rs. {deliveryFee}</Typography>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontWeight: 'bold',
                  marginTop: 8,
                }}
              >
                <Typography>Grand Total</Typography>
                <Typography>Rs. {grandTotal}</Typography>
              </Box>
            </Box>

            <Button
              variant="contained"
              fullWidth
              onClick={actions.naviagateCheckout}
              endIcon={<Icon icon={arrowRightIcon} width={20} height={20} />}
              style={{
                textTransform: 'none',
                fontWeight: 'bold',
                marginTop: 16,
                paddingTop: 12,
                paddingBottom: 12,
                borderRadius: 10,
                backgroundColor: '#111',
                color: '#f5d0a9',
                fontSize: 16,
                justifyContent: 'space-between',
                paddingLeft: 16,
                paddingRight: 16,
              }}
            >
              Checkout
            </Button>

            <Box
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 16,
                borderRadius: 30,
                backgroundColor: '#e0e0e0',
                width: 'fit-content',
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '4px 8px',
              }}
            >
              {['delivery', 'pickup'].map((type) => (
                <Button
                  key={type}
                  onClick={() => states.setOrderType(type)}
                  size="small"
                  disableElevation
                  style={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    backgroundColor: states.orderType === type ? '#000' : 'transparent',
                    color: states.orderType === type ? '#fff' : '#000',
                    borderRadius: 20,
                    padding: '4px 8px',
                    fontSize: 12,
                    minWidth: 'auto',
                  }}
                >
                  {type}
                </Button>
              ))}
            </Box>

            <Box
              style={{
                backgroundColor: '#f1f8ff',
                padding: 16,
                marginTop: 16,
                borderRadius: 8,
                textAlign: 'center',
              }}
            >
              <Typography style={{ fontSize: 14 }}>
                Your order will be delivered approximately in 45 minutes on{' '}
                <strong style={{ color: '#0071f8' }}>June 25, 2025 at 12:10 PM</strong>
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
