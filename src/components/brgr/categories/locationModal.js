import React, { useEffect } from "react";
import {
    Modal,
    Box,
    Typography,
    Button,
    Divider,
    TextField,
    InputAdornment,
    Autocomplete
} from "@mui/material";
import UniversalImage from "../../../UniversalImage";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: 24,
    padding: 0,
    overflow: "hidden",
};

export default function LocationModal({ themeColors, actions, prop, styles, states }) {
    const filteredOutlets = states.outlets?.filter(outlet =>
        outlet.name.toLowerCase().includes(states.searchQuery.toLowerCase())
    ) || [];

    return (
        <Modal open={!states.selectedVenue && states.locationModalOpen} onClose={() => {
            if (!states.selectedVenue) {
                actions.handleOpenLocationModal()
            }
        }}>
            <Box style={modalStyle}>
                <Box
                    style={{
                        position: "absolute",
                        top: "12%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 100,
                        height: 100,
                        borderRadius: "50%",
                        overflow: "hidden",
                        backgroundColor: "#121212",
                        marginTop: "8px",
                    }}
                >
                    <UniversalImage
                        src={prop.editable.logoImage.value}
                        alt="BRGR Logo"
                        layout="fill"
                        objectFit="contain"
                        onError={() => console.log("Image failed to load")}
                        width="100%"
                        height="100%"
                    />
                </Box>

                <Box style={{ display: "flex", flexDirection: "column" }}>
                    <Box
                        style={{
                            flex: 1,
                            padding: "32px",
                            paddingTop: "48px",
                            marginTop: "60px",
                        }}
                    >
                        <Typography
                            variant="h6"
                            align="center"
                            style={{
                                fontWeight: "bold",
                                marginBottom: "16px",
                                alignItems: "center",
                            }}
                        >
                            Select your order type
                        </Typography>

                        <Box
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "24px",
                            }}
                        >
                            <Box
                                style={{
                                    display: "flex",
                                    backgroundColor: "#E0E0E0",
                                    borderRadius: "999px",
                                    padding: "4px",
                                }}
                            >
                                <Button
                                    onClick={() => actions.handleSetOrderType("delivery")}
                                    style={{
                                        borderRadius: "999px",
                                        paddingLeft: "24px",
                                        paddingRight: "24px",
                                        paddingTop: "8px",
                                        paddingBottom: "8px",
                                        fontWeight: "bold",
                                        fontSize: "0.75rem",
                                        backgroundColor: states.orderType === "delivery" ? "#121212" : "transparent",
                                        color: states.orderType === "delivery" ? "#f6e6d6" : "#333",
                                        boxShadow: "none",
                                    }}
                                >
                                    DELIVERY
                                </Button>
                                <Button
                                    onClick={() => actions.handleSetOrderType("pickup")}
                                    style={{
                                        borderRadius: "999px",
                                        paddingLeft: "24px",
                                        paddingRight: "24px",
                                        paddingTop: "8px",
                                        paddingBottom: "8px",
                                        fontWeight: "bold",
                                        fontSize: "0.75rem",
                                        backgroundColor: states.orderType === "pickup" ? "#121212" : "transparent",
                                        color: states.orderType === "pickup" ? "#f6e6d6" : "#333",
                                        boxShadow: "none",
                                    }}
                                >
                                    PICKUP
                                </Button>
                            </Box>
                        </Box>

                        <>
                            <Typography variant="body2" style={{ marginBottom: "16px", textAlign: "center", fontWeight: "600" }}>
                                Which outlet would you like to pick-up from?
                            </Typography>



                            <Box style={{ marginBottom: "16px" }}>
                            <Autocomplete
                                    options={filteredOutlets}
                                    getOptionLabel={(option) => {
                                        if (typeof option === 'string') return option;
                                        if (option && typeof option.name === 'string') return option.name;
                                        return '';
                                      }}
                                    value={states.selectedOutlet}
                                    onChange={(event, newValue) => {
                                        console.log("here mahum see")
                                        actions.handleSetSelectedVenue(newValue)
                                        states.setSelectedOutlet(newValue);
                                    }}
                                    inputValue={states.searchQuery}
                                    onInputChange={(event, newInputValue) => {
                                        states.setSearchQuery(newInputValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            placeholder="Search outlet"
                                            variant="outlined"
                                            fullWidth
                                            InputProps={{
                                                ...params.InputProps,
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <Typography>🔍</Typography>
                                                    </InputAdornment>
                                                ),
                                                style: {
                                                    borderRadius: "8px",
                                                    height: "48px",
                                                },
                                            }}
                                        />
                                    )}
                                    renderOption={(props, option) => (
                                        <li  {...props} key={option._id} >
                                            <Box>
                                                <Typography fontWeight="bold">{option.name}</Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    {option.location}
                                                </Typography>
                                            </Box>
                                        </li>
                                    )}
                                    noOptionsText="No outlets found"
                                    style={{ width: "100%" }}
                                />
                            </Box>



                        </>

                        <Button
                            variant="contained"
                            fullWidth
                            onClick={() => { states.setGetNewData(true); actions.handleOpenLocationModal(); actions.handleDeleteCartBySessionId();}}
                            style={{
                                backgroundColor: "#000",
                                color: "#fff",
                                textTransform: "none",
                                fontWeight: "bold",
                                borderRadius: "8px",
                                paddingTop: "12px",
                                paddingBottom: "12px",
                                marginTop: "16px",
                            }}
                            disabled={!states.selectedOutlet}
                        >
                            Select
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
}