import React, { useMemo } from "react";
import {
  Drawer,
  Box,
  Typography,
  Button,
  IconButton,
  Divider,
  Avatar,
} from "@mui/material";
import { Icon } from "@iconify/react";
import arrowRightIcon from "@iconify-icons/mdi/arrow-right";
import deleteIcon from "@iconify-icons/mdi/delete";
import plusIcon from "@iconify-icons/mdi/plus";
import closeIcon from "@iconify-icons/mdi/close";
import CartItems from "./CartItems";
import { fNumber } from "../../../utils/formatNumber";
import { calculateAndRoundTax } from "../../../utils/tax";
import {
  calculateSubTotal,
  isApplicable,
  calculateServiceFee,
  calculateFinalTotal,
} from "../../../utils/cart";

const CartDrawer = ({
  open,
  onClose,
  themeColors,
  actions,
  prop,
  styles,
  states,
  layout,
  globalComponentStyles,
  previewMode = false
}) => {
   layout = layout?.json ? layout?.json : layout
  const getHeadingStyles = {
    color:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerHeadingsTextColor
        ?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerHeadingsTextColor
          ?.value
        : globalComponentStyles?.Text?.color?.value != ""
          ? globalComponentStyles?.Text?.color?.value
          : themeColors?.cartDrawerHeadingsTextColor?.value,
    fontSize:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerHeadingsTextSize?.value != 0
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerHeadingsTextSize?.value
          : globalComponentStyles?.Text?.size?.value != 0
            ? globalComponentStyles?.Text?.size?.value
              : themeColors?.cartDrawerHeadingsTextSize?.value,

    fontFamily:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerHeadingsTextFont
        ?.value != ""
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerHeadingsTextFont
          ?.value
        : globalComponentStyles?.Text?.fontFamily?.value != ""
          ? globalComponentStyles?.Text?.fontFamily?.value
          : themeColors?.cartDrawerHeadingsTextFont?.value,

    fontStyle:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerHeadingsTextStyle
        ?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerHeadingsTextStyle
          ?.value
        : globalComponentStyles?.Text?.fontWeight?.value != ""
          ? globalComponentStyles?.Text?.fontWeight?.value
          : themeColors?.cartDrawerHeadingsTextStyle?.value,
  };

  const getSubHeadingStyles = {
    color:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSubHeadingsTextColor
        ?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles
          ?.cartDrawerSubHeadingsTextColor?.value
        : globalComponentStyles?.Text?.color?.value != ""
          ? globalComponentStyles?.Text?.color?.value
          : themeColors?.cartDrawerSubHeadingsTextColor?.value,
    fontSize:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSubHeadingsTextSize
        ?.value != 0
        ? layout?.cartDrawerLayout?.body[0].styles
          ?.cartDrawerSubHeadingsTextSize?.value
        : globalComponentStyles?.Text?.size?.value != 0
          ? globalComponentStyles?.Text?.size?.value
          : themeColors?.cartDrawerSubHeadingsTextSize?.value,

    fontFamily:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSubHeadingsTextFont
        ?.value != ""
        ? layout?.cartDrawerLayout?.body[0].styles
          ?.cartDrawerSubHeadingsTextFont?.value
        : globalComponentStyles?.Text?.fontFamily?.value != ""
          ? globalComponentStyles?.Text?.fontFamily?.value
          : themeColors?.cartDrawerSubHeadingsTextFont?.value,

    fontStyle:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSubHeadingsTextStyle
        ?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles
          ?.cartDrawerSubHeadingsTextStyle?.value
        : globalComponentStyles?.Text?.fontWeight?.value != ""
          ? globalComponentStyles?.Text?.fontWeight?.value
          : themeColors?.cartDrawerSubHeadingsTextStyle?.value,
  };

  const getDescriptionStyles = {
    color:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerDescriptionTextColor
        ?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles
          ?.cartDrawerDescriptionTextColor?.value
        : globalComponentStyles?.Text?.color?.value != ""
          ? globalComponentStyles?.Text?.color?.value
          : themeColors?.cartDrawerDescriptionTextColor?.value,
    fontSize:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerDescriptionTextSize
        ?.value != 0
        ? layout?.cartDrawerLayout?.body[0].styles
          ?.cartDrawerDescriptionTextSize?.value
        : globalComponentStyles?.Text?.size?.value != 0
          ? globalComponentStyles?.Text?.size?.value
          : themeColors?.cartDrawerDescriptionTextSize?.value,

    fontFamily:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerDescriptionTextFont
        ?.value != ""
        ? layout?.cartDrawerLayout?.body[0].styles
          ?.cartDrawerDescriptionTextFont?.value
        : globalComponentStyles?.Text?.fontFamily?.value != ""
          ? globalComponentStyles?.Text?.fontFamily?.value
          : themeColors?.cartDrawerDescriptionTextFont?.value,

    fontStyle:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerDescriptionTextStyle
        ?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles
          ?.cartDrawerDescriptionTextStyle?.value
        : globalComponentStyles?.Text?.fontWeight?.value != ""
          ? globalComponentStyles?.Text?.fontWeight?.value
          : themeColors?.cartDrawerDescriptionTextStyle?.value,
  };

  const getPriceTextStyles = {
    color:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerPriceTextColor
        ?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerPriceTextColor
          ?.value
        : globalComponentStyles?.Text?.color?.value != ""
          ? globalComponentStyles?.Text?.color?.value
          : themeColors?.cartDrawerPriceTextColor?.value,
    fontSize:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerPriceTextSize
        ?.value != 0
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerPriceTextSize
          ?.value
        : globalComponentStyles?.Text?.size?.value != 0
          ? globalComponentStyles?.Text?.size?.value
          : themeColors?.cartDrawerPriceTextSize?.value,
    fontFamily:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerPriceTextFont
        ?.value != ""
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerPriceTextFont
          ?.value
        : globalComponentStyles?.Text?.fontFamily?.value != ""
          ? globalComponentStyles?.Text?.fontFamily?.value
          : themeColors?.cartDrawerPriceTextFont?.value,
    fontStyle:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerPriceTextStyle
        ?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerPriceTextStyle
          ?.value
        : globalComponentStyles?.Text?.fontWeight?.value != ""
          ? globalComponentStyles?.Text?.fontWeight?.value
          : themeColors?.cartDrawerPriceTextStyle?.value,
  };

  const getTotalTextStyles = {
    color:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerTotalTextColor
        ?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerTotalTextColor
          ?.value
        : globalComponentStyles?.Text?.color?.value != ""
          ? globalComponentStyles?.Text?.color?.value
          : themeColors?.cartDrawerTotalTextColor?.value,
    fontSize:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerTotalTextSize
        ?.value != 0
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerTotalTextSize
          ?.value
        : globalComponentStyles?.Text?.size?.value != 0
          ? globalComponentStyles?.Text?.size?.value
          : themeColors?.cartDrawerTotalTextSize?.value,
    fontFamily:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerTotalTextFont
        ?.value != ""
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerTotalTextFont
          ?.value
        : globalComponentStyles?.Text?.fontFamily?.value != ""
          ? globalComponentStyles?.Text?.fontFamily?.value
          : themeColors?.cartDrawerTotalTextFont?.value,
    fontStyle:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerTotalTextStyle
        ?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerTotalTextStyle
          ?.value
        : globalComponentStyles?.Text?.fontWeight?.value != ""
          ? globalComponentStyles?.Text?.fontWeight?.value
          : themeColors?.cartDrawerTotalTextStyle?.value,
  };

  const getButtonStyles = {
    backgroundColor:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerButtonBackgroundColor
        ?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles
          ?.cartDrawerButtonBackgroundColor?.value
        : globalComponentStyles?.Button?.backgroundColor?.value != ""
          ? globalComponentStyles?.Button?.backgroundColor?.value
          : themeColors?.cartDrawerButtonBackgroundColor?.value,
    color:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerButtonTextColor
        ?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerButtonTextColor
          ?.value
        : globalComponentStyles?.Button?.color?.value != ""
          ? globalComponentStyles?.Button?.color?.value
          : themeColors?.cartDrawerButtonTextColor?.value,
    fontSize:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerButtonTextSize
        ?.value != 0
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerButtonTextSize
          ?.value
        : globalComponentStyles?.Button?.size?.value != 0
          ? globalComponentStyles?.Button?.size?.value
          : themeColors?.cartDrawerButtonTextSize?.value,
    fontFamily:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerButtonTextFont
        ?.value != ""
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerButtonTextFont
          ?.value
        : globalComponentStyles?.Button?.fontFamily?.value != ""
          ? globalComponentStyles?.Button?.fontFamily?.value
          : themeColors?.cartDrawerButtonTextFont?.value,
    fontStyle:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerButtonTextStyle
        ?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerButtonTextStyle
          ?.value
        : globalComponentStyles?.Button?.fontWeight?.value != ""
          ? globalComponentStyles?.Button?.fontWeight?.value
          : themeColors?.cartDrawerButtonTextStyle?.value,
    borderRadius:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerButtonBorderRadius
        ?.value != 0
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerButtonBorderRadius
          ?.value
        : globalComponentStyles?.Button?.borderRadius?.value != 0
          ? globalComponentStyles?.Button?.borderRadius?.value
          : themeColors?.cartDrawerButtonBorderRadius?.value,
  };

  const getSecondaryButtonStyles = {
    backgroundColor:
      layout?.cartDrawerLayout?.body[0].styles
        ?.cartDrawerSecondaryButtonBackgroundColor?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles
          ?.cartDrawerSecondaryButtonBackgroundColor?.value
        : globalComponentStyles?.Button?.secondaryBackgroundColor?.value != ""
          ? globalComponentStyles?.Button?.secondaryBackgroundColor?.value
          : themeColors?.cartDrawerSecondaryButtonBackgroundColor?.value,
    color:
      layout?.cartDrawerLayout?.body[0].styles
        ?.cartDrawerSecondaryButtonTextColor?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles
          ?.cartDrawerSecondaryButtonTextColor?.value
        : globalComponentStyles?.Button?.secondaryColor?.value != ""
          ? globalComponentStyles?.Button?.secondaryColor?.value
          : themeColors?.cartDrawerSecondaryButtonTextColor?.value,
    fontSize:
      layout?.cartDrawerLayout?.body[0].styles
        ?.cartDrawerSecondaryButtonTextSize?.value != 0
        ? layout?.cartDrawerLayout?.body[0].styles
          ?.cartDrawerSecondaryButtonTextSize?.value
        : globalComponentStyles?.Button?.secondarySize?.value != 0
          ? globalComponentStyles?.Button?.secondarySize?.value
          : themeColors?.cartDrawerSecondaryButtonTextSize?.value,
    fontFamily:
      layout?.cartDrawerLayout?.body[0].styles
        ?.cartDrawerSecondaryButtonTextFont?.value != ""
        ? layout?.cartDrawerLayout?.body[0].styles
          ?.cartDrawerSecondaryButtonTextFont?.value
        : globalComponentStyles?.Button?.secondaryFontFamily?.value != ""
          ? globalComponentStyles?.Button?.secondaryFontFamily?.value
          : themeColors?.cartDrawerSecondaryButtonTextFont?.value,
    fontStyle:
      layout?.cartDrawerLayout?.body[0].styles
        ?.cartDrawerSecondaryButtonTextStyle?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles
          ?.cartDrawerSecondaryButtonTextStyle?.value
        : globalComponentStyles?.Button?.secondaryFontWeight?.value != ""
          ? globalComponentStyles?.Button?.secondaryFontWeight?.value
          : themeColors?.cartDrawerSecondaryButtonTextStyle?.value,
  };

  const getIconButtonStyles = {
    backgroundColor:
      layout?.cartDrawerLayout?.body[0].styles
        ?.cartDrawerIconButtonBackgroundColor?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles
          ?.cartDrawerIconButtonBackgroundColor?.value
        : globalComponentStyles?.IconButton?.backgroundColor?.value != ""
          ? globalComponentStyles?.IconButton?.backgroundColor?.value
          : themeColors?.cartDrawerIconButtonBackgroundColor?.value,
    color:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerIconButtonColor
        ?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerIconButtonColor
          ?.value
        : globalComponentStyles?.IconButton?.color?.value != ""
          ? globalComponentStyles?.IconButton?.color?.value
          : themeColors?.cartDrawerIconButtonColor?.value,
    width:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerIconButtonSize
        ?.value != 0
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerIconButtonSize
          ?.value
        : globalComponentStyles?.IconButton?.size?.value != 0
          ? globalComponentStyles?.IconButton?.size?.value
          : themeColors?.cartDrawerIconButtonSize?.value,
    height:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerIconButtonSize
        ?.value != 0
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerIconButtonSize
          ?.value
        : globalComponentStyles?.IconButton?.size?.value != 0
          ? globalComponentStyles?.IconButton?.size?.value
          : themeColors?.cartDrawerIconButtonSize?.value,
    borderRadius:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerIconButtonBorderRadius
        ?.value != 0
        ? layout?.cartDrawerLayout?.body[0].styles
          ?.cartDrawerIconButtonBorderRadius?.value
        : globalComponentStyles?.IconButton?.borderRadius?.value != 0
          ? globalComponentStyles?.IconButton?.borderRadius?.value
          : themeColors?.cartDrawerIconButtonBorderRadius?.value,
  };

  const getDividerStyles = {
    backgroundColor:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerDividerColor
        ?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerDividerColor
          ?.value
        : globalComponentStyles?.Divider?.color?.value != ""
          ? globalComponentStyles?.Divider?.color?.value
          : themeColors?.cartDrawerDividerColor?.value,
    height:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerDividerHeight
        ?.value != 0
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerDividerHeight
          ?.value
        : globalComponentStyles?.Divider?.height?.value != 0
          ? globalComponentStyles?.Divider?.height?.value
          : themeColors?.cartDrawerDividerHeight?.value,
  };

  const getDrawerStyles = {
    backgroundColor:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerBackgroundColor
        ?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerBackgroundColor
          ?.value
        : globalComponentStyles?.Drawer?.backgroundColor?.value != ""
          ? globalComponentStyles?.Drawer?.backgroundColor?.value
          : themeColors?.cartDrawerBackgroundColor?.value,
    borderTopLeftRadius:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerBorderRadius?.value !=
        0
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerBorderRadius
          ?.value
        : globalComponentStyles?.Drawer?.borderRadius?.value != 0
          ? globalComponentStyles?.Drawer?.borderRadius?.value
          : themeColors?.cartDrawerBorderRadius?.value,
    borderBottomLeftRadius:
      layout?.cartDrawerLayout?.body[0].styles?.cartDrawerBorderRadius?.value !=
        0
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerBorderRadius
          ?.value
        : globalComponentStyles?.Drawer?.borderRadius?.value != 0
          ? globalComponentStyles?.Drawer?.borderRadius?.value
          : themeColors?.cartDrawerBorderRadius?.value,
  };

 
  const cardItems = states.cardItems?.items ?? [];
  const { orderType, franchise } = states ?? {};
  const { serviceFeesObject, configurations, storeTaxOnCash, platformFees, deliveryFees } = franchise ?? {};
  const {
    isServiceFeesApplicableOnStore,
    isTaxApplicableOnStore,
    isPlatformFeeApplicableOnStore,
    isDeliveryFeeApplicableOnStore
  } = configurations ?? {};
  const taxRate = isTaxApplicableOnStore ? storeTaxOnCash / 100 : 0;

  let discount = 0;
  let paymentOption = "cash";
  let subTotal = calculateSubTotal(cardItems);
  const taxAmount = calculateAndRoundTax(subTotal, taxRate, discount);

  const serviceFee = useMemo(
    () =>
      cardItems?.length > 0 &&
        isServiceFeesApplicableOnStore &&
        isApplicable(serviceFeesObject?.[orderType]?.cash?.applicable)
        ? calculateServiceFee(
          states,
          orderType,
          paymentOption,
          subTotal,
          discount
        )
        : 0,
    [cardItems, subTotal, taxAmount]
  );
  const totalCartQuantity = useMemo(() => {
    return cardItems?.reduce((acc, item) => acc + item.qty, 0) || 0;
  }, [cardItems]);
  let selectedTip = 0;

  const renderServiceFee = () => {
    if (
      isServiceFeesApplicableOnStore &&
      isApplicable(serviceFeesObject?.[orderType]?.cash?.applicable) &&
      serviceFee > 0
    ) {
      return (
        <Box style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ ...getPriceTextStyles }}>Service Fee</Typography>
          <Typography sx={{ ...getPriceTextStyles }}>
            Rs. {fNumber(serviceFee)}
          </Typography>
        </Box>
      );
    }
    return null;
  };

  const content = (
    <Box style={{ position: "relative", height: "100%" }}>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Typography
          sx={{ ...getHeadingStyles }}
        >
          Your Cart
        </Typography>

        <IconButton onClick={onClose} style={getIconButtonStyles}>
          <Icon icon={closeIcon} width={18} height={18} />
        </IconButton>
      </Box>

      {totalCartQuantity === 0 ? (
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "80%",
            textAlign: "center",
          }}
        >
          <Icon icon="mdi:bag-personal-outline" width={80} height={80} />
          <Typography
            style={{  marginTop: 16, ...getSubHeadingStyles }}
          >
            Your Cart is Empty
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginTop: 8, marginBottom: 16, maxWidth: 240 }}
            sx={{ ...getDescriptionStyles }}
          >
            Looks like you haven’t added anything to your cart yet. Start
            exploring and shop your favorite items!
          </Typography>
          <Button
            variant="contained"
            onClick={onClose}
            style={{
              textTransform: "none",
              paddingLeft: 24,
              paddingRight: 24,
              ...getSecondaryButtonStyles,
            }}
          >
            Browse Products
          </Button>
        </Box>
      ) : (
        <>
          {cardItems?.map((cartItem, index) => (
            <CartItems
              key={index}
              cartItem={cartItem}
              actions={actions}
              index={index}
              showDeleteIndex={states.showDeleteIndex}
              setShowDeleteIndex={states.setShowDeleteIndex}
              handleRemoveFromCart={actions.handleRemoveFromCart}
              handleMenuItemClick={actions.handleMenuItemClick}
              states={states}
            />
          ))}

          <Divider style={{ margin: "16px 0", ...getDividerStyles }} />

          <Button
            fullWidth
            disableRipple
            disableElevation
            onClick={() => {
              onClose();
            }}
            startIcon={
              <Icon
                icon="mdi:plus"
                width={18}
                height={18}
                style={{ marginRight: 4 }}
              />
            }
            style={{
              textTransform: "none",
              justifyContent: "flex-start",
              paddingLeft: 0,
              paddingRight: 0,
              marginTop: 8,
              backgroundColor: "transparent",
              ...getSecondaryButtonStyles,
            }}
          >
            Add more items
          </Button>

          <Divider style={{ margin: "16px 0", ...getDividerStyles }} />

          <Box style={{ marginBottom: 8 }}>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ ...getPriceTextStyles }}>
                Sub Total
              </Typography>
              <Typography sx={{ ...getPriceTextStyles }}>
                Rs. {fNumber(calculateSubTotal(cardItems))}
              </Typography>
            </Box>
            {isPlatformFeeApplicableOnStore && (
              <Box
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography sx={{ ...getPriceTextStyles }}>
                  Platform Fee
                </Typography>
                <Typography sx={{ ...getPriceTextStyles }}>
                  Rs. {platformFees}
                </Typography>
              </Box>
            )}
            {renderServiceFee()}
            {isDeliveryFeeApplicableOnStore && orderType==="storeDelivery" && (
              <Box
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography sx={{ ...getPriceTextStyles }}>
                  Delivery Fee
                </Typography>
                <Typography sx={{ ...getPriceTextStyles }}>
                  Rs. {deliveryFees}
                </Typography>
              </Box>
            )}

            {isTaxApplicableOnStore && (
              <Box
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography sx={{ ...getPriceTextStyles }}>Tax </Typography>
                <Typography sx={{ ...getPriceTextStyles }}>
                  {" "}
                  Rs. {taxAmount ? fNumber(taxAmount) : 0}
                </Typography>
              </Box>
            )}
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <Typography sx={{ ...getTotalTextStyles }}>
                Grand Total
              </Typography>
              <Typography sx={{ ...getTotalTextStyles }}>
                Rs.{" "}
                {fNumber(
                  (
                    Number(
                      calculateFinalTotal(cardItems, selectedTip, discount)
                    ) +
                    Number(taxAmount) +
                    Number(serviceFee) +
                    (isPlatformFeeApplicableOnStore
                      ? Number(platformFees)
                      : 0) +
                   ((isDeliveryFeeApplicableOnStore && orderType==="storeDelivery")
                      ? Number(deliveryFees)
                      : 0)
                  ).toFixed(2)
                )}
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            fullWidth
            onClick={actions.naviagateCheckout}
            endIcon={<Icon icon={arrowRightIcon} width={20} height={20} />}
            style={{
              textTransform: "none",
              marginTop: 16,
              paddingTop: 12,
              paddingBottom: 12,
              justifyContent: "space-between",
              paddingLeft: 16,
              paddingRight: 16,
              ...getButtonStyles,
            }}
          >
            Checkout
          </Button>
        </>
      )}
    </Box>
  )

  return previewMode ? (
    <Box
    style={{
      width: "50%",
      margin: "0 auto",
      padding: 16,
      boxSizing: "border-box",
      border: '2px solid #f0f0f0'

    }}
    >{content}</Box>
  ) : (
    <>
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        PaperProps={{
          style: {
            width: "100%",
            maxWidth: 400,
            padding: 16,
            ...getDrawerStyles,
          },
        }}
      >
        {content}
      </Drawer>

    </>
  );

};

export default CartDrawer;
