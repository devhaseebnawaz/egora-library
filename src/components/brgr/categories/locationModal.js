import React from "react";
import {
    Modal,
    Box,
    Typography,
    Button,
    TextField,
    InputAdornment,
    Autocomplete,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchMenuList from "./SearchMenuList";
import UniversalImage from "../../../UniversalImage";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import RefineLocationModal from "./RefineLocationModal";

const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    backgroundColor: "#fff",
    borderRadius: "20px",
    boxShadow: 24,
    padding: "32px 24px 24px",
};

export default function LocationModal({ themeColors, actions, prop, styles, states, isGoogleMapsLoaded, previewMode = false, layout }) {
    const filteredOutlets = states.outlets?.filter((outlet) =>
        outlet.name.toLowerCase().includes(states.searchQuery.toLowerCase())
    ) || [];

    let openModal;

    if (states.locationModalOnClick) {
        openModal = true;
    } else {
        if (states.locationModalOpen) {
            if (states.selectedVenue) {
                openModal = false;
            } else {
                openModal = true;
            }
        }
    }
    const handleOutletSelection = () => {
        states.setGetNewData(true);
        actions.handleOpenLocationModal(false);
        actions.handleOpenLocationModalOnClick(false);
        actions.handleDeleteCartBySessionId();
        actions.handleSetSelectedVenue(states.selectedOutlet);
    };

    const content = (
        <Box sx={modalStyle}>
            {/* Logo */}
            <Box
                sx={{
                    position: "absolute",
                    top: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "80px",
                    height: "80px",
                    borderRadius:
                        layout.locationLayout.body[0].styles?.LocationModalBorderRadius?.value !== 0
                            ? `${layout.locationLayout.body[0].styles?.LocationModalBorderRadius?.value}%`
                            : `${themeColors?.LocationModalBorderRadius?.value || 0}%`,
                    backgroundColor: "#000",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <UniversalImage
                    src={prop.editable.logoImage.value}
                    alt="BRGR Logo"
                    layout="fill"
                    objectFit="contain"
                />
            </Box>

            {/* Content */}
            <Typography
                variant="h6"
                align="center"
                sx={{
                    fontWeight: 700,
                    marginTop: "60px",
                    marginBottom: "16px",
                    fontSize: "20px",
                }}
            >
                Select your order type
            </Typography>

            {/* Order Type Buttons */}
            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                <Box
                    sx={{
                        display: "flex",
                        backgroundColor: "#f0f0f0",
                        borderRadius: "999px",
                        p: "4px",
                    }}
                >
                    <Button
                        onClick={() => actions.handleSetOrderType("storeDelivery")}
                        sx={{
                            borderRadius: "999px",
                            px: 3,
                            py: 1,
                            fontSize: "12px",
                            fontWeight: "bold",
                            bgcolor: states.orderType === "storeDelivery" ? "#000" : "transparent",
                            color: states.orderType === "storeDelivery" ? "#fff" : "#333",
                            boxShadow: "none",
                            minWidth: "100px",
                        }}
                    >
                        DELIVERY
                    </Button>
                    <Button
                        onClick={() => actions.handleSetOrderType("storePickUp")}
                        sx={{
                            borderRadius: "999px",
                            px: 3,
                            py: 1,
                            fontSize: "12px",
                            fontWeight: "bold",
                            bgcolor: states.orderType === "storePickUp" ? "#000" : "transparent",
                            color: states.orderType === "storePickUp" ? "#fff" : "#333",
                            boxShadow: "none",
                            minWidth: "100px",
                        }}
                    >
                        PICKUP
                    </Button>
                </Box>
            </Box>

            {/* Search Location Field */}
            {states.orderType === "storeDelivery" && <Typography
                variant="body2"
                sx={{ marginBottom: "12px", textAlign: "center", fontWeight: 600 }}
            >
                Please select your location
            </Typography>}
            {states.orderType === "storePickUp" && <Typography
                variant="body2"
                sx={{ marginBottom: "12px", textAlign: "center", fontWeight: 600 }}
            >
                Which outlet would you like to pick-up from?
            </Typography>}

            {states?.orderType === "storePickUp" && (
                <Autocomplete
                    options={filteredOutlets}
                    getOptionLabel={(option) => {
                        if (typeof option === "string") return option;
                        if (option && typeof option.name === "string") return option.name;
                        return "";
                    }}
                    value={states.selectedOutlet}
                    onChange={(event, newValue) => {
                        if (!newValue?.isOnlineForStore) return; // prevent selecting disabled outlet
                        states.setSelectedOutlet(newValue);
                    }}
                    inputValue={states.searchQuery}
                    onInputChange={(event, newInputValue) => {
                        states.setSearchQuery(newInputValue);
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            placeholder="Select Outlet"
                            variant="outlined"
                            fullWidth
                            InputProps={{
                                ...params.InputProps,
                                sx: {
                                    borderRadius: "12px",
                                    height: "48px",
                                    backgroundColor: "#f5f5f5",
                                },
                            }}
                        />
                    )}
                    renderOption={(props, option) => (
                        <li
                            {...props}
                            key={option._id}
                            style={{
                                opacity: option.isOnlineForStore ? 1 : 0.5,
                                pointerEvents: option.isOnlineForStore ? 'auto' : 'none',
                            }}
                        >
                            <Box>
                                <Typography fontWeight="bold">
                                    {option.name} {!option.isOnlineForStore && "(Offline)"}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {option.location}
                                </Typography>
                            </Box>
                        </li>
                    )}
                    noOptionsText="No outlets found"
                    sx={{ mb: 2 }}
                />
            )}

            {states?.orderType === "storeDelivery" && (
                <>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            backgroundColor: "#f5f5f5",
                            borderRadius: "12px",
                            mb: 1,
                        }}
                    >
                        <TextField
                            placeholder="Search Location"
                            variant="outlined"
                            value={states?.value}
                            onChange={(e) => actions?.handleInput(e)}
                            autoComplete="off"
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <ArrowForwardIcon sx={{ color: "#333" }} />
                                    </InputAdornment>
                                ),
                                sx: {
                                    backgroundColor: "#f5f5f5",
                                    borderRadius: "12px",
                                    height: "44px",
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        border: "none",
                                    },
                                    fontSize: "14px",
                                    color: "#555",
                                },
                            }}
                        />
                    </Box>

                    {states.value?.length > 0 && states.data?.length > 0 && (
                        <SearchMenuList
                            data={states.data}
                            actions={actions}
                            onSelect={(e) => actions?.handleSelect(e)}
                        />
                    )}
                </>
            )}

            {states?.orderType === "storeDelivery" && (<Box
                onClick={() => states?.setRefineModalOpen(true)}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#f5f5f5",
                    px: 2,
                    py: 3,
                    mb: 2,
                    cursor: "pointer",
                    width: "100%",
                }}
            >
                <MyLocationIcon sx={{ fontSize: 20, color: "#000", mr: 1 }} />
                <Typography
                    sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#000",
                    }}
                >
                    Use Current Location
                </Typography>
            </Box>)}

            {states?.currentAddress && states?.orderType === "storeDelivery" && <Box
                sx={{
                    // backgroundColor: "#f9f9f9",
                    p: 2,
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 3,
                }}
            >
                <Typography sx={{ fontSize: "14px", mb: 0.5 }}>
                    {states?.currentAddress}
                </Typography>
                <Typography
                    component="span"
                    sx={{
                        color: "blue",
                        cursor: "pointer",
                        fontWeight: "bold",
                        width: "fit-content",
                    }}
                    onClick={() => states?.setRefineModalOpen(true)}
                >
                    change
                </Typography>
            </Box>}


            {/* Confirm Button */}
            {states?.orderType === 'storeDelivery' && <Button
                fullWidth
                // onClick={handleOutletSelection}
                sx={{
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "12px",
                    py: 1.5,
                    fontWeight: "bold",
                    textTransform: "none",
                    fontSize: "16px",
                    ":hover": {
                        backgroundColor: "#333",
                    },
                }}
                disabled={!states.selectedOutlet}
            >
                Confirm Selection
            </Button>}
            {states?.orderType === 'storePickUp' && <Button
                fullWidth
                onClick={handleOutletSelection}
                sx={{
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "12px",
                    py: 1.5,
                    fontWeight: "bold",
                    textTransform: "none",
                    fontSize: "16px",
                    ":hover": {
                        backgroundColor: "#333",
                    },
                }}
                disabled={!states.selectedOutlet || !states.selectedOutlet.isOnlineForStore}
            >
                Select
            </Button>}
        </Box>
    );


    return previewMode ? (
        <Box>{content}</Box>
    ) : (
        <>
            <Modal open={openModal}>
                {content}
            </Modal>
            <RefineLocationModal
                open={states?.refineModalOpen}
                states={states}
                actions={actions}
                onClose={() => states?.setRefineModalOpen(false)}
                currentCoords={states?.userCoordinates}
                onSave={({ coords, address }) => {
                    states?.setUserCoordinates(coords);
                    states?.setCurrentAddress(address);
                }}
            />
        </>
    );

}
