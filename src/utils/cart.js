export const calculateSubTotal = (cart) => {
    if (!Array.isArray(cart) || cart.length === 0) return '0';
    const grandTotal = cart.reduce((total, cartItem) => {
        const itemQuantity = cartItem.qty;
        let itemTotal =
            parseFloat(
                cartItem.priceWithChoiceGroup
                    ? cartItem.priceWithChoiceGroup
                    : cartItem.price
            ) * itemQuantity;

        if (cartItem.selectedAddOns && cartItem.selectedAddOns.length > 0) {
            cartItem.selectedAddOns.forEach((addon) => {
                itemTotal += parseFloat(addon.price.replace("Rs. ", ""));
            });
        }

        return total + itemTotal;
    }, 0);

    return `${grandTotal.toFixed(0)}`;
};

export const isApplicable = (applicable) => {
    return applicable === "true" || applicable === true;
};

export const calculateServiceFee = (
    cardItems,
    mode,
    paymentOption,
    subTotal,
    discount,
) => {
    
    const { selectedVenue } = cardItems ?? {};    
    const { serviceFeesObject, configurations } = selectedVenue ?? {};
    const { isServiceFeesOnWeb, isCashAvailableOnPickUp, isCashAvailableOnCarHop, isCashAvailableOnTableScan, isCashAvailableOnVenueScan,
   isDeliveryAvailableInPos } = configurations ?? {};

    if (!isServiceFeesOnWeb) return 0;
    const modeCashAvailability = {
        storePickUp: isCashAvailableOnPickUp,
        QrDineIn: isCashAvailableOnTableScan,
        QrPickUp: isCashAvailableOnVenueScan,
        carHop: isCashAvailableOnCarHop,
        storeDelivery:isDeliveryAvailableInPos
    };

    if (!modeCashAvailability[mode] && paymentOption === "cash") {
        return 0;
    }
    const modeData = serviceFeesObject?.[mode];
    if (!modeData) return 0;
    const paymentData = modeData[paymentOption];
    if (paymentData?.applicable !== "true") return 0;
    let serviceFeeableSubtotal = subTotal - discount;
    if (paymentData?.type === "Percentage") {
        return (serviceFeeableSubtotal * parseFloat(paymentData.amount)) / 100;
    } else {
        return parseFloat(paymentData.amount);
    }
};


 export  const calculateFinalTotal = (cart, tip, discount) => {
     if (!Array.isArray(cart) || cart.length === 0) return '0';
    const itemsTotal = cart.reduce((total, cartItem) => {
      const itemQuantity = cartItem.qty;
      let itemTotal =
        parseFloat(
          cartItem.priceWithChoiceGroup
            ? cartItem.priceWithChoiceGroup
            : cartItem.price
        ) * itemQuantity;

      if (cartItem.selectedAddOns && cartItem.selectedAddOns.length > 0) {
        cartItem.selectedAddOns.forEach((addon) => {
          itemTotal += parseFloat(addon.price.replace("Rs. ", ""));
        });
      }

      let fTotal = (Number(total) + Number(itemTotal)) - Number(discount)
      return fTotal;
    }, 0);

    const grandTotal = itemsTotal + parseFloat(tip > 0 ? tip : tip > 0 ? tip : 0);
    return `${grandTotal.toFixed(0)}`;
  };