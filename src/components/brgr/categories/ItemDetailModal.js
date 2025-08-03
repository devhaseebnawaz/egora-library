import React, { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  IconButton,
  Button,
  Card,
  Stack,
  DialogTitle,
  CardContent,
  DialogActions,
  DialogContent,
  Grid,
  Divider,
} from '@mui/material';
import Iconify from '../iconify';
import FormProvider, { RHFTextField } from "../../hook-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Variant from '../options/Variant';
import Group from '../options/Group';
import CircularProgress from '@mui/material/CircularProgress';

export default function ItemDetailModal({
  themeColors,
  styles,
  actions,
  states,
  onClose,
  // item,
  setItem,
  previewMode = false,
}) {
  const methods = useForm();
  const { selectedVenue, choiceGroups, isItemEdit } = states ?? {}
  const { isOnline } = selectedVenue ?? {}
  const [filteredChoiceGroups, setFilteredChoiceGroups] = useState([]);
  const [selectedSauces, setSelectedSauces] = useState({ items: [] });
  const [quantity, setQuantity] = React.useState(1);
  const [notes, setNotes] = useState(states.itemForDetailedModal?.notes ? states.itemForDetailedModal?.notes : "");
  const [selectedVariant, setSelectedVariant] = useState(
    isItemEdit ?
      states.itemForDetailedModal.variants
        ? states.itemForDetailedModal.variants.find((i) => i.id == states.itemForDetailedModal?.selectedVariant?.id)
        : ""
      :
      states.itemForDetailedModal.variants
        ? states.itemForDetailedModal.variants.find((i) => i.defaultVariant == true)
        : ""
  );

  const hasSetInitialSauces = useRef(false);

  useEffect(() => {

    if (isItemEdit) {
      if (
        states.itemForDetailedModal?.hasVariant &&
        selectedVariant &&
        states.itemForDetailedModal?.associateChoiceGroupWithPriceVariant
      ) {
        const selectedVariantChoiceGroupIds = selectedVariant.choiceGroup || [];

        const filteredGroups = choiceGroups
          .map((choiceGroup) => {
            if (selectedVariantChoiceGroupIds.includes(choiceGroup.id)) {
              return JSON.parse(JSON.stringify(choiceGroup));
            }
            return null;
          })
          .filter(Boolean);

        setFilteredChoiceGroups(filteredGroups);
      } else if (states.itemForDetailedModal?.choiceGroup && choiceGroups) {
        const filteredGroups = choiceGroups
          .filter((choiceGroup) => states.itemForDetailedModal.choiceGroup.includes(choiceGroup.id))
          .map((group) => JSON.parse(JSON.stringify(group)));

        setFilteredChoiceGroups(filteredGroups);
      }
      if (!hasSetInitialSauces.current && states.itemForDetailedModal?.groups) {
        const initialSelectedSauces = states.itemForDetailedModal.groups;
        setSelectedSauces({ items: initialSelectedSauces });
        hasSetInitialSauces.current = true;
      }

    }

    else {
      if (
        states.itemForDetailedModal?.hasVariant &&
        selectedVariant &&
        states.itemForDetailedModal?.associateChoiceGroupWithPriceVariant
      ) {
        const selectedVariantChoiceGroupIds = selectedVariant.choiceGroup || [];
        const filteredGroups = choiceGroups
          .map((choiceGroup) => {
            if (selectedVariantChoiceGroupIds.includes(choiceGroup.id)) {
              return JSON.parse(JSON.stringify(choiceGroup));
            }
            return null;
          })
          .filter(Boolean);

        setFilteredChoiceGroups(filteredGroups);
      } else if (states.itemForDetailedModal?.choiceGroup && choiceGroups) {
        const filteredGroups = choiceGroups
          .filter((choiceGroup) => states.itemForDetailedModal.choiceGroup.includes(choiceGroup.id))
          .map((group) => JSON.parse(JSON.stringify(group)));

        setFilteredChoiceGroups(filteredGroups);
      }

    }

  }, [choiceGroups, states.itemForDetailedModal, selectedVariant]);


  const toggleSauce = (elem, sauce) => {

    let updatedItems = selectedSauces.items.map((item) => ({
      ...item,
      items: [...item.items],
    }));

    const itemIndex = updatedItems.findIndex((item) => item.id === elem.id);

    if (itemIndex !== -1) {
      const sauceIndex = updatedItems[itemIndex].items.findIndex(
        (selected) => selected.id === sauce.id
      );

      if (sauceIndex !== -1) {
        updatedItems[itemIndex].items.splice(sauceIndex, 1);
      } else {
        if (updatedItems[itemIndex].items.length < elem?.quantity) {
          updatedItems[itemIndex].items.push({ ...sauce, price: sauce.price });
        } else {
          updatedItems[itemIndex].items.shift()
          updatedItems[itemIndex].items.push({ ...sauce, price: sauce.price });
        }
      }

      if (updatedItems[itemIndex].items.length === 0) {
        updatedItems.splice(itemIndex, 1);
      }
    } else {
      updatedItems.push({
        ...elem,
        items: [{ ...sauce, price: sauce.price }],
      });
    }

    const isEmpty = updatedItems.length === 0;
    setSelectedSauces(isEmpty ? { items: [] } : { items: updatedItems });
  };

  const toggleVariantSelect = (variant) => {
    setSelectedVariant(variant);
    setSelectedSauces({ items: [] });
  };


  function generateRandomHexString(length) {
    let result = "";
    const characters = "0123456789abcdef";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const handleAddItemToCart = async (item, quantity, notes) => {
    let price = 0;

    if (selectedSauces?.items.length > 0) {
      price = selectedSauces.items.reduce((sum, elem) => {
        const elemTotal = elem.items
          ? elem.items.reduce((innerSum, item) => {
            const itemPrice = Number(item.price);
            return innerSum + itemPrice;
          }, 0)
          : 0;
        return sum + elemTotal;
      }, 0);

      price = Math.round(price).toFixed(0);
    }

    try {
      const newItem = {
        ...item,
        ...(item.hasVariant ? { selectedVariant: selectedVariant } : {}),
        isPrepared: false,
        isComplimentary: false,
        isVoidItem: false,
        cartItemId: isItemEdit ? item?.cartItemId : generateRandomHexString(24),
        price: item.hasVariant
          ? selectedVariant.price
          : item.price,
        priceBeforeCompliment: Number(item.hasVariant ? selectedVariant.price : item.price) + Number(price),
        priceWithChoiceGroup: Number(item.hasVariant ? selectedVariant.price : item.price) + Number(price),
      };
      let res;
      if (isItemEdit) {
        res = await actions.handleUpdateToCart(newItem, selectedSauces?.items, quantity, notes);
        actions?.handleItemEditClose();
      } else {
        res = await actions.handleAddToCart(newItem, selectedSauces?.items, quantity, notes);
      }
      if (res) {
        states.setLoadingForAddUpdateItemCart(false)
      }
    } catch (error) {
      states.setLoadingForAddUpdateItemCart(false)
      console.log("error is", error)
    } finally {
      states.setLoadingForAddUpdateItemCart(false)
    }
  };


  const isRequiredGroupSelected = (groupId) => {
    const selectedGroup = selectedSauces.items.find((item) => item.id === groupId);
    return (
      selectedGroup && selectedGroup.items.length >= selectedGroup.quantity
    );
  };

  const areAllRequiredGroupsSelected = filteredChoiceGroups?.every((group) => !group.required || isRequiredGroupSelected(group.id));

  const content = (
    <Box
      style={{
        display: 'flex',
        height: previewMode ? '70vh' : '90vh',
        backgroundColor: themeColors?.ItemDetailModalBackgroundColor
          || styles?.ItemDetailModalBackgroundColor
          || '#fff',
      }}
    >
      {/* Close Button */}

      <Box style={{ display: 'flex', gap: 8 }}>
        <IconButton
          onClick={() => {
            if (!previewMode) {
              actions.handleOpenCard();
              isItemEdit && actions?.handleItemEditClose();
            }
          }}
          style={{
            backgroundColor: '#121212',
            color: '#fff',
            width: 36,
            height: 36,
            position: 'absolute',
            right: '20px',
            top: '20px',
            zIndex: 9999,
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#000'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#121212'}
        >
          <Iconify icon="mdi:close" width={20} height={20} />
        </IconButton>
      </Box>


      {/* Left Image Section */}
      <Box
        style={{
          width: '45%',
          backgroundColor: themeColors?.ItemDetailModalImageDivBackgroundColor
            || styles?.ItemDetailModalImageDivBackgroundColor
            || '#f4f4f4',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: 32,
        }}
      >
        <Box
          component="img"
          src={states.itemForDetailedModal?.photoURL
            ? `${states.storeImagesBaseUrl}/${states.itemForDetailedModal.photoURL}`
            : '/assets/placeholder.png'}
          alt={states.itemForDetailedModal?.name || "Menu Item"}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/assets/placeholder.png';
          }}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            borderRadius: 8,
          }}
        />
      </Box>

      {/* Divider */}
      <Box style={{ width: '1px', backgroundColor: '#e0e0e0' }} />

      {/* Right Detail Section */}
      <Box
        style={{
          width: '54%',
          padding: 32,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {/* Title and Description */}
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {states.itemForDetailedModal.name}
          </Typography>
        </Box>

        <Typography color="gray" style={{ marginBottom: 15 }}>
          {states.itemForDetailedModal.description || ''}
        </Typography>

        <Typography variant="h6" color="text.secondary" gutterBottom style={{ marginBottom: 20 }}>
          Rs. {states.itemForDetailedModal.price}
        </Typography>

        {/* Variants & Options */}
        <CardContent sx={{ padding: "0" }}>
          <FormProvider methods={methods}>
            <Stack spacing={1}>
              {states.itemForDetailedModal.hasVariant && (
                <Variant
                  variants={states.itemForDetailedModal.variants}
                  hanldeSelectOption={toggleVariantSelect}
                  selectedVariant={selectedVariant}
                />
              )}
              <Divider />
              {filteredChoiceGroups.map((cg, index) => (
                <Group
                  key={index}
                  choiceGroup={cg}
                  hanldeSelectOption={toggleSauce}
                  selectedSauces={selectedSauces}
                  selectedVariant={selectedVariant}
                />
              ))}
              <Stack direction="row" justifyContent="left">
                <RHFTextField
                  sx={{ mt: 3 }}
                  name="description"
                  label="Kitchen Notes"
                  multiline
                  rows={2}
                  value={notes}
                  onChange={(e) => {
                    setNotes(e.target.value);
                  }}
                />
              </Stack>
            </Stack>
          </FormProvider>
        </CardContent>

        {/* Quantity & Add to Cart */}

        <Box
          style={{
            marginTop: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #eee',
            paddingTop: 16,
            gap: 16,
          }}
        >
          <Box style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              style={{
                minWidth: 36,
                height: 36,
                borderRadius: 12,
                backgroundColor: themeColors?.ItemDetailModalQtyDecreseBackgroundColor
                  || styles?.ItemDetailModalQtyDecreseBackgroundColor
                  || '#ccc',
                color: themeColors?.ItemDetailModalQtyDecreseColor
                  || styles?.ItemDetailModalQtyDecreseColor
                  || '#fff',
                fontWeight: 'bold',
                fontSize: 20,
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b0b0b0'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#ccc'}
            >
              –
            </Button>
            <Typography fontWeight="bold">{quantity}</Typography>
            <Button
              onClick={() => setQuantity((prev) => prev + 1)}
              style={{
                minWidth: 36,
                height: 36,
                borderRadius: 12,
                backgroundColor: themeColors?.ItemDetailModalQtyIncreaseBackgroundColor
                  || styles?.ItemDetailModalQtyIncreaseBackgroundColor
                  || '#121212',
                color: themeColors?.ItemDetailModalQtyIncreaseColor
                  || styles?.ItemDetailModalQtyIncreaseColor
                  || '#fff',
                fontWeight: 'bold',
                fontSize: 20,
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#000'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#121212'}
            >
              +
            </Button>
          </Box>

          <Button
            fullWidth
            startIcon={states.loadingForAddUpdateItemCart ? <CircularProgress size={20} color="inherit" /> : ''}
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 12,
              padding: '12px 24px',
              fontWeight: 'bold',
              fontSize: 16,
              backgroundColor: areAllRequiredGroupsSelected ? '#121212' : '#333',
              color: areAllRequiredGroupsSelected ? '#f4e3d3' : '#888',
            }}
            disabled={!isOnline || !areAllRequiredGroupsSelected}
            onClick={() => {
              handleAddItemToCart(states.itemForDetailedModal, quantity, notes);
              actions.handleOpenCard();
              states.setItemForDetailedModal(null);
            }}
          >
            <span>Rs. {states.itemForDetailedModal.price * quantity}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {isItemEdit ? "Update cart" : "Add to Cart"}
            </span>
          </Button>
        </Box>

      </Box>
    </Box>
  );


  return previewMode ? (
    <Box>{content}</Box>
  ) : (
    <Dialog open={states.openCard} onClose={() => {
      actions.handleOpenCard();
      states.setItemForDetailedModal(null);
      isItemEdit && actions?.handleItemEditClose();
    }} maxWidth="lg" fullWidth>
      {content}
    </Dialog>
  );
}
