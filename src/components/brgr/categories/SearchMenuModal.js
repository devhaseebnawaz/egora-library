import React from "react";
import { Modal, Box } from "@mui/material";
import { StyledBox, StyledMenuItem } from "./style";

const modalStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const SearchMenuModal = ({ actions, open, onClose, data, onSelect }) => {
  console.log("List Data -- Search :", data);
  return (
    <Modal open={open} onClose={onClose} sx={modalStyle}>
      <Box>
        {data?.length > 0 && (
          <StyledBox>
            {data?.map(({ description }, index) => (
              <StyledMenuItem
                key={index}
                onClick={() => {
                  onSelect(description);
                  onClose();
                }}
              >
                {(description) => actions?.splitText(description)}
              </StyledMenuItem>
            ))}
          </StyledBox>
        )}
      </Box>
    </Modal>
  );
};

export default SearchMenuModal;
