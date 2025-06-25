import React, { useRef, useEffect, useState } from "react";
import { Box, IconButton, Button } from "@mui/material";
import { Icon } from "@iconify/react";
import arrowLeft from "@iconify-icons/mdi/chevron-left";
import arrowRight from "@iconify-icons/mdi/chevron-right";

const categories = [
    "SMASH BRGR", "SWISS MUSHROOM", "CRISPY ZING BRGR", "NUGGETS", "CHKN TENDERS",
    "FILLET BRGR", "CHAMP CHKN BRGR", "LOADED FRIES", "FISH & CHIPS", "WRAP",
    "SANDWICH", "ADD ONS", "MARGARITA", "ICE CREAM SHAKES", "JUICES", "FIZZY DRINKS", "BEVERAGES"
];

export default function ScrollCategoryBar() {
    const scrollRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const scrollAmount = 300;

    const handleScroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const updateArrows = () => {
        const el = scrollRef.current;
        if (el) {
            const { scrollLeft, scrollWidth, clientWidth } = el;
            setShowLeft(scrollLeft > 0);
            setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
        }
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            el.addEventListener("scroll", updateArrows);
            updateArrows();
        }
        return () => {
            if (el) el.removeEventListener("scroll", updateArrows);
        };
    }, []);

    return (
        <Box
            style={{
                position: "sticky",
                top: 0,
                zIndex: 1100,
                backgroundColor: "#000",
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
                {showLeft && (
                    <IconButton
                        onClick={() => handleScroll("left")}
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
                    ref={scrollRef}
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

                    {categories.map((cat, idx) => (
                        <Button
                            key={idx}
                            style={{
                                flex: "0 0 auto",
                                whiteSpace: "nowrap",
                                color: "#fff",
                                fontWeight: 600,
                                fontSize: "0.9rem",
                                padding: "8px 16px",
                                minWidth: "120px",
                                maxWidth: "160px",
                                borderRadius: "8px",
                                textTransform: "none",
                                backgroundColor: "transparent",
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                        >
                            {cat}
                        </Button>
                    ))}
                </Box>

                {showRight && (
                    <IconButton
                        onClick={() => handleScroll("right")}
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
