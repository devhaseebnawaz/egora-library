import React from 'react';
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
} from '@mui/material';
import Iconify from "src/components/iconify/Iconify";

export default function ItemDetailModal({
    open,
    onClose,
    item,
    selectedQty,
    setSelectedQty,
    instructions,
    setInstructions,
}) {
    const price = selectedQty === '5' ? item?.price : item?.price * 2;
    const [quantity, setQuantity] = React.useState(1);

    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
            <Box
                style={{
                    display: 'flex',
                    height: '90vh',
                    backgroundColor: '#fff',
                }}
            >
                <Box
                    style={{
                        width: '45%',
                        backgroundColor: '#f4f4f4',
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        padding: 32,
                    }}
                >
                    <Box
                        component="img"
                        src={item.img || item.image}
                        alt={item.name}
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
                            marginBottom: 24,
                        }}
                    >
                        <Typography variant="h6" fontWeight="bold">
                            {item.name}
                        </Typography>

                        <Box style={{ display: 'flex', gap: 8 }}>
                            <IconButton
                                onClick={onClose}
                                style={{
                                    backgroundColor: '#121212',
                                    color: '#fff',
                                    width: 36,
                                    height: 36,
                                }}
                                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#000'}
                                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#121212'}
                            >
                                <Iconify icon="mdi:close" width={20} height={20} />
                            </IconButton>
                        </Box>
                    </Box>

                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        Rs. {price}
                    </Typography>

                    <Typography color="gray" style={{ marginBottom: 24 }}>
                        {item.description ||
                            'Crispy Golden Nuggets Made With Muscle Meat Served With Any 1 OF Our House Sauce.'}
                    </Typography>

                    <RadioGroup
                        value={selectedQty}
                        onChange={(e) => setSelectedQty(e.target.value)}
                        style={{ marginBottom: 24 }}
                    >
                        <FormControlLabel
                            value="5"
                            control={<Radio />}
                            label={`5 Pcs - Rs. ${item?.price}`}
                        />
                        <FormControlLabel
                            value="10"
                            control={<Radio />}
                            label={`10 Pcs - Rs. ${item?.price * 2}`}
                        />
                    </RadioGroup>

                    <Typography fontWeight="bold" gutterBottom>
                        Special Instructions
                    </Typography>
                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        variant="outlined"
                        placeholder="Please enter instructions about this item"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        style={{ marginBottom: 24 }}
                    />

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
                                    backgroundColor: '#ccc',
                                    color: '#fff',
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
                                    backgroundColor: '#121212',
                                    color: '#fff',
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
                                backgroundColor: '#121212',
                                color: '#f4e3d3',
                                borderRadius: 12,
                                padding: '12px 24px',
                                fontWeight: 'bold',
                                fontSize: 16,
                                textTransform: 'none',
                            }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#000'}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#121212'}
                        >
                            <span>Rs. {price * quantity}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                Add to Cart
                                <span style={{ transform: 'rotate(-45deg)', display: 'inline-block' }}>➜</span>
                            </span>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Dialog>
    );
}
