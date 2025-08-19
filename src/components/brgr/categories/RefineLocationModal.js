import React from "react";
import {
    Modal,
    Box,
    Typography,
    Button,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";


const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 600,
    backgroundColor: "#fff",
    borderRadius: "20px",
    boxShadow: 24,
    overflow: "hidden",
};

const mapContainerStyle = {
    width: "100%",
    height: "calc(100% - 120px)",
};

export default function RefineLocationModal({
    open,
    onClose,
    states,
    actions,
    currentCoords,
    onSave,
}) {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyDL9J82iDhcUWdQiuIvBYa0t5asrtz3Swk",
    });



    // const handleUpdate = () => {
    //     onSave( states?.markerPosition);
    //     onClose();
    // };
    const handleUpdate = async () => {
        const geocoder = new window.google.maps.Geocoder();

        geocoder.geocode({ location:  states?.markerPosition }, (results, status) => {
            if (status === "OK" && results[0]) {
                const formattedAddress = results[0].formatted_address;

                onSave({
                    coords:  states?.markerPosition,
                    address: formattedAddress,
                });
                actions.updateLocation(formattedAddress)
                onClose();
            } else {
                onSave({
                    coords:  states?.markerPosition,
                    address: "Custom Location Selected",
                });
                onClose();
            }
        });
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                <Box
                    sx={{
                        height: "60px",
                        px: 3,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #e0e0e0",
                    }}
                >
                    <Typography fontWeight={700} fontSize="16px">
                         Refine Your Delivery Location
                    </Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={states?.markerPosition}
                        zoom={15}
                        onClick={actions?.handleMapClick}
                    >
                        <Marker
                            position={states?.markerPosition}
                            draggable
                            onDragEnd={actions?.handleMarkerDragEnd}
                        />
                    </GoogleMap>
                ) : (
                    <Box
                        sx={{
                            height: mapContainerStyle.height,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography>Loading map...</Typography>
                    </Box>
                )}

                <Box
                    sx={{
                        height: "40px",
                        p: 1,
                        borderTop: "1px solid #e0e0e0",
                        backgroundColor: "#fff",
                    }}
                >
                    <Button
                        fullWidth
                        onClick={handleUpdate}
                        sx={{
                            backgroundColor: "#000",
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: "16px",
                            borderRadius: "12px",
                            textTransform: "none",
                            "&:hover": {
                                backgroundColor: "#333",
                            },
                        }}
                    >
                        Update
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}
