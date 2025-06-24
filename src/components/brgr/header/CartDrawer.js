import React from "react";
import {
  Drawer,
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify-icons/mdi/close";
import cartEmpty from "@iconify-icons/mdi/bag-personal-outline";

const CartDrawer = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          width: "100%",
          maxWidth: 380,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 32,
          paddingBottom: 32,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16,
        },
      }}
    >
      <IconButton
        onClick={onClose}
        style={{
          position: "absolute",
          top: 12,
          right: 12,
        }}
      >
        <Icon icon={closeIcon} width={24} height={24} />
      </IconButton>

      <Box style={{ marginBottom: 24 }}>
        <Icon icon={cartEmpty} width={100} height={100} />
      </Box>

      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Your Cart is Empty
      </Typography>
      <Typography
        variant="body2"
        align="center"
        color="text.secondary"
        style={{ marginBottom: 24 }}
      >
        Looks like you haven’t added anything to your cart yet. Start exploring
        and shop your favorite items!
      </Typography>

      <Button
        variant="contained"
        onClick={onClose}
        style={{
          textTransform: "none",
          borderRadius: 16,
        }}
      >
        Browse Product
      </Button>
    </Drawer>
  );
};

export default CartDrawer;