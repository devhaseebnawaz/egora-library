import React from "react";
import { Stack, Paper, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import Iconify from "../iconify";

const PAYMENT_OPTIONS = [
  {
    value: "cash",
    title: "Pay at the counter",
    icons: ["/assets/icons/payments/ic_paypal.svg"],
  },
  {
    value: "card",
    title: "Credit / Debit Card",
    icons: [
      "/assets/icons/payments/ic_mastercard.svg",
      "/assets/icons/payments/ic_visa.svg",
    ],
  },
];

export default function PaymentMethods({ actions, prop, styles, states, PaymentComponent }) {
  const { franchise, orderType } = states ?? {}
  const {configurations} = franchise ?? {}
  const { isCardAvailableOnStore, isCashAvailableOnStore, isCardAvailableOnDelivery, isCardAvailableOnPickUp, isCashAvailableOnDelivery, isCashAvailableOnPickUp } = configurations ?? {}

  const isCashAvailable = () => {
    if (!isCashAvailableOnStore) return false;
    if (orderType === "storeDelivery" && isCashAvailableOnDelivery) return true;
    if (orderType === "storePickUp" && isCashAvailableOnPickUp) return true
    return false;
  };

  const isCardAvailable = () => {
    if (!isCardAvailableOnStore) return false;
    if (orderType === "storeDelivery" && isCardAvailableOnDelivery) return true;
    if (orderType === "storePickUp" && isCardAvailableOnPickUp) return true;
    return false;
  };


  return (
    <>
      <RadioGroup
        value={states.paymentMethod}
        onChange={(event) => actions.handleSetPaymentMethod(event.target.value)}
        sx={{ marginTop: 0 }}
      >
        <Stack spacing={3}>
          {PAYMENT_OPTIONS.filter((option) => {
            if (option.value === "cash") return isCashAvailable();
            if (option.value === "card") return isCardAvailable();
            return false;
          }).map((option) => (
            <PaymentOption
              key={option.title}
              option={option}
              isSelected={states.paymentMethod === option.value}
              hasChild={option.value === "card"}
              isCreditMethod={option.value === "card" && states.paymentMethod === "card"}
            />
          ))}
        </Stack>
      </RadioGroup>
      {PaymentComponent && states.paymentMethod === "card" && states.openPaymentCard && (
        <PaymentComponent
          actions={actions}
          prop={prop}
          styles={styles}
          states={states}
        />
      )}
    </>
  );
}

function PaymentOption({
  option,
  hasChild,
}) {
  const { value, title, icons } = option;

  return (
    <Paper
      variant="outlined"
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        transition: (theme) => theme.transitions.create("all"),
        ...(hasChild && {
          flexWrap: "wrap",
        }),
      }}
    >
      <FormControlLabel
        value={value}
        control={
          <Radio checkedIcon={<Iconify icon="eva:checkmark-circle-2-fill" />} />
        }
        label={title}
        sx={{ py: 2, pl: 2.5, flexGrow: 1, mr: 0 }}
      />

      <Stack
        spacing={1}
        direction="row"
        alignItems="center"
        sx={{ position: "absolute", right: 20, top: 24 }}
      >
      </Stack>
    </Paper>
  );
}
