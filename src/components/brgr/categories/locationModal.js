import React, { useState } from "react";
import {
    Modal,
    Box,
    Typography,
    Button,
    Divider,
    TextField
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

export default function LocationModal({ open, handleClose }) {
    const [orderType, setOrderType] = useState("delivery");

    return (
        <Modal open={open} onClose={handleClose}>
            <Box style={modalStyle}>
                {/* BRGR Circle Logo */}
                <Box
                    style={{
                        position: "absolute",
                        top: 4,
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
                    {/* Right Content */}
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
                                    onClick={() => setOrderType("delivery")}
                                    style={{
                                        borderRadius: "999px",
                                        paddingLeft: "24px",
                                        paddingRight: "24px",
                                        paddingTop: "8px",
                                        paddingBottom: "8px",
                                        fontWeight: "bold",
                                        fontSize: "0.75rem",
                                        backgroundColor: orderType === "delivery" ? "#121212" : "transparent",
                                        color: orderType === "delivery" ? "#f6e6d6" : "#333",
                                        boxShadow: "none",
                                    }}
                                >
                                    DELIVERY
                                </Button>
                                <Button
                                    onClick={() => setOrderType("pickup")}
                                    style={{
                                        borderRadius: "999px",
                                        paddingLeft: "24px",
                                        paddingRight: "24px",
                                        paddingTop: "8px",
                                        paddingBottom: "8px",
                                        fontWeight: "bold",
                                        fontSize: "0.75rem",
                                        backgroundColor: orderType === "pickup" ? "#121212" : "transparent",
                                        color: orderType === "pickup" ? "#f6e6d6" : "#333",
                                        boxShadow: "none",
                                    }}
                                >
                                    PICKUP
                                </Button>
                            </Box>
                        </Box>

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
                            }}
                        >
                            Confirm Selection
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
}
