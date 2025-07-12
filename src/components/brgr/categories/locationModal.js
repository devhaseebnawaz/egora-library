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



export default function LocationModal({ open, handleClose, themeColors, actions, prop, styles, states }) {
    useEffect(() => {
        if (states.citySearch) {
            states.setFilteredCities(
                states.cities?.filter(city =>
                    city.name.toLowerCase().includes(states.citySearch.toLowerCase())
                )
            );
        } else {
            states.setFilteredCities(states.cities);
        }
    }, [states.citySearch])

    const filteredOutlets = states.outlets[states.selectedCity]?.filter(outlet =>
        outlet.name.toLowerCase().includes(states.searchQuery.toLowerCase()) || []);

    return (
        <Modal open={open} onClose={handleClose}>
            <Box style={modalStyle}>
                <Box
                    style={{
                        position: "absolute",
                        top: 9,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        backgroundColor: "black",
                        zIndex: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src="/brgr/logo/logo.webp"
                        alt="BRGR"
                        style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "contain",
                        }}
                    />
                </Box>

                <Box style={{ display: "flex", flexDirection: "column" }}>
                    <Box
                        style={{
                            flex: 1,
                            padding: "32px",
                            paddingTop: "48px",
                            marginTop: "40px",
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
                                    onClick={() => states.setOrderType("delivery")}
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
                                    onClick={() => states.setOrderType("pickup")}
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

                        {states.orderType === "delivery" ? (
                            <>
                                <Typography variant="body2" style={{ marginBottom: "8px", textAlign: "center", fontWeight: "600" }}>
                                    Please select your location
                                </Typography>

                                <Box
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        border: "1px solid #ccc",
                                        borderRadius: "8px",
                                        paddingLeft: "16px",
                                        paddingRight: "16px",
                                        paddingTop: "12px",
                                        paddingBottom: "12px",
                                        marginBottom: "16px",
                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        placeholder="Search Location"
                                        variant="standard"
                                        InputProps={{
                                            disableUnderline: true,
                                            style: {
                                                color: "#555",
                                                fontSize: "0.95rem",
                                            },
                                        }}
                                    />
                                    <Typography style={{ marginLeft: "8px" }}>→</Typography>
                                </Box>

                                <Divider style={{ marginBottom: "16px" }} />

                                <Typography variant="body2" style={{ fontWeight: "bold", marginBottom: "4px" }}>
                                    📍 Use Current Location
                                </Typography>
                                <Typography variant="caption">
                                    DHA Phase 5, Rehman Villas, Chung Khurad, Lahore, Lahore...
                                </Typography>
                                <Typography
                                    variant="body2"
                                    style={{ color: "blue", textAlign: "right", marginTop: "8px", marginBottom: "16px" }}
                                >
                                    change
                                </Typography>
                            </>
                        ) : (
                            <>
                                <Typography variant="body2" style={{ marginBottom: "16px", textAlign: "center", fontWeight: "600" }}>
                                    Which outlet would you like to pick-up from?
                                </Typography>

                                <Box style={{ marginBottom: "16px" }}>
                                    <Autocomplete
                                        options={states.filteredCities}
                                        getOptionLabel={(option) => option.name}
                                        value={states.cities.find(city => city.name === states.selectedCity) || null}
                                        onChange={(event, newValue) => {
                                            states.setSelectedCity(newValue ? newValue.name : "");
                                            states.setSelectedOutlet("");
                                        }}
                                        inputValue={states.citySearch}
                                        onInputChange={(event, newInputValue) => {
                                            states.setCitySearch(newInputValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                placeholder="Search city"
                                                variant="outlined"
                                                fullWidth
                                                InputProps={{
                                                    ...params.InputProps,
                                                    style: {
                                                        borderRadius: "8px",
                                                        height: "48px",
                                                    },
                                                }}
                                            />
                                        )}
                                        noOptionsText="No cities found"
                                        style={{ width: "100%" }}
                                    />
                                </Box>

                                <Box style={{ marginBottom: "16px" }}>
                                    <Autocomplete
                                        options={filteredOutlets}
                                        getOptionLabel={(option) => option.name}
                                        value={filteredOutlets.find(outlet => outlet.name === states.selectedOutlet) || null}
                                        onChange={(event, newValue) => {
                                            states.setSelectedOutlet(newValue ? newValue.name : "");
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
                                            <li {...props}>
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

                                {states.selectedOutlet && (
                                    <Box style={{
                                        backgroundColor: "#f5f5f5",
                                        borderRadius: "8px",
                                        padding: "16px",
                                        marginBottom: "16px"
                                    }}>
                                        <Typography fontWeight="bold">{states.selectedOutlet}</Typography>
                                        <Typography variant="body2" color="textSecondary" style={{ marginTop: "4px" }}>
                                            {states.outlets[states.selectedCity]?.find(o => o.name === states.selectedOutlet)?.location}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="primary"
                                            style={{ marginTop: "8px", cursor: "pointer" }}
                                        >
                                            Get Directions
                                        </Typography>
                                    </Box>
                                )}
                            </>
                        )}

                        <Button
                            variant="contained"
                            fullWidth
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
                            disabled={states.orderType === "pickup" && !states.selectedOutlet}
                        >
                            {states.orderType === "delivery" ? "Confirm Selection" : "Select"}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
}