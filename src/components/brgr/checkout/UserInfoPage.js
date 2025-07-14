import React from "react";
import { Grid, InputAdornment } from "@mui/material";
import { RHFTextField } from "../../../components/hook-form";

const CountryCode = process.env.NEXT_PUBLIC_COUNTRY_CODE;

export default function UserInfoPage() {
    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={10}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <RHFTextField name="firstName" label="First Name" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <RHFTextField name="lastName" label="Last Name" fullWidth />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={10}>
                <RHFTextField
                    fullWidth
                    name="phone"
                    label="Phone number"
                    placeholder="3xxxxxxxxx"
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

            <Grid item xs={12} sm={10}>
                <RHFTextField name="email" label="Email address" fullWidth />
            </Grid>
        </Grid>
    );
}
