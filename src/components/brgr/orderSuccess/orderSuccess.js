import React, { useEffect } from "react";
import { Box, Typography, Stack, Divider, Button, Chip, Grid, TableContainer, Paper, Table, TableHead, TableCell, TableRow, TableBody, useMediaQuery, Link, IconButton } from '@mui/material';
import cartIcon from "@iconify-icons/mdi/cart";
import creditCardIcon from '@iconify-icons/mdi/credit-card-outline';
import locationIcon from '@iconify-icons/mdi/map-marker';
import { Icon } from "@iconify/react";
import { useTheme } from '@mui/material/styles';
import { getFontSize } from "../../../utils/fontsize";
import { fNumber } from "../../../utils/formatNumber";
import UniversalImage from "../../../UniversalImage";
import { formatTime, formatDate } from "../../../utils/formatDateTime";
import { useNavigate } from "react-router-dom";

export default function OrderSuccessPage({ open, onClose, themeColors, actions, prop, styles, states, globalComponentStyles, layout }) {
    const { activeOrder } = prop ?? {}
    const { orderType, customer, billNumber, tax, deliveryFees, serviceFees, platformFees, subTotal, total, paymentType, venueId, items, state, createdAt } = activeOrder ?? {}
    const { name, venueAddressOne, venueAddressTwo, venuePhoneNumber, franchiseId } = venueId ?? {}
    const { firstName, lastName, address, phone } = customer ?? {}
    const { street, area } = address ?? {}
    const theme = useTheme();
    const navigate = useNavigate();
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));


    const redirectHome = () => {
        const baseUrl = `${window.location.protocol}//${window.location.hostname}${window.location.port ? ':' + window.location.port : ''}`;
        const urlsToAppendId = ["http://localhost:3031", "http://stores.dev.egora.pk", "http://stores.stg.egora.pk", "http://stores.test.egora.pk", "http://stores.egora.pk"];
        if (urlsToAppendId.includes(baseUrl)) {
            navigate(`${baseUrl}/?${franchiseId.id}`)
        } else {
            navigate(`${baseUrl}`)
        }
    }

    layout = layout?.json ? layout?.json : layout

    const getThankYouStyles = {
        color:
            layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessThankYouTextColor?.value !== ""
                ? `${layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessThankYouTextColor?.value}`
                : globalComponentStyles?.Text?.color?.value != ""
                    ? globalComponentStyles?.Text?.color?.value
                    : `${themeColors?.OrderSuccessThankYouTextColor?.value}`,
        fontSize:
            getFontSize(layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessThankYouTextSize?.value != 0
                ? layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessThankYouTextSize?.value
                : globalComponentStyles?.Text?.size?.value != 0
                    ? globalComponentStyles?.Text?.size?.value
                    : themeColors?.OrderSuccessThankYouTextSize?.value, mdDown, 20),

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
            getFontSize(layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessOrderPlacedTextSize?.value != 0
                ? layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessOrderPlacedTextSize?.value
                : globalComponentStyles?.Text?.size?.value != 0
                    ? globalComponentStyles?.Text?.size?.value
                    : themeColors?.OrderSuccessOrderPlacedTextSize?.value, mdDown, 18),

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
            getFontSize(layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessHeadingsTextSize?.value != 0
                ? layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessHeadingsTextSize?.value
                : globalComponentStyles?.Text?.size?.value != 0
                    ? globalComponentStyles?.Text?.size?.value
                    : themeColors?.OrderSuccessHeadingsTextSize?.value, mdDown, 22),

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
            getFontSize(layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessDescriptionTextSize?.value != 0
                ? layout?.orderSuccessLayout?.body[0].styles?.OrderSuccessDescriptionTextSize?.value
                : globalComponentStyles?.Text?.size?.value != 0
                    ? globalComponentStyles?.Text?.size?.value
                    : themeColors?.OrderSuccessDescriptionTextSize?.value, mdDown, 16),

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

    const getFooterStyles = (type) => ({
        color:
            styles?.[type + "Color"]?.value ||
            globalComponentStyles?.Text?.color?.value ||
            themeColors?.[type + "Color"]?.value,
        fontSize:
            getFontSize(styles?.[type + "Size"]?.value ||
                globalComponentStyles?.Text?.size?.value ||
                themeColors?.[type + "Size"]?.value, mdDown, 14),
        fontFamily:
            styles?.[type + "Font"]?.value ||
            globalComponentStyles?.Text?.fontFamily?.value ||
            themeColors?.[type + "Font"]?.value,
        fontStyle:
            styles?.[type + "Style"]?.value ||
            globalComponentStyles?.Text?.fontWeight?.value ||
            themeColors?.[type + "Style"]?.value,
    });

    return (
        <>
            {states.logoUrl &&
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={states.logoUrl} alt="Logo" style={{ height: '110px', zIndex: '1000000' }} />
                </Grid>
            }

            <Box px={2} py={4} sx={{ backgroundColor: "#f5f6f7", minHeight: "100vh", position: 'relative', top: '-25px' }}>
                <Box mx="auto" width="95%" >
                    {/* Thank you part start */}
                    <Stack alignItems="center" spacing={2} mb={4}>
                        <UniversalImage
                            src="/assets/tick-unscreen.gif"
                            alt="Order Success"
                            width={200}
                            height={200}
                            style={{ objectFit: "contain" }}
                            priority
                        />
                        <Typography sx={{ ...getThankYouStyles }} >Thank You!</Typography>
                        <Typography sx={{ ...getOrderPlacedStyles }} >Your order has been placed successfully</Typography>
                    </Stack>
                    {/* Thank you part end */}

                    {/* order and branch detail start */}
                    <Box
                        p={{ xs: 2, md: 3 }}
                        borderRadius={3}
                        bgcolor="white"
                        boxShadow={1}
                    >
                        {orderType === "storePickUp"}
                        <>
                            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                                <Typography variant="subtitle1" fontWeight={700} sx={{ ...getHeadingsStyles }}>Your Order is</Typography>
                                <Chip label={state} color="warning" size="small" />
                                {state === "processing" || state === "finished" &&
                                    <Image
                                        src="/assets/live.gif"
                                        alt="Order Success"
                                        width={30}
                                        height={30}
                                        style={{ objectFit: "contain" }}
                                        priority
                                    />
                                }
                            </Stack>
                            <Typography sx={{ ...getHeadingsStyles }} >Order No:{" "}
                                <Typography component="span" sx={{ ...getDescriptionStyles }}>
                                    {billNumber}
                                </Typography>
                            </Typography>
                            {orderType === "storeDelivery" ? (
                                <Typography
                                    mt={2}
                                    sx={{
                                        fontWeight: 600,
                                        color: "#6c757d",
                                    }}
                                >
                                    Your order has been received, we might call you for confirmation or address
                                    <Box
                                        component="span"
                                        sx={{
                                            display: { xs: "inline", sm: "block" }
                                        }}
                                    >
                                        {" "}details if required.
                                    </Box>
                                </Typography>
                            ) : (
                                <>
                                    <Typography variant="body2" mt={1} sx={{ ...getDescriptionStyles }}>
                                        You have to collect your order from:
                                    </Typography>
                                    <Typography mt={1} sx={{ ...getHeadingsStyles }}><strong>{name}</strong></Typography>
                                    <Typography color="text.secondary" sx={{ ...getHeadingsStyles }}>
                                        Location:{" "}
                                        <Typography component="span" sx={{ ...getDescriptionStyles }}>
                                            {`${venueAddressOne} ${venueAddressTwo}`}
                                        </Typography>
                                    </Typography>
                                    <Link
                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                            `${venueAddressOne} ${venueAddressTwo}`
                                        )}`}
                                        underline="hover"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ fontSize: 14 }}
                                    >
                                        View Location 📍
                                    </Link>
                                    <Typography mt={1} sx={{ ...getHeadingsStyles }}>
                                        Phone:{" "}
                                        <Typography component="span" sx={{ ...getDescriptionStyles }}>
                                            {venuePhoneNumber}
                                        </Typography>
                                    </Typography>
                                </>
                            )
                            }
                        </>
                    </Box>

                    {/* order and branch detail end */}

                    {/* Order Information Paymnet and Product section start */}
                    <Box
                        mt={{ xs: 2, md: 6 }}
                        borderRadius={3}
                        bgcolor="white"
                        boxShadow={1}
                    >
                        <Grid container spacing={{ xs: 0, md: 3 }} px={{ xs: 0, md: 3 }} pt={2} >
                            <Grid item xs={12} md={8} px={{ xs: 2, md: 0 }}>
                                <Typography variant="h6">
                                    <IconButton sx={{ padding: '0  2px 0 0' }}>
                                        <Icon
                                            icon={locationIcon}
                                            width={24}
                                            height={24}
                                            color="black"
                                        />
                                    </IconButton>
                                    Order Information
                                </Typography>
                                <Divider sx={{ mt: 1 }} />
                                <Stack direction="row" justifyContent="space-between" mt={1}>
                                    <Typography>Customer Name</Typography>
                                    <Typography>{`${firstName} ${lastName}`}</Typography>
                                </Stack>
                                {orderType === "storeDelivery" && (
                                    <>
                                        <Divider sx={{ mt: 1.5 }} />
                                        <Stack direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Delivery Address</Typography>
                                            <Typography>{`${street} , ${area}`}</Typography>
                                        </Stack>
                                    </>
                                )}

                                <Divider sx={{ mt: 1.5 }} />
                                <Stack direction="row" justifyContent="space-between" mt={1}>
                                    <Typography>Type</Typography>
                                    <Typography>{orderType == "storeDelivery" ? "Delivery" : "Pickup"}</Typography>
                                </Stack>
                                <Divider sx={{ mt: 1.5 }} />
                                <Stack direction="row" justifyContent="space-between" mt={1}>
                                    <Typography>Mobile Number</Typography>
                                    <Typography>+92{phone}</Typography>
                                </Stack>
                                <Divider sx={{ mt: 1.5 }} />
                                <Stack direction="row" justifyContent="space-between" mt={1}>
                                    <Typography>Order Date</Typography>
                                    <Typography>{`${formatDate(new Date(createdAt))} ${formatTime(new Date(createdAt))}`}</Typography>
                                </Stack>
                                {/* <Divider sx={{ mt: 1.5 }} />
                                <Stack direction="row" justifyContent="space-between" mt={1}>
                                    <Typography>{orderType === "storeDelivery" ? "Delivery" : "Pickup"} Date</Typography>
                                    <Typography>August 26,2025 10:30 PM</Typography>
                                </Stack> */}
                            </Grid>
                            <Grid item xs={12} md={4} >
                                <Box
                                    sx={{
                                        borderLeft: { md: '1px solid #f2f4f5', xs: 'none' },
                                        borderTop: { xs: '1px solid #f2f4f5', md: 'none' },
                                        pt: { xs: 2, md: 0 },
                                        pl: { md: 2, xs: 0 },
                                        mt: { xs: 2, md: 0 },
                                        height: '100%',
                                        px: { xs: 2, md: 3 }
                                    }}
                                >
                                    <Typography variant="h6">
                                        <IconButton sx={{ padding: '0 5px 0 0' }} >
                                            <Icon
                                                icon={creditCardIcon}
                                                width={24}
                                                height={24}
                                                color="black"
                                            />
                                        </IconButton>
                                        Payment
                                    </Typography>
                                    <Divider sx={{ mt: 1 }} />

                                    <Stack direction="row" justifyContent="space-between" mt={1}>
                                        <Typography>Total</Typography>
                                        <Typography>Rs. {subTotal}</Typography>
                                    </Stack>

                                    {tax > 0 && (
                                        <>
                                            <Divider sx={{ mt: 1.5 }} />
                                            <Stack direction="row" justifyContent="space-between" mt={1}>
                                                <Typography>Tax</Typography>
                                                <Typography>Rs. {tax}</Typography>
                                            </Stack>
                                        </>
                                    )}

                                    {serviceFees > 0 && (
                                        <>
                                            <Divider sx={{ mt: 1.5 }} />
                                            <Stack direction="row" justifyContent="space-between" mt={1}>
                                                <Typography>Service Fee</Typography>
                                                <Typography>Rs. {serviceFees}</Typography>
                                            </Stack>
                                        </>
                                    )}

                                    {deliveryFees > 0 && orderType === "storeDelivery" && (
                                        <>
                                            <Divider sx={{ mt: 1.5 }} />
                                            <Stack direction="row" justifyContent="space-between" mt={1}>
                                                <Typography>Delivery Fee</Typography>
                                                <Typography>Rs. {deliveryFees}</Typography>
                                            </Stack>
                                        </>
                                    )}

                                    {platformFees > 0 && (
                                        <>
                                            <Divider sx={{ mt: 1.5 }} />
                                            <Stack direction="row" justifyContent="space-between" mt={1}>
                                                <Typography>Platform Fee</Typography>
                                                <Typography>Rs. {platformFees}</Typography>
                                            </Stack>
                                        </>
                                    )}

                                    <Divider sx={{ mt: 1.5 }} />
                                    <Stack direction="row" justifyContent="space-between" mt={1}>
                                        <Typography sx={{ fontWeight: "bold", fontSize: '20px' }}>Grand Total</Typography>
                                        <Typography sx={{ fontWeight: "bold", fontSize: '20px' }}>Rs. {total}</Typography>
                                    </Stack>

                                    <Divider sx={{ mt: 1.5 }} />
                                    <Stack direction="row" justifyContent="space-between" mt={1}>
                                        <Typography>Payment Type</Typography>
                                        <Typography sx={{ fontWeight: "bold" }}>
                                            {paymentType === "cash" ? "Cash" : "Card"}
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Grid>

                        </Grid>
                        <Divider sx={{ mt: 1.5 }} />
                        <Grid container spacing={2} p={{ xs: 2, md: 3 }}>
                            <Grid item xs={12} md={12}>
                                <Typography variant="h6" gutterBottom>
                                    <IconButton sx={{ padding: '0 5px 0 0' }} >
                                        <Icon
                                            icon={cartIcon}
                                            width={24}
                                            height={24}
                                            color="black"
                                        />
                                    </IconButton>
                                    Product
                                </Typography>

                                <TableContainer component={Paper} sx={{ boxShadow: 0 }}>
                                    <Table size="small">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell><strong>Name</strong></TableCell>
                                                <TableCell align="center"><strong>Quantity</strong></TableCell>
                                                <TableCell align="right"><strong>Price</strong></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {items.map((item, index) => (
                                                <TableRow key={index}>
                                                    <TableCell align="left">
                                                        <Typography
                                                            sx={{
                                                                fontWeight: "bold",
                                                                fontSize: 14,
                                                            }}
                                                        >
                                                            {item.name}
                                                        </Typography>
                                                        {item?.selectedVariant && (
                                                            <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
                                                                <Typography
                                                                    sx={{
                                                                        fontSize: 12,
                                                                        fontWeight: "bold",
                                                                        mr: 0.5,
                                                                    }}
                                                                >
                                                                    Variant:
                                                                </Typography>
                                                                <Typography sx={{ fontSize: 12 }}>
                                                                    {item?.selectedVariant?.name}
                                                                </Typography>
                                                            </Box>
                                                        )}

                                                        {item?.groups?.length > 0 && (
                                                            <Box sx={{ mt: 0.5 }}>
                                                                {item.groups.map((sauce, index) => (
                                                                    <Typography
                                                                        key={index}
                                                                        variant="caption"
                                                                        sx={{
                                                                            display: "flex",
                                                                            flexWrap: "wrap",
                                                                            fontWeight: "bold",
                                                                            fontSize: 12,
                                                                        }}
                                                                    >
                                                                        + {sauce?.name} :
                                                                        <Typography
                                                                            variant="caption"
                                                                            sx={{
                                                                                ml: 0.5,
                                                                                fontSize: 12,
                                                                                display: "flex",
                                                                                flexWrap: "wrap",
                                                                            }}
                                                                        >
                                                                            {sauce?.items?.map((sauceItem, sauceIndex) => (
                                                                                <span key={sauceIndex}>
                                                                                    {sauceItem?.item} {`(Rs. ${fNumber(sauceItem.price * item.qty)})`}
                                                                                    {sauceIndex !== sauce?.items?.length - 1 && ", "}
                                                                                </span>
                                                                            ))}
                                                                        </Typography>
                                                                    </Typography>
                                                                ))}
                                                            </Box>
                                                        )}

                                                        {/* Notes */}
                                                        {item?.notes && (
                                                            <Typography
                                                                variant="caption"
                                                                sx={{
                                                                    display: "block",
                                                                    mt: 0.5,
                                                                    fontSize: 12,
                                                                    color: "#666",
                                                                    whiteSpace: "nowrap",
                                                                    overflow: "hidden",
                                                                    textOverflow: "ellipsis",
                                                                    maxWidth: "200px",
                                                                    "@media (max-width: 600px)": {
                                                                        fontSize: "10px",
                                                                        maxWidth: "120px",
                                                                    },
                                                                }}
                                                            >
                                                                Note: {item?.notes}
                                                            </Typography>
                                                        )}
                                                    </TableCell>
                                                    <TableCell align="center">{item.qty}</TableCell>
                                                    <TableCell align="right">Rs. {item.price}</TableCell>
                                                </TableRow>

                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* Order Information Paymnet and Product section End */}
                </Box>

                {/* Footer */}
                <Box sx={{ width: '85%', mx: 'auto' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2,
                            py: 2,
                        }}
                    >
                        <Box>
                            <Typography variant="h4"
                                sx={{
                                    textAlign: { xs: "center", md: "left" }
                                }}
                            >Need Support ?
                            </Typography>
                            <Typography mt={1}>
                                Question regarding your order?
                                <span style={{
                                    fontWeight: 700,
                                    marginLeft: 10
                                }}>
                                    Call us: 0333-3122223
                                </span>
                            </Typography>
                        </Box>

                        <Button variant="contained"
                            onClick={redirectHome}
                            sx={{
                                background: "#0F1110",
                                color: '#F1D9C4'
                            }}
                        >
                            Place another order
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            py: 3,
                            backgroundColor:
                                styles?.FooterBackgroundColor?.value || themeColors?.FooterBackgroundColor?.value,
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 1,
                        }}
                    >
                        <Typography variant="body2" component="span" sx={getFooterStyles("FooterText")}>
                            Powered by
                        </Typography>
                        <Link
                            href="#"
                            color="inherit"
                            underline="hover"
                            sx={getFooterStyles("FooterLink")}
                            fontWeight="bold"
                        >
                            Egora
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>

    );
}