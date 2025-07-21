import React, { useState, useEffect } from 'react';
import {
    Box, Typography, Grid, Paper, Divider, Button, Link
} from '@mui/material';
import UserInfoPage from './UserInfoPage';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../../components/hook-form";
import * as Yup from "yup";
import CartItems from '../header/CartItems';
import CartCheckoutTotalSummary from './CartCheckoutTotalSummary';
// import PaymentMethods from './PaymentMethods';

const UserSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required").matches(/^[a-zA-Z ]*$/, "Only alphabets allowed"),
    lastName: Yup.string().required("Last name is required").matches(/^[a-zA-Z ]*$/, "Only alphabets allowed"),
    phone: Yup.string().required("Phone is required").matches(/^\d+$/, "Only numbers allowed").length(10, "10 digits required"),
    email: Yup.string().required("Email is required").email("Invalid email"),
});

const defaultValues = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
};

const CartCheckoutSummary = ({ themeColors, actions, prop, styles, states, PaymentComponent }) => {
    console.log('states',states);
    
    const { items } = states.cardItems ?? []
    const cartItems = items
    const [orderData, setOrderData] = useState({})


    const methods = useForm({
        resolver: yupResolver(UserSchema),
        defaultValues,
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = async (data) => {
        states.setCustomerInfo(data)
        const response = await actions.handlePlaceOrder({ ...orderData, customer: { ...data } });
        if (response) {
            actions.naviagateOrderSuccess()
        }
    };


    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Box p={10} sx={{ backgroundColor: '#f5f5f5' }}>
                <Grid container spacing={3} justifyContent="center">
                    {states.logoUrl &&
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={states.logoUrl} alt="Logo" style={{ height: '125px', borderRadius: '20px' }} />
                        </Grid>
                    }

                    <Grid item xs={12} md={12} container spacing={2}>
                        <Grid item xs={12} md={7}>
                            <Paper sx={{ p: 2 }}>
                                <Typography fontWeight="bold">
                                    This is a <span style={{ fontWeight: 700 }}>{states.orderType} ORDER</span>
                                </Typography>
                                <Typography mt={1}>You have to collect your order from</Typography>
                                <Box mt={2}>
                                    <Typography fontWeight="bold">{states?.selectedVenue?.name}</Typography>
                                    <Typography>
                                        <strong>Location:</strong> {states?.selectedVenue?.venueAddressOne} {states?.selectedVenue?.venueAddressTwo}
                                    </Typography>
                                    {/* <Link href="#" underline="hover" sx={{ fontSize: 14 }}>
                                        View Location 📍
                                    </Link> */}
                                    <Typography>
                                        <strong>Phone:</strong>{' '}
                                        <Link href="tel:03XX-XXXXXXX" underline="hover">
                                            {states?.selectedVenue?.venuePhoneNumber}
                                        </Link>
                                    </Typography>
                                </Box>
                            </Paper>

                            <Paper sx={{ p: 2, mt: 3 }}>
                                <Typography fontWeight="bold" mb={2}>
                                    JUST A LAST STEP, PLEASE FILL YOUR INFORMATION BELOW
                                </Typography>
                                <UserInfoPage />
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={5}>
                            <Paper sx={{ p: 2 }}>

                                {cartItems?.map((cartItem, index) => (
                                    <CartItems
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
                                    />
                                ))}
                                <CartCheckoutTotalSummary
                                    open={states.locationModalOpen}
                                    handleClose={actions.handleOpenLocationModal}
                                    themeColors={themeColors}
                                    actions={actions}
                                    prop={prop}
                                    styles={styles}
                                    states={states}
                                    setOrderData={setOrderData}
                                />
                                {/* <PaymentMethods
                                    actions={actions}
                                    prop={prop}
                                    styles={styles}
                                    states={states}
                                    PaymentComponent={PaymentComponent}
                                /> */}
                                {/* {states.selectedPaymentMethod === "cash" && */}
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        type="submit"
                                        sx={{ mt: 2, backgroundColor: 'black', color: 'white', fontWeight: 'bold' }}
                                    >
                                        {isSubmitting ? "Placing Order..." : "Place Order"}
                                    </Button>
                                {/* } */}
                                <Box textAlign="center" mt={2}>
                                    <Link href="/" underline="hover" fontSize={14} >
                                        ← continue to add more items
                                    </Link>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </FormProvider>
    );
};

export default CartCheckoutSummary;
