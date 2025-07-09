import { Typography, Box,Link } from "@mui/material";

export default function CustomFooter({ themeColors, actions, prop, styles, states }) {
    return (
        <Box
            style={{
                width: '100%',
                paddingBottom: '4rem',
                paddingTop: '4rem',
                backgroundColor: styles?.FooterBackgroundColor?.value || themeColors?.FooterBackgroundColor?.value,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                padding: '25px 15px !important',
                minHeight: '280px',
                color: styles?.FooterTextColor?.value || themeColors?.FooterTextColor?.value
            }}
        >

            <Box
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#acacab',
                    fontSize: '14px',
                }}
            >
                <Typography variant="body2" component="span">
                    Powered by
                </Typography>
                <Link
                    href="#"
                    color="inherit"
                    underline="hover"
                    style={{ fontWeight: 'bold', color: '#acacab' }}
                >
                    Egora
                </Link>
                <Typography variant="body2" component="span">
                    |
                </Typography>
                <Link
                    href="#"
                    color="inherit"
                    underline="hover"
                    style={{ color: '#acacab' }}
                >
                    Privacy Policy
                </Link>
                <Typography variant="body2" component="span">
                    |
                </Typography>
                <Link
                    href="#"
                    color="inherit"
                    underline="hover"
                    style={{ color: '#acacab' }}
                >
                    Faqs
                </Link>
            </Box>
        </Box>
    );

}