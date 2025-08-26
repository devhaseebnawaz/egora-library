import React from "react";
import { Grid, InputAdornment, Typography } from "@mui/material";
import { RHFTextField } from "../../../components/hook-form";

const CountryCode = process.env.NEXT_PUBLIC_COUNTRY_CODE;

export default function UserInfoPage({ states, layout }) {
    const { orderType } = states ?? {}
    const getHeadingStyles = {
        color:
            layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryHeadingTextColor?.value !== ""
                ? `${layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryHeadingTextColor?.value}`
                : globalComponentStyles?.Text?.color?.value != ""
                    ? globalComponentStyles?.Text?.color?.value
                    : `${themeColors?.CartCheckoutSummaryHeadingTextColor?.value}`,
        fontSize:
            layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryHeadingTextSize?.value != 0
                ? layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryHeadingTextSize?.value
                : globalComponentStyles?.Text?.size?.value != 0
                    ? globalComponentStyles?.Text?.size?.value
                    : themeColors?.CartCheckoutSummaryHeadingTextSize?.value,

        fontFamily: layout?.cartCheckoutSummaryLayout?.body[0].styles?.CartCheckoutSummaryHeadingTextFont?.value != ""
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

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={12}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography fontWeight="600" sx={{ ...getHeadingStyles }}  >
                            First Name
                        </Typography>
                        <RHFTextField name="firstName" sx={{ backgroundColor: "white" }} placeholder="First Name" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography fontWeight="600" sx={{ ...getHeadingStyles }}  >
                            Last Name
                        </Typography>
                        <RHFTextField name="lastName" sx={{ backgroundColor: "white" }} placeholder="Last Name" fullWidth />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={12}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography fontWeight="600" sx={{ ...getHeadingStyles }}  >
                            Mobile Number*
                        </Typography>
                        <RHFTextField
                            fullWidth
                            name="phone"
                            placeholder="3xxxxxxxxx"
                            sx={{ backgroundColor: "white" }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <span>{CountryCode}</span>
                                    </InputAdornment>
                                ),
                                inputMode: "numeric",
                            }}
                            inputProps={{
                                maxLength: 10,
                                onInput: (e) => {
                                    e.target.value = e.target.value.replace(/\D/g, "");
                                },
                                onKeyDown: (e) => {
                                    if (!/^[0-9]$/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
                                        e.preventDefault();
                                    }
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography fontWeight="600" sx={{ ...getHeadingStyles }}  >
                            Email Address*
                        </Typography>
                        <RHFTextField name="email" sx={{ backgroundColor: "white" }} placeholder="Enter your email" fullWidth />
                    </Grid>
                </Grid>
            </Grid>
            {orderType === "storeDelivery" && (
                <>
                    <Grid item xs={12} sm={12}>
                        <RHFTextField name="address.street" label="House No / Apartment No / Street No*" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <RHFTextField name="address.area" label="Area*" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <RHFTextField name="address.city" label="City*" disabled />
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            )}
        </Grid>
    );
}
