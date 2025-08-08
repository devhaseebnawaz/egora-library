import React, { useEffect } from "react";
import { Box, IconButton, Button } from "@mui/material";
import { Icon } from "@iconify/react";
import arrowLeft from "@iconify-icons/mdi/chevron-left";
import arrowRight from "@iconify-icons/mdi/chevron-right";

export default function CategoryCarousel({ themeColors, actions, prop, styles, states, globalComponentStyles }) {

    useEffect(() => {
        const el = states?.scrollRef?.current;
        if (el) {
            el.addEventListener("scroll", actions.updateArrows);
            actions.updateArrows();
        }
        return () => {
            if (el) el.removeEventListener("scroll", actions.updateArrows);
        };
    }, []);

    const handleCategoryClick = (category) => {
        actions.handleCategoryClick(category);
    }
    
    return (
        <Box
            style={{
                position: "sticky",
                top: 0,
                zIndex: 1100,
                backgroundColor:  styles?.CategoryCarouselBackgroundColor?.value != ""
                ? styles?.CategoryCarouselBackgroundColor?.value
                : themeColors?.CategoryCarouselBackgroundColor?.value,

                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            }}
        >
            <Box
                style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "8px 16px",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {states.showLeft && (
                    <IconButton
                        onClick={() => actions.handleScroll("left")}
                        style={{
                            color: "#fff",
                            position: "absolute",
                            left: 0,
                            zIndex: 2,
                            backgroundColor: "rgba(0,0,0,0.5)",
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.7)"}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.5)"}
                    >
                        <Icon icon={arrowLeft} />
                    </IconButton>
                )}

                <Box
                    ref={states.scrollRef}
                    style={{
                        display: "flex",
                        flexWrap: "nowrap",
                        overflowX: "auto",
                        gap: "16px",
                        padding: "0 40px",
                        width: "100%",
                        scrollbarWidth: "none",
                    }}
                >
                    <style>{`
            ::-webkit-scrollbar {
              display: none;
            }
          `}</style>

                    {states?.categoryCarousel?.map((cat, idx) => (
                        <Button
                            key={idx}
                            style={{
                                flex: "0 0 auto",
                                whiteSpace: "nowrap",
                                color: styles?.CategoryCarouselTextColor?.value != ""
                                ? styles?.CategoryCarouselTextColor?.value 
                                : globalComponentStyles?.Text?.color?.value != "" 
                                ? globalComponentStyles?.Text?.color?.value : 
                                  themeColors?.CategoryCarouselTextColor?.value,

                                fontSize: styles?.CategoryCarouselTextSize?.value != ""
                                    ? styles?.CategoryCarouselTextSize?.value
                                    : globalComponentStyles?.Text?.size?.value != "" 
                                    ? globalComponentStyles?.Text?.size?.value : 
                                      themeColors?.CategoryCarouselTextSize?.value,

                                fontFamily: styles?.CategoryCarouselTextFont?.value != ""
                                    ? styles?.CategoryCarouselTextFont?.value
                                    : globalComponentStyles?.Text?.fontFamily?.value != "" 
                                    ? globalComponentStyles?.Text?.fontFamily?.value : 
                                      themeColors?.CategoryCarouselTextFont?.value,

                                fontStyle: styles?.CategoryCarouselTextStyle?.value != ""
                                    ? styles?.CategoryCarouselTextStyle?.value
                                    : globalComponentStyles?.Text?.fontWeight?.value != "" 
                                    ? globalComponentStyles?.Text?.fontWeight?.value : 
                                      themeColors?.CategoryCarouselTextStyle?.value,

                                fontWeight: 600,
                                padding: "8px 16px",
                                minWidth: "120px",
                                maxWidth: "160px",
                                borderRadius: "8px",
                                textTransform: "none",
                                backgroundColor: states.selectedCategoryItem === cat ? "orange" : "transparent", 
                            }}
                            onMouseOver={(e) => { if (states.selectedCategoryItem !== cat) e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"; }}
                            onMouseOut={(e) => { if (states.selectedCategoryItem !== cat) e.currentTarget.style.backgroundColor = "transparent"; }}
                            onClick={() => handleCategoryClick(cat)}
                        >
                            {cat}
                        </Button>
                    ))}
                </Box>

                {states.showRight && (
                    <IconButton
                        onClick={() => actions.handleScroll("right")}
                        style={{
                            color: "#fff",
                            position: "absolute",
                            right: 0,
                            zIndex: 2,
                            backgroundColor: "rgba(0,0,0,0.5)",
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.7)"}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.5)"}
                    >
                        <Icon icon={arrowRight} />
                    </IconButton>
                )}
            </Box>
        </Box>
    );
}
