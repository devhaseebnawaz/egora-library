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

export default function ItemDetailModal({
  themeColors,
  styles,
  actions,
  states,
  onClose,
  item,
  setItem
}) {
  const methods = useForm();
  const { selectedVenue, choiceGroups, isItemEdit } = states ?? {}
  const { isOnline } = selectedVenue ?? {}
  const [filteredChoiceGroups, setFilteredChoiceGroups] = useState([]);
  const [selectedSauces, setSelectedSauces] = useState({ items: [] });
  const [quantity, setQuantity] = React.useState(1);
  const [notes, setNotes] = useState(item?.notes ? item?.notes : "");
  const [selectedVariant, setSelectedVariant] = useState(
    isItemEdit ?
      item.variants
        ? item.variants.find((i) => i.id == item?.selectedVariant?.id)
        : ""
      :
      item.variants
        ? item.variants.find((i) => i.defaultVariant == true)
        : ""
  );

  const hasSetInitialSauces = useRef(false);

  useEffect(() => {

    if (isItemEdit) {
      if (
        item?.hasVariant &&
        selectedVariant &&
        item?.associateChoiceGroupWithPriceVariant
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
      } else if (item?.choiceGroup && choiceGroups) {
        const filteredGroups = choiceGroups
          .filter((choiceGroup) => item.choiceGroup.includes(choiceGroup.id))
          .map((group) => JSON.parse(JSON.stringify(group)));

        setFilteredChoiceGroups(filteredGroups);
      }
      if (!hasSetInitialSauces.current && item?.groups) {
        const initialSelectedSauces = item.groups;
        setSelectedSauces({ items: initialSelectedSauces });
        hasSetInitialSauces.current = true;
      }

    }

    else {
      if (
        item?.hasVariant &&
        selectedVariant &&
        item?.associateChoiceGroupWithPriceVariant
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

        console.log("the filtered groups are", filteredChoiceGroups)
        setFilteredChoiceGroups(filteredGroups);
      } else if (item?.choiceGroup && choiceGroups) {
        const filteredGroups = choiceGroups
          .filter((choiceGroup) => item.choiceGroup.includes(choiceGroup.id))
          .map((group) => JSON.parse(JSON.stringify(group)));

        setFilteredChoiceGroups(filteredGroups);
      }

    }

  }, [choiceGroups, item, selectedVariant]);


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

  const handleAddItemToCart = (item, quantity, notes) => {
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
      isItemEdit ?
        actions.handleUpdateToCart(newItem, selectedSauces?.items, quantity, notes)
        :
        actions.handleAddToCart(newItem, selectedSauces?.items, quantity, notes)
      isItemEdit && actions?.handleItemEditClose()
    } catch (error) {
      console.log("error is", error)
    } finally {
    }
  };


  const isRequiredGroupSelected = (groupId) => {
    const selectedGroup = selectedSauces.items.find((item) => item.id === groupId);
    return (
      selectedGroup && selectedGroup.items.length >= selectedGroup.quantity
    );
  };

  const areAllRequiredGroupsSelected = filteredChoiceGroups?.every((group) => !group.required || isRequiredGroupSelected(group.id));

  return (
    <Dialog open={states.openCard} onClose={() => { actions.handleOpenCard(); states.setItemForDetailedModal(null); isItemEdit && actions?.handleItemEditClose() }} maxWidth="lg" fullWidth>
      <Box
        style={{
          display: 'flex',
          height: '90vh',
          backgroundColor: themeColors?.ItemDetailModalBackgroundColor ? themeColors?.ItemDetailModalBackgroundColor : styles?.ItemDetailModalBackgroundColor != "" ? styles?.ItemDetailModalBackgroundColor : '#fff',
        }}
      >
        <Box style={{ display: 'flex', gap: 8 }}>
          <IconButton
            onClick={() => { actions.handleOpenCard(); isItemEdit && actions?.handleItemEditClose() }}
            style={{
              backgroundColor: '#121212',
              color: '#fff',
              width: 36,
              height: 36,
              position: 'absolute',
              right: '20px',
              top: '20px',
              zIndex: 9999
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#000'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#121212'}
          >
            <Iconify icon="mdi:close" width={20} height={20} />
          </IconButton>
        </Box>
        <Box
          style={{
            width: '45%',
            backgroundColor: themeColors?.ItemDetailModalImageDivBackgroundColor ? themeColors?.ItemDetailModalImageDivBackgroundColor : styles?.ItemDetailModalImageDivBackgroundColor != "" ? styles?.ItemDetailModalImageDivBackgroundColor : '#f4f4f4',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: 32,
          }}
        >
          <Box
            component="img"
            src={item?.photoURL ? `${states.storeImagesBaseUrl}/${item.photoURL}` : '/assets/placeholder.png'}
            alt={item?.name || "Menu Item"}
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/assets/placeholder.png'
            }}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: 8,
            }}
          />
        </Box>

        <Box style={{ width: '1px', backgroundColor: '#e0e0e0' }} />

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
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              {item.name}
            </Typography>
          </Box>
          <Typography color="gray" style={{ marginBottom: 15 }}>
            {item.description || ''}
          </Typography>

          <Typography variant="h6" color="text.secondary" gutterBottom style={{ marginBottom: 20 }} >
            Rs. {item.price}
          </Typography>


          <CardContent sx={{ padding: "0" }}>
            <FormProvider methods={methods} >
              <Stack spacing={1}>
                {item.hasVariant && (
                  <Variant
                    variants={item.variants}
                    hanldeSelectOption={toggleVariantSelect}
                    selectedVariant={selectedVariant}
                  />
                )}
                <Divider />
                {filteredChoiceGroups.map((cg, index) => (
                  <Group
                    key={index}
                    choiceGroup={cg}
                    // hanldeSelectOption={hanldeSelectOption}
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
                  backgroundColor: themeColors?.ItemDetailModalQtyDecreseBackgroundColor ? themeColors?.ItemDetailModalQtyDecreseBackgroundColor : styles?.ItemDetailModalQtyDecreseBackgroundColor != "" ? styles?.ItemDetailModalQtyDecreseBackgroundColor : '#ccc',
                  color: themeColors?.ItemDetailModalQtyDecreseColor ? themeColors?.ItemDetailModalQtyDecreseColor : styles?.ItemDetailModalQtyDecreseColor != "" ? styles?.ItemDetailModalQtyDecreseColor : '#fff',
                  fontWeight: 'bold',
                  fontSize: 20,
                  lineHeight: '20px',
                  padding: 0,
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
                  backgroundColor: themeColors?.ItemDetailModalQtyIncreaseBackgroundColor ? themeColors?.ItemDetailModalQtyIncreaseBackgroundColor : styles?.ItemDetailModalQtyIncreaseBackgroundColor != "" ? styles?.ItemDetailModalQtyIncreaseBackgroundColor : '#121212',
                  color: themeColors?.ItemDetailModalQtyIncreaseColor ? themeColors?.ItemDetailModalQtyIncreaseColor : styles?.ItemDetailModalQtyIncreaseColor != "" ? styles?.ItemDetailModalQtyIncreaseColor : '#fff',
                  fontWeight: 'bold',
                  fontSize: 20,
                  lineHeight: '20px',
                  padding: 0,
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#000'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#121212'}
              >
                +
              </Button>
            </Box>

            <Button
              fullWidth
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 12,
                padding: '12px 24px',
                fontWeight: 'bold',
                fontSize: 16,
                textTransform: 'none',
                backgroundColor: areAllRequiredGroupsSelected ? '#121212' : '#333',
                color: areAllRequiredGroupsSelected ? '#f4e3d3' : '#888',
              }}
              disabled={!isOnline || !areAllRequiredGroupsSelected}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#000'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#121212'}
              onClick={() => { handleAddItemToCart(item, quantity, notes); actions.handleOpenCard(); states.setItemForDetailedModal(null) }}
            >
              <span>Rs. {item.price * quantity}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                {isItemEdit ? "Update cart" : "Add to Cart"}
              </span>
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}
