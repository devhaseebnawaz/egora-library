import React, { useCallback, useEffect } from "react";
// import { useCart } from "../CartContext";
// import { useSwipeable } from "react-swipeable";

import {
    Box,
    Button,
    Divider,
    Stack,
    Typography,
    IconButton,
    Avatar
} from "@mui/material";
import Iconify from "../iconify";
import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { updateItemsToCard,} from "src/redux/slices/cardSlice";
// import useSession from "src/utils/useSession";
import { fNumber } from "../../../utils/formatNumber";
// import { fetchImage } from "src/utils/fetchImage";
// import capitalizeWords from "src/utils/capitalizeWords";

import { getScreenSizeCategory } from '../../../utils/fontsize';

const CartItems = ({ showButtons = true, actions, cartItem, cardItems, index, showDeleteIndex, setShowDeleteIndex, handleRemoveFromCart, handleMenuItemClick, states, layout, globalComponentStyles, themeColors, previewMode }) => {
    const getItemPriceStyles = {
        color:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemPriceTextColor?.value !== ""
                ? `${layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemPriceTextColor?.value}`
                : globalComponentStyles?.Text?.color?.value != ""
                    ? globalComponentStyles?.Text?.color?.value
                    : `${themeColors?.cartDrawerSummaryItemPriceTextColor?.value}`,
        fontSize:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemPriceTextSize?.value[getScreenSizeCategory()] != 0
                ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemPriceTextSize?.value[getScreenSizeCategory()]
                : globalComponentStyles?.Text?.size?.value[getScreenSizeCategory()] != 0
                    ? globalComponentStyles?.Text?.size?.value[getScreenSizeCategory()]
                    : themeColors?.cartDrawerSummaryItemPriceTextSize?.value[getScreenSizeCategory()],
        fontWeight:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemPriceTextWeight?.value != ""
                ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemPriceTextWeight?.value
                : globalComponentStyles?.Text?.fontWeight?.value != ""
                    ? globalComponentStyles?.Text?.fontWeight?.value
                    : themeColors?.cartDrawerSummaryItemPriceTextWeight?.value,
        fontFamily:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemPriceTextFont?.value != ""
                ? `${layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemPriceTextFont?.value}`
                : globalComponentStyles?.Text?.fontFamily?.value != ""
                    ? globalComponentStyles?.Text?.fontFamily?.value
                    : `${themeColors?.cartDrawerSummaryItemPriceTextFont?.value}`,

        fontStyle: layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemPriceTextStyle?.value !== ""
            ? `${layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemPriceTextStyle?.value}`
            : globalComponentStyles?.Text?.fontWeight?.value != ""
                ? globalComponentStyles?.Text?.fontWeight?.value
                : `${themeColors?.cartDrawerSummaryItemPriceTextStyle?.value}`,
    };
    
    const getItemIncreaseButtonStyles = {
        width:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerIncreaseItemHeightWidth?.value !== ""
                ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerIncreaseItemHeightWidth?.value
                : themeColors?.cartDrawerIncreaseItemHeightWidth?.value,
        height:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerIncreaseItemHeightWidth?.value != 0
                ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerIncreaseItemHeightWidth?.value
                : themeColors?.cartDrawerIncreaseItemHeightWidth?.value,

        color: layout?.cartDrawerLayout?.body[0].styles?.cartDrawerIncreaseItemIconColor?.value != ""
            ? `${layout?.cartDrawerLayout?.body[0].styles?.cartDrawerIncreaseItemIconColor?.value}`
            : `${themeColors?.cartDrawerIncreaseItemIconColor?.value}`,
    };


    const getItemDecreaseButtonStyles = {
        width:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerDecreaseItemHeightWidth?.value !== ""
                ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerDecreaseItemHeightWidth?.value
                : themeColors?.cartDrawerDecreaseItemHeightWidth?.value,
        height:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerDecreaseItemHeightWidth?.value != 0
                ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerDecreaseItemHeightWidth?.value
                : themeColors?.cartDrawerDecreaseItemHeightWidth?.value,

        color: layout?.cartDrawerLayout?.body[0].styles?.cartDrawerDecreaseItemIconColor?.value != ""
            ? `${layout?.cartDrawerLayout?.body[0].styles?.cartDrawerDecreaseItemIconColor?.value}`
            : `${themeColors?.cartDrawerDecreaseItemIconColor?.value}`,
    };




    const getItemDescriptionStyles = {
        color:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemDescriptionTextColor?.value !== ""
                ? `${layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemDescriptionTextColor?.value}`
                : globalComponentStyles?.Text?.color?.value != ""
                    ? globalComponentStyles?.Text?.color?.value
                    : `${themeColors?.cartDrawerSummaryItemDescriptionTextColor?.value}`,
        fontSize:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemDescriptionTextSize?.value[getScreenSizeCategory()] != 0
                ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemDescriptionTextSize?.value[getScreenSizeCategory()]
                : globalComponentStyles?.Text?.size?.value[getScreenSizeCategory()] != 0
                    ? globalComponentStyles?.Text?.size?.value[getScreenSizeCategory()]
                    : themeColors?.cartDrawerSummaryItemDescriptionTextSize?.value[getScreenSizeCategory()],
        fontWeight:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemDescriptionTextWeight?.value != ""
                ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemDescriptionTextWeight?.value
                : globalComponentStyles?.Text?.fontWeight?.value != ""
                    ? globalComponentStyles?.Text?.fontWeight?.value
                    : themeColors?.cartDrawerSummaryItemDescriptionTextWeight?.value,
        fontFamily:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemDescriptionTextFont?.value != ""
                ? `${layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemDescriptionTextFont?.value}`
                : globalComponentStyles?.Text?.fontFamily?.value != ""
                    ? globalComponentStyles?.Text?.fontFamily?.value
                    : `${themeColors?.cartDrawerSummaryItemDescriptionTextFont?.value}`,

        fontStyle: layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemDescriptionTextStyle?.value !== ""
            ? `${layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemDescriptionTextStyle?.value}`
            : globalComponentStyles?.Text?.fontWeight?.value != ""
                ? globalComponentStyles?.Text?.fontWeight?.value
                : `${themeColors?.cartDrawerSummaryItemDescriptionTextStyle?.value}`,
    };
    
    const getItemHeadingStyles = {
        color:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemHeadingsTextColor?.value !== ""
                ? `${layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemHeadingsTextColor?.value}`
                : globalComponentStyles?.Text?.color?.value != ""
                    ? globalComponentStyles?.Text?.color?.value
                    : `${themeColors?.cartDrawerSummaryItemHeadingsTextColor?.value}`,
        fontSize:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemHeadingsTextSize?.value[getScreenSizeCategory()] != 0
                ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemHeadingsTextSize?.value[getScreenSizeCategory()]
                : globalComponentStyles?.Text?.size?.value[getScreenSizeCategory()] != 0
                    ? globalComponentStyles?.Text?.size?.value[getScreenSizeCategory()]
                    : themeColors?.cartDrawerSummaryItemHeadingsTextSize?.value[getScreenSizeCategory()],
        fontWeight:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemHeadingsTextWeight?.value != ""
                ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemHeadingsTextWeight?.value
                : globalComponentStyles?.Text?.fontWeight?.value != ""
                    ? globalComponentStyles?.Text?.fontWeight?.value
                    : themeColors?.cartDrawerSummaryItemHeadingsTextWeight?.value,
        fontFamily:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemHeadingsTextFont?.value != ""
                ? `${layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemHeadingsTextFont?.value}`
                : globalComponentStyles?.Text?.fontFamily?.value != ""
                    ? globalComponentStyles?.Text?.fontFamily?.value
                    : `${themeColors?.cartDrawerSummaryItemHeadingsTextFont?.value}`,

        fontStyle: layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemHeadingsTextStyle?.value !== ""
            ? `${layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemHeadingsTextStyle?.value}`
            : globalComponentStyles?.Text?.fontWeight?.value != ""
                ? globalComponentStyles?.Text?.fontWeight?.value
                : `${themeColors?.cartDrawerSummaryItemHeadingsTextStyle?.value}`,
    };

    const getItemNameStyles = {
        color:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemNameTextColor?.value !== ""
                ? `${layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemNameTextColor?.value}`
                : globalComponentStyles?.Text?.color?.value != ""
                    ? globalComponentStyles?.Text?.color?.value
                    : `${themeColors?.cartDrawerSummaryItemNameTextColor?.value}`,
        fontSize:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemNameTextSize?.value[getScreenSizeCategory()] != 0
                ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemNameTextSize?.value[getScreenSizeCategory()]
                : globalComponentStyles?.Text?.size?.value[getScreenSizeCategory()] != 0
                    ? globalComponentStyles?.Text?.size?.value[getScreenSizeCategory()]
                    : themeColors?.cartDrawerSummaryItemNameTextSize?.value[getScreenSizeCategory()],
        fontWeight:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemNameTextWeight?.value != ""
                ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemNameTextWeight?.value
                : globalComponentStyles?.Text?.fontWeight?.value != ""
                    ? globalComponentStyles?.Text?.fontWeight?.value
                    : themeColors?.cartDrawerSummaryItemNameTextWeight?.value,

        fontFamily: layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemNameTextFont?.value != ""
            ? `${layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemNameTextFont?.value}`
            : globalComponentStyles?.Text?.fontFamily?.value != ""
                ? globalComponentStyles?.Text?.fontFamily?.value
                : `${themeColors?.cartDrawerSummaryItemNameTextFont?.value}`,

        fontStyle: layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemNameTextStyle?.value !== ""
            ? `${layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemNameTextStyle?.value}`
            : globalComponentStyles?.Text?.fontWeight?.value != ""
                ? globalComponentStyles?.Text?.fontWeight?.value
                : `${themeColors?.cartDrawerSummaryItemNameTextStyle?.value}`,
    };

    const getImageStyles = {
        width:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemImageHeightWidth?.value != 0
                ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemImageHeightWidth?.value
                : themeColors?.cartDrawerSummaryItemImageHeightWidth?.value,
        height:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemImageHeightWidth?.value != 0
                ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemImageHeightWidth?.value
                : themeColors?.cartDrawerSummaryItemImageHeightWidth?.value,

        backgroundColor: layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemImageBackgroundColor?.value != ""
            ? `${layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemImageBackgroundColor?.value}`
            : `${themeColors?.cartDrawerSummaryItemImageBackgroundColor?.value}`,

        borderRadius: layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemImageBorderRadius?.value != 0
            ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerSummaryItemImageBorderRadius?.value
            : themeColors?.cartDrawerSummaryItemImageBorderRadius?.value,
    };
    
    const getItemQtyStyles = {
        color:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerItemQtyTextColor?.value !== ""
                ? `${layout?.cartDrawerLayout?.body[0].styles?.cartDrawerItemQtyTextColor?.value}`
                : globalComponentStyles?.Text?.color?.value != ""
                    ? globalComponentStyles?.Text?.color?.value
                    : `${themeColors?.cartDrawerItemQtyTextColor?.value}`,
        fontSize:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerItemQtyTextSize?.value[getScreenSizeCategory()] != 0
                ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerItemQtyTextSize?.value[getScreenSizeCategory()]
                : globalComponentStyles?.Text?.size?.value[getScreenSizeCategory()] != 0
                    ? globalComponentStyles?.Text?.size?.value[getScreenSizeCategory()]
                    : themeColors?.cartDrawerItemQtyTextSize?.value[getScreenSizeCategory()],
        fontWeight:
            layout?.cartDrawerLayout?.body[0].styles?.cartDrawerItemQtyTextWeight?.value != ""
                ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerItemQtyTextWeight?.value
                : globalComponentStyles?.Text?.fontWeight?.value != ""
                    ? globalComponentStyles?.Text?.fontWeight?.value
                    : themeColors?.cartDrawerItemQtyTextWeight?.value,

        fontFamily: layout?.cartDrawerLayout?.body[0].styles?.cartDrawerItemQtyTextFont?.value != ""
            ? `${layout?.cartDrawerLayout?.body[0].styles?.cartDrawerItemQtyTextFont?.value}`
            : globalComponentStyles?.Text?.fontFamily?.value != ""
                ? globalComponentStyles?.Text?.fontFamily?.value
                : `${themeColors?.cartDrawerItemQtyTextFont?.value}`,

        fontStyle: layout?.cartDrawerLayout?.body[0].styles?.cartDrawerItemQtyTextStyle?.value !== ""
            ? `${layout?.cartDrawerLayout?.body[0].styles?.cartDrawerItemQtyTextStyle?.value}`
            : globalComponentStyles?.Text?.fontWeight?.value != ""
                ? globalComponentStyles?.Text?.fontWeight?.value
                : `${themeColors?.cartDrawerItemQtyTextStyle?.value}`,
    };

    const getItemQtyButtonStyles = {
        backgroundColor: layout?.cartDrawerLayout?.body[0].styles?.cartDrawerItemQtyButtonBackgroundColor?.value !== ""
            ? `${layout?.cartDrawerLayout?.body[0].styles?.cartDrawerItemQtyButtonBackgroundColor?.value}`
            : globalComponentStyles?.Button?.fontFamily?.value !== ""
                ? globalComponentStyles?.Button?.fontFamily?.value
                : themeColors?.cartDrawerItemQtyButtonBackgroundColor?.value,
        borderRadius: layout?.cartDrawerLayout?.body[0].styles?.cartDrawerItemQtyBorderRadius?.value !== ""
        ? layout?.cartDrawerLayout?.body[0].styles?.cartDrawerItemQtyBorderRadius?.value
        : globalComponentStyles?.Button?.borderRadius?.value !== ""
            ? globalComponentStyles?.Button?.borderRadius?.value
            : themeColors?.cartDrawerItemQtyBorderRadius?.value,
        border: layout?.cartDrawerLayout?.body[0].styles?.cartDrawerItemQtyBorderColor?.value !== ""
            ? `2px solid ${layout?.cartDrawerLayout?.body[0].styles?.cartDrawerItemQtyBorderColor?.value}`
                : `2px solid  ${themeColors?.cartDrawerItemQtyBorderColor?.value}`,
    };

    // console.log("the cart item sis", cartItem)
    // const sessionInfo = useSession();
    // const dispatch = useDispatch();
    // const { cardItems } = useSelector((state) => state.cardSlice);
    // const { calculateMenuItemTotal } = useCart();


    // const [imageStyle, setImageStyle] = useState({});

    // const handlers = useSwipeable({
    //     onSwipedLeft: () => {
    //         setShowDeleteIndex(index);
    //         setImageStyle({ transform: "translateX(-30px)", transition: "transform 0.3s ease" });
    //     },
    //     onSwipedRight: () => {
    //         setShowDeleteIndex(null);
    //         setImageStyle({ transform: "translateX(0)", transition: "transform 0.3s ease" });
    //     },
    //     preventDefaultTouchmoveEvent: true,
    //     trackMouse: true,
    // });


    const [imageURLs, setImageURLs] = useState([]);

    // useEffect(() => {
    //     const fetchImagesForCart = async () => {
    //         if (cardItems?.data?.items && cardItems?.data?.items.length > 0) {
    //             const urls = await Promise.all(
    //                 cardItems?.data?.items.map(async (elem) => {
    //                     try {
    //                         const res = await fetchImage(elem.photoURL);
    //                         return res;
    //                     } catch (error) {
    //                         console.error("Error fetching data:", error);
    //                         return null;
    //                     }
    //                 })
    //             );
    //             setImageURLs(urls);
    //         }
    //     };

    //     fetchImagesForCart();
    // }, [cardItems]);

    const calculateMenuItemTotal = (cartItem) => {
        const itemQuantity = cartItem.qty;
        let p =
            cartItem?.choiceGroup?.length > 0 || cartItem?.variants?.length > 0
                ? cartItem?.priceWithChoiceGroup
                : cartItem?.price;
        let itemTotal = p * itemQuantity;
        if (cartItem.selectedAddOns && cartItem.selectedAddOns.length > 0) {
            cartItem.selectedAddOns.forEach((addon) => {
                itemTotal += parseFloat(addon.price.replace("Rs. ", ""));
            });
        }
        itemTotal = itemTotal.toFixed(0);
        return `Rs. ${fNumber(itemTotal)}`;
    };


    return (
        <Box>
            <>
                <Box
                    // {...handlers}
                    key={index}
                    sx={{
                        // ...imageStyle,
                        display: "flex",
                        padding: "10px 0",
                        justifyContent: "space-between",
                        alignItems: "start",
                        borderRadius: "5px",
                        width: "100%",
                    }}
                >
                    <Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "flex-start",
                            }}
                        // onClick={() => handleMenuItemClick(cartItem)}
                        >
                            <Box
                                sx={{

                                    display: "inline-block",
                                    padding: "5px",
                                    borderRadius: "8px",
                                    "@media (max-width: 600px)": {
                                        padding: "3px",
                                    },
                                }}
                            >
                                {/* <Image
                                    src={
                                        imageURLs[index]
                                            ? imageURLs[index]
                                            : "/assets/placeholder.png"
                                    }
                                    sx={{

                                        height: "80px",
                                        width: "80px",
                                        borderRadius: "5px",
                                        "@media (max-width: 600px)": {
                                            height: "50px",
                                            width: "50px",
                                        },
                                    }}
                                /> */}
                                <Avatar
                                    variant="rounded"
                                    src={cartItem?.photoURL ? `${states.storeImagesBaseUrl}/${cartItem.photoURL}`
                                        : '/assets/placeholder.png'
                                    }
                                    alt={cartItem.name}
                                    style={{
                                        // width: 64,
                                        // height: 64,
                                        // borderRadius: 8,
                                        marginRight: 16,
                                        ...getImageStyles,
                                    }}
                                />
                            </Box>

                            <Stack>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "self-end",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <Typography
                                        // onClick={() => handleMenuItemClick(cartItem)}
                                        onClick={() => {
                                            if (!previewMode) {
                                                actions.handleOpenCard(); actions.handleItemEditOpen(), states.setItemForDetailedModal(cartItem)
                                            }
                                        }}
                                        sx={{
                                            fontWeight: 400,
                                            fontSize: "14px",
                                            marginLeft: "9px",
                                            cursor: showButtons ? "pointer" : "",
                                            "@media (max-width: 600px)": {
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                width: "80px"
                                            },

                                            "@media (max-width: 330px)": {
                                                maxWidth: "100px",
                                            },
                                            ...getItemNameStyles
                                        }}
                                    >
                                        {cartItem?.name}
                                    </Typography>
                                    {/* <img
                                        src="/assets/order/edit.svg"
                                        alt="Dine In"
                                        style={{
                                            marginLeft: "7px",
                                            color: "#F08203",
                                            cursor: "pointer",
                                            width: "12px",
                                            marginBottom: "3px",
                                        }}
                                        // onClick={() => handleMenuItemClick(cartItem)}
                                    /> */}
                                </Box>

                                {cartItem?.selectedVariant && (
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                ml: 1.3,
                                                fontSize: 12,
                                                fontWeight: "bold",
                                                // color: "#666",
                                                ...getItemHeadingStyles
                                            }}
                                        >
                                            Variant:
                                        </Typography>
                                        <Typography sx={{ ml: 1, fontSize: 12, ...getItemDescriptionStyles }}>
                                            {cartItem?.selectedVariant?.name}
                                        </Typography>
                                    </Box>
                                )}

                                {cartItem?.groups && cartItem?.groups?.length > 0 && (
                                    <>
                                        {cartItem?.groups?.map((sauce, index) => (
                                            <Typography
                                                key={index}
                                                variant="caption"
                                                sx={{
                                                    color: "#666",
                                                    display: "flex",
                                                    flexWrap: "wrap",
                                                    flexDirection: "row",
                                                    marginLeft: "10px",
                                                    gap: "2px",
                                                    fontWeight: "bold",
                                                    "@media (max-width: 600px)": {
                                                        fontSize: "10px",
                                                        marginLeft: "5px",
                                                        gap: "1px",
                                                    },
                                                    ...getItemHeadingStyles
                                                }}
                                            >
                                                + {sauce?.name} :
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        color: "#666",
                                                        display: "flex",
                                                        marginLeft: "5px",
                                                        gap: "2px",
                                                        flexWrap: "wrap",
                                                        "@media (max-width: 600px)": {
                                                            fontSize: "10px",
                                                            marginLeft: "2px",
                                                            gap: "1px",
                                                        },
                                                        ...getItemDescriptionStyles
                                                    }}
                                                >
                                                    {sauce?.items?.map((sauceItem, sauceIndex) => (
                                                        <span key={sauceIndex}>
                                                            {sauceItem?.item}
                                                            {` (Rs. ${fNumber(
                                                                sauceItem.price * cartItem.qty
                                                            )})`}
                                                            {sauceIndex !== sauce?.items?.length - 1 &&
                                                                ", "}
                                                        </span>
                                                    ))}
                                                </Typography>
                                            </Typography>
                                        ))}
                                    </>
                                )}
                                <Typography
                                    variant="caption"
                                    sx={{
                                        display: "flex",
                                        marginLeft: "10px",
                                        gap: "2px",

                                        "@media (max-width: 600px)": {
                                            fontSize: "10px",
                                            "@media (max-width: 600px)": {
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                maxWidth: "80px",
                                            },
                                        },
                                    }}
                                >
                                    <span>{cartItem?.notes}</span>
                                </Typography>
                                <Typography
                                    sx={{
                                        ...getItemPriceStyles,
                                        marginTop: "4px",
                                        marginLeft: "10px",
                                        fontWeight: "600",
                                        "@media (max-width: 1440px)": {
                                            fontSize: "12px",
                                        },
                                    }}
                                >
                                    {calculateMenuItemTotal(cartItem)}
                                </Typography>
                            </Stack>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "self-end",
                            flexWrap: "nowrap",
                        }}
                    >
                        {!showButtons &&
                            <Typography sx={{ ...getItemQtyStyles }}>
                                {cartItem.qty}
                            </Typography>}
                        {
                            showButtons &&
                            <Box
                                sx={{
                                    height: "40px",
                                    width: "130px",
                                    borderRadius: "20px",
                                    // border: "2px solid #F08203",
                                    marginRight: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    px: 1,
                                    ...getItemQtyButtonStyles
                                }}
                            >
                                {cartItem.qty > 1 ? (
                                    <IconButton
                                        onClick={() => { actions.updateItemFromCardDecByOne(cartItem) }}
                                        sx={{ p: 0, ...getItemDecreaseButtonStyles }}
                                    >
                                        <Iconify icon={"ic:baseline-minus"} />
                                    </IconButton>
                                ) : (
                                    <IconButton
                                        onClick={() => {
                                            if (!previewMode) {
                                                actions.handleRemoveFromCart(cartItem)
                                            }
                                        }}
                                        sx={{ p: 0, ...getItemDecreaseButtonStyles }} 
                                    >
                                        <Iconify icon={"mdi:trash-outline"} />
                                    </IconButton>
                                )}

                                <Typography sx={{  ...getItemQtyStyles }}>
                                    {cartItem.qty}
                                </Typography>

                                <IconButton
                                    onClick={() => { if (!previewMode) { actions.updateItemFromCardAddByOne(cartItem) } }}
                                    sx={{ p: 0, ...getItemIncreaseButtonStyles }}
                                >
                                    <Iconify icon={"ic:baseline-plus"} />
                                </IconButton>
                            </Box>
                        }


                        {(showDeleteIndex === index && cartItem.qty > 1) && (
                            <Button
                                // onClick={() => handleRemoveFromCart(cartItem)}
                                sx={{
                                    minWidth: 0,
                                    margin: "0",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingButton: "5px",
                                    paddingLeft: "20px",
                                    paddingRight: "0px"

                                }}
                            >
                                <Iconify
                                    sx={{
                                        color: "#F08203",
                                        minWidth: 0,
                                        width: "24px",
                                        height: "24px",
                                    }}
                                    icon={"mdi:trash-outline"}
                                />
                            </Button>
                        )}
                    </Box>
                </Box>

                 {index < cardItems?.length - 1 && (
                    <Divider
                        sx={{
                            marginTop: "10px",
                            borderColor: "#E0E0E0",
                        }}
                    />
                )}
            </>

        </Box>
    );
};

export default CartItems;
