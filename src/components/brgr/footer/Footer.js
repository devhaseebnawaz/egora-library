import React from "react";
import { Typography, Box, Link as MUILink } from "@mui/material";

// Dynamically import Next.js components if available
let NextLink, useRouter;
try {
  NextLink = require("next/link").default;
  useRouter = require("next/router").useRouter;
} catch (err) {
  NextLink = null;
  useRouter = () => ({ push: () => {} });
}

export default function CustomFooter({
  themeColors,
  actions,
  prop,
  styles,
  states,
  globalComponentStyles
}) {
  const router = useRouter();

  const linkData = prop?.editable?.link?.value || {};
  const faqType = linkData.type;
  const faqUrl = linkData.url || "#";
  const faqName = linkData.name || "Faqs";

  const handleFaqClick = (e) => {
    if (faqType === "page" && faqUrl) {
      e.preventDefault();
      router.push(faqUrl);
    }
  };

  const getFooterTypographyStyles = {
    color:
      styles?.FooterTextColor?.value !== ""
        ? styles?.FooterTextColor?.value
        : globalComponentStyles?.Text?.color?.value !== ""
          ? globalComponentStyles?.Text?.color?.value
          : themeColors?.FooterTextColor?.value,

    fontSize:
      styles?.FooterTextSize?.value !== 0
        ? styles?.FooterTextSize?.value
        : globalComponentStyles?.Text?.size?.value !== 0
          ? globalComponentStyles?.Text?.size?.value
          : themeColors?.FooterTextSize?.value,

    fontFamily:
      styles?.FooterTextFont?.value !== ""
        ? styles?.FooterTextFont?.value
        : globalComponentStyles?.Text?.fontFamily?.value !== ""
          ? globalComponentStyles?.Text?.fontFamily?.value
          : themeColors?.FooterTextFont?.value,

    fontStyle:
      styles?.FooterTextStyle?.value !== ""
        ? styles?.FooterTextStyle?.value
        : globalComponentStyles?.Text?.fontWeight?.value !== ""
          ? globalComponentStyles?.Text?.fontWeight?.value
          : themeColors?.FooterTextStyle?.value,
  };

  const getFooterLinkStyles = {
    color:
      styles?.FooterLinkColor?.value !== ""
        ? styles?.FooterLinkColor?.value
        : globalComponentStyles?.Text?.color?.value !== ""
          ? globalComponentStyles?.Text?.color?.value
          : themeColors?.FooterLinkColor?.value,

    fontSize:
      styles?.FooterLinkSize?.value !== 0
        ? styles?.FooterLinkSize?.value
        : globalComponentStyles?.Text?.size?.value !== 0
          ? globalComponentStyles?.Text?.size?.value
          : themeColors?.FooterLinkSize?.value,

    fontFamily:
      styles?.FooterLinkFont?.value !== ""
        ? styles?.FooterLinkFont?.value
        : globalComponentStyles?.Text?.fontFamily?.value !== ""
          ? globalComponentStyles?.Text?.fontFamily?.value
          : themeColors?.FooterLinkFont?.value,

    fontStyle:
      styles?.FooterLinkStyle?.value !== ""
        ? styles?.FooterLinkStyle?.value
        : globalComponentStyles?.Text?.fontWeight?.value !== ""
          ? globalComponentStyles?.Text?.fontWeight?.value
          : themeColors?.FooterLinkStyle?.value,
  };

  return (
    <Box
      style={{
        width: '100%',
        paddingBottom: '4rem',
        paddingTop: '4rem',
        backgroundColor:
          styles?.FooterBackgroundColor?.value !== ""
            ? styles?.FooterBackgroundColor?.value
            : themeColors?.FooterBackgroundColor?.value,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '25px 15px',
        minHeight: '280px',
        color: styles?.FooterTextColor?.value || themeColors?.FooterTextColor?.value,
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
        <Typography
          variant="body2"
          component="span"
          sx={{ ...getFooterTypographyStyles }}
        >
          Powered by
        </Typography>

        <MUILink
          href="#"
          color="inherit"
          underline="hover"
          style={{ fontWeight: 'bold' }}
          sx={{ ...getFooterLinkStyles }}
        >
          Egora
        </MUILink>

        <Typography variant="body2" component="span" sx={{ ...getFooterTypographyStyles }}>
          |
        </Typography>

        <MUILink
          href="#"
          color="inherit"
          underline="hover"
          sx={{ ...getFooterLinkStyles }}
        >
          Privacy Policy
        </MUILink>

        <Typography variant="body2" component="span" sx={{ ...getFooterTypographyStyles }}>
          |
        </Typography>

        {NextLink && faqType === "page" ? (
          <NextLink href={faqUrl || "#"} passHref legacyBehavior>
            <MUILink
              sx={{ ...getFooterLinkStyles }}
              color="inherit"
              underline="hover"
            >
              {faqName}
            </MUILink>
          </NextLink>
        ) : (
          <MUILink
            href={faqUrl || "#"}
            onClick={faqType === "page" ? handleFaqClick : undefined}
            sx={{ ...getFooterLinkStyles }}
            color="inherit"
            underline="hover"
            target={faqType === "url" ? "_blank" : undefined}
            rel={faqType === "url" ? "noopener noreferrer" : undefined}
          >
            {faqName}
          </MUILink>
        )}
      </Box>
    </Box>
  );
}
