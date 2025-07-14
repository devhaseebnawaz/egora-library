import React from 'react';
import { Drawer, Box, Typography, Button, IconButton, Divider, Avatar } from '@mui/material';
import { Icon } from '@iconify/react';
import arrowRightIcon from '@iconify-icons/mdi/arrow-right';
import deleteIcon from '@iconify-icons/mdi/delete';
import plusIcon from '@iconify-icons/mdi/plus';
import closeIcon from '@iconify-icons/mdi/close';
import CartItems from './CartItems';
import { fNumber } from '../../../utils/formatNumber';

const CartDrawer = ({ open, onClose, themeColors, actions, prop, styles, states }) => {

  const { items } = states.cardItems ?? []
  const cardItems = items
  console.log("the card iotems are", cardItems)


  console.log('states ',states);
  

  const calculateSubTotal = (cart) => {
    const grandTotal = cart.reduce((total, cartItem) => {
      const itemQuantity = cartItem.qty;
      let itemTotal =
        parseFloat(
          cartItem.priceWithChoiceGroup
            ? cartItem.priceWithChoiceGroup
            : cartItem.price
        ) * itemQuantity;
      if (cartItem.selectedAddOns && cartItem.selectedAddOns.length > 0) {
        cartItem.selectedAddOns.forEach((addon) => {
          itemTotal += parseFloat(addon.price.replace("Rs. ", ""));
        });
      }
      return total + itemTotal;
    }, 0);
    return `${grandTotal.toFixed(0)}`;
  };






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

        {cardItems?.length === 0 ? (
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
            {cardItems?.map((cartItem, index) => (
              <CartItems
                key={index}
                cartItem={cartItem}
                actions={actions}
                index={index}
                showDeleteIndex={states.showDeleteIndex}
                setShowDeleteIndex={states.setShowDeleteIndex}
                handleRemoveFromCart={actions.handleRemoveFromCart}
                handleMenuItemClick={actions.handleMenuItemClick}
                states={states}
              />
            ))}

            <Divider style={{ margin: '16px 0' }} />

            <Button
              fullWidth
              disableRipple
              disableElevation
              onClick={()=>{ onClose() }}
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
                <Typography>Sub Total</Typography>
                <Typography>Rs. {fNumber(calculateSubTotal(cardItems))}</Typography>
              </Box>
              <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>Platform Fee</Typography>
                <Typography>Rs. 9.9</Typography>
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
                <Typography>Rs. 20</Typography>
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
                  onClick={() => actions.handleSetOrderType(type)}
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
