import React, { useEffect } from "react";
import { Box, Typography, Stack, Card, CardContent, Divider, Button, Chip } from '@mui/material';

export default function OrderSuccessPage({ open, onClose, themeColors, actions, prop, styles, states }) {
    useEffect(() => {

        if (!states?.orderData || Object.keys(states?.orderData).length === 0) {
            actions.navigateToHome()
        }
        
    }, [actions, states ]);
    const orderId = states?.orderData?.billNumber;
    const venue = states?.selectedVenue?.name;
    const location = `${states?.selectedVenue?.venueAddressOne} ${states?.selectedVenue?.venueAddressTwo}`
    const phone = states?.selectedVenue?.venuePhoneNumber;
    const total = states?.orderData?.total;
    const customerName = `${states?.orderData?.customer?.firstName} ${states?.orderData?.customer?.lastName}`;

    return (
        <Box px={2} py={4} sx={{ backgroundColor: "#f5f6f7", minHeight: "100vh" }}>
            <Stack alignItems="center" spacing={2} mb={4}>
           
                <Typography variant="h5" fontWeight={700}>Thank You!</Typography>
                <Typography color="text.secondary">Your order has been placed successfully</Typography>
            </Stack>

            <Box
                maxWidth="800px"
                mx="auto"
                p={3}
                borderRadius={3}
                bgcolor="white"
                boxShadow={1}
            >
                <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                    <Typography variant="subtitle1" fontWeight={600}>Your Order is</Typography>
                    <Chip label="Received" color="warning" size="small" />

                </Stack>

                <Typography variant="h6" fontWeight={700}>Order No: {orderId}</Typography>
                <Typography variant="body2" mt={1}>
                    You have to collect your order from:
                </Typography>

                <Typography mt={1}><strong>{venue}</strong></Typography>
                <Typography color="text.secondary">Location: {location}</Typography>

                <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#f44336', textDecoration: 'none', fontSize: '14px' }}
                >
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                      
                        <span>View Location</span>
                    </Stack>
                </a>

                <Typography mt={1}>
                    Phone: <a href={`tel:${phone}`} style={{ color: '#1976d2' }}>{phone}</a>
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={2}
                    justifyContent="space-between"
                    alignItems={{ xs: 'flex-start', md: 'center' }}
                >
                    <Stack spacing={1}>
                        <Typography mt={2}><strong>Customer Name:</strong> {customerName}</Typography>
                    </Stack>

                    <Card sx={{ minWidth: 220, mt: { xs: 2, md: 0 } }}>
                        <CardContent>
                            <Stack direction="row" alignItems="center" spacing={1}>
                             
                                <Typography fontWeight={600}>Payment</Typography>
                            </Stack>
                            <Divider sx={{ my: 1 }} />
                            <Typography variant="body2" color="text.secondary">Total</Typography>
                            <Typography fontWeight={700}>Rs. {total}</Typography>
                        </CardContent>
                    </Card>
                </Stack>
            </Box>
        </Box>
        
    );
}
