import React, { useState, useEffect } from 'react';
import {
    Box, Typography, Grid, Paper, Divider, Button, Link, Alert
} from '@mui/material';
import UserInfoPage from './UserInfoPage';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../../components/hook-form";
import * as Yup from "yup";
import CartItems from '../header/CartItems';
import CartCheckoutTotalSummary from './CartCheckoutTotalSummary';
import PaymentMethods from './PaymentMethods';
import { getScreenSizeCategory } from '../../../utils/fontsize';

const CartCheckoutSummary = ({ layout, globalComponentStyles, themeColors, actions, prop, styles, states, PaymentComponent, previewMode = false }) => {
    layout = layout?.json ? layout?.json : layout
    const getDescriptionStyles = {
        color:
            layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryDescriptionTextColor?.value !== ""
                ? `${layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryDescriptionTextColor?.value}`
                : globalComponentStyles?.Text?.color?.value != ""
                    ? globalComponentStyles?.Text?.color?.value
                    : `${themeColors?.CartCheckoutSummaryDescriptionTextColor?.value}`,
        fontSize:
            layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryDescriptionTextSize?.value[getScreenSizeCategory()] != 0
                ? layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryDescriptionTextSize?.value[getScreenSizeCategory()]
                : globalComponentStyles?.Text?.size?.value[getScreenSizeCategory()] != 0
                    ? globalComponentStyles?.Text?.size?.value[getScreenSizeCategory()]
                    : themeColors?.CartCheckoutSummaryDescriptionTextSize?.value[getScreenSizeCategory()],

        fontWeight: layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryDescriptionTextWeight?.value != ""
            ? layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryDescriptionTextWeight?.value
            : globalComponentStyles?.Text?.fontWeight?.value != ""
                ? globalComponentStyles?.Text?.fontWeight?.value
                : themeColors?.CartCheckoutSummaryDescriptionTextWeight?.value,

        fontFamily: layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryDescriptionTextFont?.value != ""
            ? `${layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryDescriptionTextFont?.value}`
            : globalComponentStyles?.Text?.fontFamily?.value != ""
                ? globalComponentStyles?.Text?.fontFamily?.value
                : `${themeColors?.CartCheckoutSummaryDescriptionTextFont?.value}`,

        fontStyle: layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryDescriptionTextStyle?.value !== ""
            ? `${layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryDescriptionTextStyle?.value}`
            : globalComponentStyles?.Text?.fontStyle?.value != ""
                ? globalComponentStyles?.Text?.fontStyle?.value
                : `${themeColors?.CartCheckoutSummaryDescriptionTextStyle?.value}`,
    };

    const getHeadingStyles = {
        color:
            layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryHeadingTextColor?.value !== ""
                ? `${layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryHeadingTextColor?.value}`
                : globalComponentStyles?.Text?.color?.value != ""
                    ? globalComponentStyles?.Text?.color?.value
                    : `${themeColors?.CartCheckoutSummaryHeadingTextColor?.value}`,
        fontSize:
            layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryHeadingTextSize?.value[getScreenSizeCategory()] != 0
                ? layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryHeadingTextSize?.value[getScreenSizeCategory()]
                : globalComponentStyles?.Text?.size?.value[getScreenSizeCategory()] != 0
                    ? globalComponentStyles?.Text?.size?.value[getScreenSizeCategory()]
                    : themeColors?.CartCheckoutSummaryHeadingTextSize?.value[getScreenSizeCategory()],
        fontWeight:
            layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryHeadingTextWeight?.value != ""
                ? layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryHeadingTextWeight?.value
                : globalComponentStyles?.Text?.fontWeight?.value != ""
                    ? globalComponentStyles?.Text?.fontWeight?.value
                    : themeColors?.CartCheckoutSummaryHeadingTextWeight?.value,
        fontFamily:
            layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryHeadingTextFont?.value != ""
                ? `${layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryHeadingTextFont?.value}`
                : globalComponentStyles?.Text?.fontFamily?.value != ""
                    ? globalComponentStyles?.Text?.fontFamily?.value
                    : `${themeColors?.CartCheckoutSummaryHeadingTextFont?.value}`,

        fontStyle: layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryHeadingTextStyle?.value !== ""
            ? `${layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryHeadingTextStyle?.value}`
            : globalComponentStyles?.Text?.fontWeight?.value != ""
                ? globalComponentStyles?.Text?.fontWeight?.value
                : `${themeColors?.CartCheckoutSummaryHeadingTextStyle?.value}`,
    };

    const getOrderHeadingStyles = {
        color:
            layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryOrderTotalHeadingTextColor?.value !== ""
                ? `${layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryOrderTotalHeadingTextColor?.value}`
                : globalComponentStyles?.Text?.color?.value != ""
                    ? globalComponentStyles?.Text?.color?.value
                    : `${themeColors?.CartCheckoutSummaryOrderTotalHeadingTextColor?.value}`,
        fontSize:
            layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryOrderTotalHeadingTextSize?.value[getScreenSizeCategory()] != 0
                ? layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryOrderTotalHeadingTextSize?.value[getScreenSizeCategory()]
                : globalComponentStyles?.Text?.size?.value[getScreenSizeCategory()] != 0
                    ? globalComponentStyles?.Text?.size?.value[getScreenSizeCategory()]
                    : themeColors?.CartCheckoutSummaryOrderTotalHeadingTextSize?.value[getScreenSizeCategory()],
        fontWeight:
            layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryOrderTotalHeadingTextWeight?.value != ""
                ? layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryOrderTotalHeadingTextWeight?.value
                : globalComponentStyles?.Text?.fontWeight?.value != ""
                    ? globalComponentStyles?.Text?.fontWeight?.value
                    : themeColors?.CartCheckoutSummaryOrderTotalHeadingTextWeight?.value,
        fontFamily:
            layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryOrderTotalHeadingTextFont?.value != ""
                ? `${layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryOrderTotalHeadingTextFont?.value}`
                : globalComponentStyles?.Text?.fontFamily?.value != ""
                    ? globalComponentStyles?.Text?.fontFamily?.value
                    : `${themeColors?.CartCheckoutSummaryOrderTotalHeadingTextFont?.value}`,

        fontStyle: layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryOrderTotalHeadingTextStyle?.value !== ""
            ? `${layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryOrderTotalHeadingTextStyle?.value}`
            : globalComponentStyles?.Text?.fontStyle?.value != ""
                ? globalComponentStyles?.Text?.fontStyle?.value
                : `${themeColors?.CartCheckoutSummaryOrderTotalHeadingTextStyle?.value}`,
    };

    const { items } = states.cardItems ?? []
    const cartItems = items
    const [orderData, setOrderData] = useState({})
    const [franchiseId, setFranchiseId] = useState('');

    useEffect(() => {
        const id = sessionStorage.getItem('franchiseId');
        if (id) setFranchiseId(id);
    }, []);

    const { orderType } = states;
    const { franchise } = states ?? {}
    const { configurations } = franchise ?? {}
    const { isCardAvailableOnStore, isCashAvailableOnStore, isCardAvailableOnDelivery, isCardAvailableOnPickUp, isCashAvailableOnDelivery, isCashAvailableOnPickUp } = configurations ?? {};

    const isCashAllowed = isCashAvailableOnStore &&
        ((orderType === "storeDelivery" && isCashAvailableOnDelivery) ||
            (orderType === "storePickUp" && isCashAvailableOnPickUp));

    const isCardAllowed = isCardAvailableOnStore &&
        ((orderType === "storeDelivery" && isCardAvailableOnDelivery) ||
            (orderType === "storePickUp" && isCardAvailableOnPickUp));

    const canShowPaymentMethods = isCashAllowed || isCardAllowed;

    const UserSchema = Yup.object().shape({
        firstName: Yup.string().required("First name is required").matches(/^[a-zA-Z ]*$/, "Only alphabets allowed"),
        lastName: Yup.string().required("Last name is required").matches(/^[a-zA-Z ]*$/, "Only alphabets allowed"),
        phone: Yup.string().required("Phone is required").matches(/^\d+$/, "Only numbers allowed").length(10, "10 digits required"),
        email: Yup.string().required("Email is required").email("Invalid email"),
        address: Yup.object().shape({
            street: Yup.string().when([], {
                is: () => orderType === "storeDelivery",
                then: (schema) => schema.required("Delivery Address is required"),
                otherwise: (schema) => schema.notRequired(),
            }),
            area: Yup.string().when([], {
                is: () => orderType === "storeDelivery",
                then: (schema) => schema.required("Area is required"),
                otherwise: (schema) => schema.notRequired(),
            }),
            city: Yup.string(),
        }),
    });

    const defaultValues = {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: {
            street: states.currentLocation,
            area: "",
            city: states.selectedVenue?.city ?? "",
        },
    };

    const methods = useForm({
        resolver: yupResolver(UserSchema),
        defaultValues,
    });

    const { handleSubmit, formState: { isSubmitting } } = methods;

    const onSubmit = async (data) => {
        try {
            states.setCustomerInfo(data);
            if (states.paymentMethod === "cash") {
                let response = await actions.handlePlaceOrder({
                    ...orderData,
                    customer: { ...data },
                });
                if (response) {
                    actions.naviagateOrderSuccess(response.data.id);
                }
            } else {
                let response = await actions.handlePlaceOrderFromCard({
                    ...orderData,
                    customer: { ...data },
                });
                if (response) {
                    actions.naviagateOrderSuccess();
                }
            }
        } catch (error) {
            console.error("Order placement failed:", error);
        }
    };


    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ py: { xs: 10, sm: 10, md: 10 }, px: { xs: 2, sm: 2, md: 10 } }} >
                <Grid container spacing={3} justifyContent="center">
                    {states.logoUrl &&
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={states.logoUrl} alt="Logo" style={{ height: '125px', borderRadius: '20px' }} />
                        </Grid>
                    }

                    <Grid item xs={12} md={12} container spacing={2} >
                        <Grid item xs={12} md={7} >
                            <Paper sx={{ p: 4, backgroundColor: '#f7f7f7' }} >
                                  {states.orderType == "storeDelivery" && (
                                    <>
                                        <Typography fontWeight="bold" fontSize={20}   >
                                            Checkout
                                        </Typography>
                                        <Typography sx={{ ...getHeadingStyles }}>
                                            This is a <span style={{ fontWeight: "bold", fontWeight: 600 }}>Delivery Order</span>
                                        </Typography>
                                        <Typography mb={2} sx={{ ...getHeadingStyles }}  >
                                            Just a last step, please enter your details:
                                        </Typography>
                                        <Divider
                                            sx={{
                                                marginTop: "10px",
                                                borderColor: "#E0E0E0",
                                                mb: 2
                                            }}
                                        />
                                    </>
                                )}
                                 {orderType === "storePickUp" && (
                                        <>
                                            <Paper sx={{ p: 4, mb: 2, backgroundColor: '#eaeaea' }}>
                                                <Typography sx={{ ...getHeadingStyles }}>
                                                    This is a <span style={{ fontWeight: "bold", fontWeight: 600 }}>Pickup Order</span>
                                                </Typography>
                                                <Typography mb={2} mt={2} sx={{ ...getHeadingStyles }}  >
                                                    You have to collect your order from
                                                </Typography>
                                                <Box mt={2}>
                                                    <Typography fontWeight="bold" sx={{ ...getHeadingStyles }} >{states?.selectedVenue?.name}</Typography>
                                                    <Typography>
                                                        <Box component="strong" sx={{ ...getHeadingStyles }}>
                                                            Location:
                                                        </Box>{' '}
                                                        <Box component="strong" sx={{ ...getDescriptionStyles }}>
                                                            {states?.selectedVenue?.name} - {states?.selectedVenue?.venueAddressOne} {states?.selectedVenue?.venueAddressTwo}
                                                        </Box>{' '}
                                                    </Typography>
                                                    <Link
                                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                                            `${states?.selectedVenue?.venueAddressOne} ${states?.selectedVenue?.venueAddressTwo}`
                                                        )}`}
                                                        underline="hover"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        sx={{ fontSize: 14 }}
                                                    >
                                                        View Location 📍
                                                    </Link>
                                                    <Typography>
                                                        <Box component="strong" sx={{ ...getHeadingStyles }}>
                                                            Phone:
                                                        </Box>{' '}
                                                        <Link href="tel:03XX-XXXXXXX" underline="hover" sx={{ ...getDescriptionStyles }}>
                                                            {states?.selectedVenue?.venuePhoneNumber}
                                                        </Link>
                                                    </Typography>
                                                </Box >
                                            </Paper>
                                            <Typography mb={2} sx={{ ...getHeadingStyles }}  >
                                                JUST A LAST STEP, PLEASE FILL YOUR INFORMATION BELOW
                                            </Typography>
                                        </>

                                    )
                                }

                                <UserInfoPage states={states} layout={layout} globalComponentStyles={globalComponentStyles} themeColors={themeColors} />
                                {canShowPaymentMethods && (
                                    <Box mt={2}>
                                        <Typography fontWeight="bold" sx={{ ...getHeadingStyles }}  >
                                            Payment Information
                                        </Typography>
                                        <PaymentMethods
                                            actions={actions}
                                            prop={prop}
                                            styles={styles}
                                            states={states}
                                            PaymentComponent={PaymentComponent}
                                        />
                                    </Box>
                                )}

                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Grid item xs={12} md={12} mb={2}>
                                <Paper sx={{ p: 2, mb: 2, backgroundColor: '#f7f7f7' }}>
                                    {cartItems?.map((cartItem, index) => (
                                        <CartItems
                                            previewMode={previewMode}
                                            showButtons={false}
                                            key={index}
                                            cartItem={cartItem}
                                            actions={actions}
                                            index={index}
                                            showDeleteIndex={states.showDeleteIndex}
                                            setShowDeleteIndex={states.setShowDeleteIndex}
                                            handleRemoveFromCart={actions.handleRemoveFromCart}
                                            handleMenuItemClick={actions.handleMenuItemClick}
                                            states={states}
                                            cardItems={cartItems}
                                        />
                                    ))}
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={12}>

                                <Paper >
                                    <CartCheckoutTotalSummary
                                        getDescriptionStyles={getDescriptionStyles}
                                        getHeadingStyles={getHeadingStyles}
                                        getOrderHeadingStyles={getOrderHeadingStyles}
                                        open={states.locationModalOpen}
                                        handleClose={actions.handleOpenLocationModal}
                                        themeColors={themeColors}
                                        actions={actions}
                                        prop={prop}
                                        styles={styles}
                                        states={states}
                                        setOrderData={setOrderData}
                                    />
                                </Paper>

                                {canShowPaymentMethods ? (
                                    <>

                                        {states.paymentMethod === "cash" &&
                                            <Button
                                                disableRipple
                                                disableElevation
                                                variant="contained"
                                                fullWidth
                                                type="submit"
                                                sx={{ mt: 2, backgroundColor: 'black', color: 'white', fontWeight: 'bold' }}
                                            >
                                                {isSubmitting ? "Placing Order..." : "Place Order"}
                                            </Button>
                                        }
                                        {(states.errorForPlaceOrder && states.paymentMethod === "cash") && (
                                            <Alert severity="error" sx={{ mb: 2, mt: 2 }}>
                                                {states.errorForPlaceOrder}
                                            </Alert>
                                        )}
                                        {
                                            previewMode && <Box textAlign="center" mt={2}>
                                                <Link underline="hover" fontSize={14} >
                                                    ← continue to add more items
                                                </Link>
                                            </Box>
                                        } {!previewMode &&

                                            <Box textAlign="center" mt={2}>
                                                <Link href={`/?${franchiseId}`} underline="hover" fontSize={14} >
                                                    ← continue to add more items
                                                </Link>
                                            </Box>
                                        }
                                    </>
                                )
                                    :
                                    <Typography fontWeight="bold" sx={{ mt: 2, mb: 2 }}>
                                        You can't place the order.
                                    </Typography>
                                }
                                {/* </Paper> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </FormProvider>
    );
};

export default CartCheckoutSummary;
