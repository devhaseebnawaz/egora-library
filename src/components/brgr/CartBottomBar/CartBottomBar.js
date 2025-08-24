import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
// import {Iconify} from "src/components/brgr/iconify";
import {
  calculateSubTotal,
} from "../../../utils/cart";
import { fNumber } from "../../../utils/formatNumber";
// import { useCart } from '../CartContext';
// import CartDrawer from '../header/CartDrawer';
// import { useUI } from './ScrollContext';

export default function CartBottomBar  ({ states, actions, previewMode = false,}) {
    // const { cartItems } = useCart();
    const [cartOpen, setCartOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    // const { scrollToSearch } = useUI();

    // const totalPrice = cartItems.reduce(
    //     (sum, item) => sum + item.price * item.quantity,
    //     0
    // );
      const cardItems = states?.cardItems?.items ?? [];


    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Box
                style={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '12px 16px',
                    zIndex: 1000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box style={{ width: 40, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {/* {showScrollTop ? ( */}
                            {/* <IconButton
                                style={{
                                    backgroundColor: '#121212',
                                    color: 'white',
                                    width: 40,
                                    height: 40,
                                }}
                                // onClick={scrollToSearch}
                            >
                                <Iconify icon="mdi:magnify" width={20} height={20} />
                            </IconButton> */}
                        {/* ) : null} */}
                    </Box>

                    {states?.cardItems?.items?.length > 0 && (
                        <Box
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 30,
                                backgroundColor: '#121212',
                                padding: 16,
                                borderRadius: '20px',
                                maxWidth: 400,
                                justifyContent: 'space-between',
                                flex: 1,
                                margin: '0 12px',
                            }}
                            onClick={() => {
                                if (!previewMode) {
                                    actions.handleOpenCart()
                                }
                            }  }>
                            <Box style={{ color: 'white', fontWeight: 'bold' }}>
                                {states.cardItems?.items.length}
                            </Box>
                            <Typography style={{ color: 'white', fontWeight: 'bold' }}>
                                View Cart 
                            </Typography>
                            <Typography style={{ color: 'white', fontWeight: 'bold' }}>
                              Rs. {fNumber(calculateSubTotal(cardItems))}
                            </Typography>
                        </Box>
                    )}

                    <Box style={{ width: 40, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {/* {showScrollTop ? ( */}
                            {/* <IconButton
                                style={{
                                    backgroundColor: '#121212',
                                    color: 'white',
                                    width: 40,
                                    height: 40,
                                }}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <Iconify icon="mdi:arrow-up" width={20} height={20} />
                            </IconButton> */}
                        {/* ) : null} */}
                    </Box>
                </Box>
            </Box>

            {/* <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} /> */}
        </>
    );
};