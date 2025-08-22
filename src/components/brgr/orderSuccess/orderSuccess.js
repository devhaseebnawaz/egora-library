import React, { useEffect } from "react";
import { Box, Typography, Stack, Card, CardContent, Divider, Button, Chip } from '@mui/material';

export default function OrderSuccessPage({ open, onClose, themeColors, actions, prop, styles, states, globalComponentStyles, layout }) {
     layout = layout?.json ? layout?.json : layout

    const getThankYouStyles = {
        color:
            layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessThankYouTextColor?.value !== ""
                ? `${layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessThankYouTextColor?.value}`
                : globalComponentStyles?.Text?.color?.value != ""
                    ? globalComponentStyles?.Text?.color?.value
                    : `${themeColors?.OrderSuccessThankYouTextColor?.value}`,
        fontSize:
            layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessThankYouTextSize?.value != 0
                ? layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessThankYouTextSize?.value
                : globalComponentStyles?.Text?.size?.value != 0
                    ? globalComponentStyles?.Text?.size?.value
                    : themeColors?.OrderSuccessThankYouTextSize?.value,

        fontFamily: layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessThankYouTextFont?.value != ""
            ? `${layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessThankYouTextFont?.value}`
            : globalComponentStyles?.Text?.fontFamily?.value != ""
                ? globalComponentStyles?.Text?.fontFamily?.value
                : `${themeColors?.OrderSuccessThankYouTextFont?.value}`,

        fontStyle: layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessThankYouTextStyle?.value !== ""
            ? `${layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessThankYouTextStyle?.value}`
            : globalComponentStyles?.Text?.fontWeight?.value != ""
                ? globalComponentStyles?.Text?.fontWeight?.value
                : `${themeColors?.OrderSuccessThankYouTextStyle?.value}`,
    };

    const getOrderPlacedStyles = {
        color:
            layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessOrderPlacedTextColor?.value !== ""
                ? `${layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessOrderPlacedTextColor?.value}`
                : globalComponentStyles?.Text?.color?.value != ""
                    ? globalComponentStyles?.Text?.color?.value
                    : `${themeColors?.OrderSuccessOrderPlacedTextColor?.value}`,
        fontSize:
            layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessOrderPlacedTextSize?.value != 0
                ? layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessOrderPlacedTextSize?.value
                : globalComponentStyles?.Text?.size?.value != 0
                    ? globalComponentStyles?.Text?.size?.value
                    : themeColors?.OrderSuccessOrderPlacedTextSize?.value,

        fontFamily: layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessOrderPlacedTextFont?.value != ""
            ? `${layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessOrderPlacedTextFont?.value}`
            : globalComponentStyles?.Text?.fontFamily?.value != ""
                ? globalComponentStyles?.Text?.fontFamily?.value
                : `${themeColors?.OrderSuccessOrderPlacedTextFont?.value}`,

        fontStyle: layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessOrderPlacedTextStyle?.value !== ""
            ? `${layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessOrderPlacedTextStyle?.value}`
            : globalComponentStyles?.Text?.fontWeight?.value != ""
                ? globalComponentStyles?.Text?.fontWeight?.value
                : `${themeColors?.OrderSuccessOrderPlacedTextStyle?.value}`,
    };

    const getHeadingsStyles = {
        color:
            layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessHeadingsTextColor?.value !== ""
                ? `${layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessHeadingsTextColor?.value}`
                : globalComponentStyles?.Text?.color?.value != ""
                    ? globalComponentStyles?.Text?.color?.value
                    : `${themeColors?.OrderSuccessHeadingsTextColor?.value}`,
        fontSize:
            layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessHeadingsTextSize?.value != 0
                ? layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessHeadingsTextSize?.value
                : globalComponentStyles?.Text?.size?.value != 0
                    ? globalComponentStyles?.Text?.size?.value
                    : themeColors?.OrderSuccessHeadingsTextSize?.value,

        fontFamily: layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessHeadingsTextFont?.value != ""
            ? `${layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessHeadingsTextFont?.value}`
            : globalComponentStyles?.Text?.fontFamily?.value != ""
                ? globalComponentStyles?.Text?.fontFamily?.value
                : `${themeColors?.OrderSuccessHeadingsTextFont?.value}`,

        fontStyle: layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessOrderPlacedTextStyle?.value !== ""
            ? `${layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessOrderPlacedTextStyle?.value}`
            : globalComponentStyles?.Text?.fontWeight?.value != ""
                ? globalComponentStyles?.Text?.fontWeight?.value
                : `${themeColors?.OrderSuccessOrderPlacedTextStyle?.value}`,
    };


    const getDescriptionStyles = {
        color:
            layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessDescriptionTextColor?.value !== ""
                ? `${layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessDescriptionTextColor?.value}`
                : globalComponentStyles?.Text?.color?.value != ""
                    ? globalComponentStyles?.Text?.color?.value
                    : `${themeColors?.OrderSuccessDescriptionTextColor?.value}`,
        fontSize:
            layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessDescriptionTextSize?.value != 0
                ? layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessDescriptionTextSize?.value
                : globalComponentStyles?.Text?.size?.value != 0
                    ? globalComponentStyles?.Text?.size?.value
                    : themeColors?.OrderSuccessDescriptionTextSize?.value,

        fontFamily: layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessDescriptionTextFont?.value != ""
            ? `${layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessDescriptionTextFont?.value}`
            : globalComponentStyles?.Text?.fontFamily?.value != ""
                ? globalComponentStyles?.Text?.fontFamily?.value
                : `${themeColors?.OrderSuccessDescriptionTextFont?.value}`,

        fontStyle: layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessDescriptionTextStyle?.value !== ""
            ? `${layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessDescriptionTextStyle?.value}`
            : globalComponentStyles?.Text?.fontWeight?.value != ""
                ? globalComponentStyles?.Text?.fontWeight?.value
                : `${themeColors?.OrderSuccessDescriptionTextStyle?.value}`,
    };

    const orderId = states?.orderData?.billNumber;
    const venue = states?.selectedVenue?.name;
    const location = `${states?.selectedVenue?.venueAddressOne} ${states?.selectedVenue?.venueAddressTwo}`
    const phone = states?.selectedVenue?.venuePhoneNumber;
    const total = states?.orderData?.total;
    const customerName = `${states?.orderData?.customer?.firstName} ${states?.orderData?.customer?.lastName}`;

    return (
        <Box px={2} py={4} sx={{ backgroundColor: "#f5f6f7", minHeight: "100vh" }}>
            <Stack alignItems="center" spacing={2} mb={4}>
               <Typography sx={{ ...getThankYouStyles }} >Thank You!</Typography>
                <Typography sx={{ ...getOrderPlacedStyles }} >Your order has been placed successfully</Typography>
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
                    <Typography variant="subtitle1" fontWeight={600} sx={{ ...getHeadingsStyles }}>Your Order is</Typography>
                    <Chip label="Received" color="warning" size="small" />

                </Stack>

                <Typography  sx={{ ...getHeadingsStyles }} >Order No:
                    <Typography component="span" sx={{ ...getDescriptionStyles }}>
                        {orderId}
                    </Typography>
                </Typography>

                <Typography variant="body2" mt={1} sx={{ ...getDescriptionStyles }}>
                    You have to collect your order from:
                </Typography>

                <Typography mt={1} sx={{ ...getHeadingsStyles }}><strong>{venue}</strong></Typography>

                <Typography color="text.secondary" sx={{ ...getHeadingsStyles }}>
                    Location:{" "}
                    <Typography component="span" sx={{ ...getDescriptionStyles }}>
                        {location}
                    </Typography>
                </Typography>

                <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#f44336', textDecoration: 'none', ...getHeadingsStyles }}
                >
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                       <span sx={{ ...getHeadingsStyles }} >View Location</span>
                    </Stack>
                </a>

                <Typography mt={1} sx={{ ...getHeadingsStyles }}>
                    Phone: <a href={`tel:${phone}`} style={{ color: '#1976d2', ...getDescriptionStyles }}>{phone}</a>
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={2}
                    justifyContent="space-between"
                    alignItems={{ xs: 'flex-start', md: 'center' }}
                >
                    <Stack spacing={1}>
                        <Typography mt={2} sx={{ ...getHeadingsStyles }}>
                            <strong sx={{ ...getHeadingsStyles }} >Customer Name:</strong>
                            <Typography component="span" sx={{ ...getDescriptionStyles }}>
                                {customerName}
                            </Typography>

                        </Typography>
                    </Stack>

                    <Card sx={{ minWidth: 220, mt: { xs: 2, md: 0 } }}>
                        <CardContent>
                            <Stack direction="row" alignItems="center" spacing={1}>
                            <Typography fontWeight={600} sx={{ ...getHeadingsStyles }} >Payment</Typography>
                            </Stack>
                            <Divider sx={{ my: 1 }} />
                            <Typography variant="body2" color="text.secondary" sx={{ ...getHeadingsStyles }} >Total</Typography>
                            <Typography fontWeight={700} sx={{ ...getDescriptionStyles }} >Rs. {total}</Typography>
                        </CardContent>
                    </Card>
                </Stack>
            </Box>
        </Box>

    );
}