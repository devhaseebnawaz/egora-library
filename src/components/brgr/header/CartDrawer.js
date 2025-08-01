import React ,{ useMemo }from 'react';
import { Drawer, Box, Typography, Button, IconButton, Divider, Avatar } from '@mui/material';
import { Icon } from '@iconify/react';
import arrowRightIcon from '@iconify-icons/mdi/arrow-right';
import deleteIcon from '@iconify-icons/mdi/delete';
import plusIcon from '@iconify-icons/mdi/plus';
import closeIcon from '@iconify-icons/mdi/close';
import CartItems from './CartItems';
import { fNumber } from '../../../utils/formatNumber';
import { calculateAndRoundTax, } from '../../../utils/tax';
import { calculateSubTotal, isApplicable, calculateServiceFee ,calculateFinalTotal} from '../../../utils/cart';

const CartDrawer = ({ open, onClose, themeColors, actions, prop, styles, states }) => {

  const { items } = states.cardItems ?? []
  const cardItems = items

  const { orderType,franchise } = states ?? {}
  const { serviceFeesObject, configurations, storeTaxOnCash } = franchise ?? {}
  const { isServiceFeesApplicableOnStore, isTaxApplicableOnStore } = configurations ?? {}

  const taxRate = isTaxApplicableOnStore ? storeTaxOnCash / 100 : 0;

  let discount = 0;

  let paymentOption = "cash"

  let subTotal = calculateSubTotal(cardItems);
  const taxAmount = calculateAndRoundTax(subTotal, taxRate, discount);

  const serviceFee = useMemo(
    () =>
      cardItems?.length > 0 &&
        (isServiceFeesApplicableOnStore && (isApplicable(serviceFeesObject?.[orderType]?.cash?.applicable)))
        ? calculateServiceFee(states, orderType, paymentOption, subTotal, discount)
        : 0,
    [cardItems, subTotal, taxAmount]
  );
  const totalCartQuantity = useMemo(() => {
    return cardItems?.reduce((acc, item) => acc + item.qty, 0) || 0;
  }, [cardItems]);
  let selectedTip = 0

  const renderServiceFee = () => {
    if (
      isServiceFeesApplicableOnStore &&
      isApplicable(serviceFeesObject?.[orderType]?.cash?.applicable) && serviceFee > 0) {
      return (
        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>Service Fee</Typography>
          <Typography>Rs. {fNumber(serviceFee)}</Typography>
        </Box>
      );
    }
    return null;
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

        {totalCartQuantity === 0 ? (
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
              onClick={() => { onClose() }}
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
              {renderServiceFee()}

              {isTaxApplicableOnStore && (
                <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography>Tax </Typography>
                  <Typography> Rs. {taxAmount ? fNumber(taxAmount) : 0}</Typography>
                </Box>
              )}
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontWeight: 'bold',
                  marginTop: 8,
                }}
              >
                <Typography>
                  Grand Total
                </Typography>
                <Typography>
                  Rs.{" "}
                  {fNumber((
                    Number(calculateFinalTotal(cardItems, selectedTip, discount)) +
                    Number(taxAmount) +
                    Number(serviceFee) +
                    9.9
                  ).toFixed(2))}
                </Typography>
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
            </Box>
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
