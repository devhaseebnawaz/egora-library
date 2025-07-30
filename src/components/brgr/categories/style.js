import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { color } from "@mui/system";
export const StyledBox = styled(Box)({
    boxShadow: "2px 6px 10px rgba(0, 0, 0, 0.3)",
    borderRadius: "8px",
    backgroundColor: "#fff",
    padding: "12px",
    width: "850px",
    marginBottom:'10px',
    "@media (max-width: 1000px)": {
      width: "80vw",
    },
    "@media (max-width: 768px)": {
      width: "80vw",
    },
  });
 export const StyledMenuItem = styled(Typography)({
    fontSize: "16px",
    textAlign:'left',
    padding:'10px',
    cursor:'pointer',
    fontFamily: "Arial, sans-serif",
    width:"100%",
    "&:hover": {
      color: "#000",
      backgroundColor:"#FCA92E",
      borderRadius:'4px',
    },
  });