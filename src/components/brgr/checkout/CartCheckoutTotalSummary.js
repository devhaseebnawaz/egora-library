import React, { useState, useMemo, useEffect, useCallback } from "react";
import {
  Box, Card, Stack, Typography, CardContent,
} from "@mui/material";
import { fNumber } from "../../../utils/formatNumber";

const CartCheckoutTotalSummary = ({ themeColors, actions, prop, styles, states, setOrderData }) => {
  const {  cardItems,franchise } = states ?? {};
  const { serviceFeesObject, configurations,storeTaxOnCash,storeTaxOnCard,platformFees } = franchise ?? {};
  const { isServiceFeesApplicableOnStore,isTaxApplicableOnStore,isPlatformFeeApplicableOnStore,isCashAvailableOnPickUp,isCashAvailableOnDelivery } = configurations ?? {};

  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [selectedTip, setSelectedTip] = useState(cardItems?.tip || 0);

  const calculateAndRoundTax = (total, taxRate, discount) => {
    let t = total - discount
    const taxAmount = t * taxRate;
    const roundedTax = Math.round(taxAmount * 100) / 100;
    return roundedTax;
  };

  const isApplicable = (applicable) => applicable === "true" || applicable === true;
  
  const calculateSubTotal = () => {
    return cardItems.items.reduce((total, cartItem) => {
      const qty = cartItem.qty;
      let itemTotal = parseFloat(cartItem.priceWithChoiceGroup ?? cartItem.price) * qty;
      if (cartItem.selectedAddOns?.length > 0) {
        cartItem.selectedAddOns.forEach((addon) => {
          itemTotal += parseFloat(addon.price.replace("Rs. ", ""));
        });
      }
      return total + itemTotal;
    }, 0);
  };

  const subTotalOfItems = useMemo(() => (
    cardItems?.items?.length > 0 ? calculateSubTotal() : 0
  ), [cardItems]);

  useEffect(() => {
    setSubTotal(subTotalOfItems);
  }, [subTotalOfItems]);

  const taxRate = isTaxApplicableOnStore
    ? (states.paymentMethod === "cash"
      ? storeTaxOnCash / 100
      : states.paymentMethod=== "card"
        ? storeTaxOnCard / 100
        : 0)
    : 0;
  
  const taxAmount = useMemo(() => (
    calculateAndRoundTax(subTotal, taxRate, discount)
  ), [subTotal, taxRate, discount]);

  const calculateServiceFee = () => {
    if (!isServiceFeesApplicableOnStore) return 0;

    const modeCashAvailability = {
      storePickUp: isCashAvailableOnPickUp,
      storeDelivery:isCashAvailableOnDelivery,
    };

    if (!modeCashAvailability[states.orderType] && states.paymentMethod === "cash") {
      return 0;
    }

    const modeData = serviceFeesObject?.[states.orderType];
    const paymentData = modeData?.[states.paymentMethod];
    if (!paymentData || !isApplicable(paymentData.applicable)) return 0;

    const feeableSubtotal = subTotal - discount;

    return paymentData.type === "Percentage"
      ? (feeableSubtotal * parseFloat(paymentData.amount)) / 100
      : parseFloat(paymentData.amount);
  };

  const serviceFee = useMemo(() => (
    cardItems?.items?.length > 0
      ? calculateServiceFee()
      : 0
  ), [cardItems, subTotal, discount, states.orderType, states.paymentMethod]);

  useEffect(() => {
    let updatedTotal = Number(subTotal);
    if (
      isServiceFeesApplicableOnStore &&
      isApplicable(serviceFeesObject?.[states.orderType]?.[states.method]?.applicable)
    ) {
      updatedTotal += Number(serviceFee);
    }
    const platformFee = isPlatformFeeApplicableOnStore ? platformFees:0;
    const grandTotal = serviceFee + updatedTotal + platformFee + taxAmount + Number(selectedTip);
    setTotal(grandTotal);
  }, [
    subTotal,
    discount,
    serviceFee,
    taxAmount,
    selectedTip,
    states.method,
    serviceFeesObject,
    isServiceFeesApplicableOnStore,
    states.orderType,
  ]);

  const renderServiceFee = () => {
    const service = serviceFeesObject?.[states.orderType]?.[states.paymentMethod];
    if (isServiceFeesApplicableOnStore && isApplicable(service?.applicable) && serviceFee > 0) {
      return (
        <Stack direction="row" justifyContent="space-between">
          <Typography sx={{ color: "text.secondary", fontWeight: "600" }}>
            Service Fee {service?.type === "Percentage" ? `(${service.amount}%)` : ""}
          </Typography>
          <Typography variant="subtitle2">
            Rs. {fNumber(serviceFee)}
          </Typography>
        </Stack>
      );
    }
    return null;
  };

  useEffect(() => {
    if (!cardItems || cardItems.items?.length === 0) return;
  
    const mode = states.orderType;
    const method = states.method;
  
    let totalServiceValue = 0;
    let serviceFeesObj = {};
  
    if (
      isServiceFeesApplicableOnStore &&
      isApplicable(serviceFeesObject?.[mode]?.[method]?.applicable)
    ) {
      totalServiceValue = Number(serviceFee);
      serviceFeesObj = {
        [mode]: {
          [method]: serviceFeesObject?.[mode]?.[method],
        },
      };
    }
  
    const orderData = {
      levelId: cardItems?.levelId,
      venueId: cardItems?.venueId,
      total: fNumber(total),
      orderType: mode,
      type: "web",
      paymentType: method,
      tax: fNumber(taxAmount),
      subTotal: fNumber(subTotal),
      tip: selectedTip === null ? 0 : fNumber(selectedTip),
      serviceFees: fNumber(totalServiceValue),
      location: "2,2",
      platformFees: isPlatformFeeApplicableOnStore ? platformFees:0,
      serviceFeesObject: serviceFeesObj,
    };
  
    setOrderData(orderData);
  }, [ cardItems, total, selectedTip, serviceFee, taxAmount, subTotal, states.method, states.orderType, isServiceFeesApplicableOnStore, serviceFeesObject,
  ]);

  
  return (
    <>
      <Box>
        <Typography variant="h3" sx={{ fontWeight: "700", ml: 2, fontSize: 25, mb: 1 }}>
          Order Total
        </Typography>
      </Box>

      <Card sx={{ border: "1px solid rgba(0, 0, 0, 0.10)", borderRadius: "20px" }}>
        <CardContent>
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between">
              <Typography sx={{ color: "text.secondary", fontWeight: "600" }}>Sub Total</Typography>
              <Typography variant="subtitle2">Rs. {fNumber(subTotal)}</Typography>
            </Stack>
           {isPlatformFeeApplicableOnStore && (
            <Stack direction="row" justifyContent="space-between">
              <Typography sx={{ color: "text.secondary", fontWeight: "600" }}>Platform Fee</Typography>
              <Typography variant="subtitle2">Rs. {platformFees}</Typography>
            </Stack>
           )}

            {renderServiceFee()}

            {discount > 0 && (
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ color: "text.secondary", fontWeight: "600" }}>Discount</Typography>
                <Typography variant="subtitle2">Rs. {fNumber(discount)}</Typography>
              </Stack>
            )}

            <Stack direction="row" justifyContent="space-between">
              <Typography sx={{ color: "text.secondary", fontWeight: "600" }}>Tip</Typography>
              <Typography variant="subtitle2">Rs. {fNumber(selectedTip || 0)}</Typography>
            </Stack>

            {isTaxApplicableOnStore && (
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ color: "text.secondary", fontWeight: "600" }}>Tax</Typography>
                <Typography variant="subtitle2">Rs. {fNumber(taxAmount)}</Typography>
              </Stack>
            )}

            <Stack direction="row" justifyContent="space-between">
              <Typography sx={{ color: "#FCA92E", fontWeight: "600" }}>Total Amount</Typography>
              <Typography variant="subtitle2" sx={{ color: "#FCA92E" }}>
                Rs. {fNumber(total.toFixed(2))}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default CartCheckoutTotalSummary;
