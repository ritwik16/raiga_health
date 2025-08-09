import * as React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { styled } from "@mui/material/styles";
import {Box, Button, Card, IconButton, Typography} from "@mui/material";

interface CounterViewProps {
    counter: number;
    onIncrement: () => void;
    onDecrement: () => void;
    onAddToList: () => void;
}

const CounterSection = styled(Card)({
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    margin:"20px",
    minWidth:"68vh"
});

const CounterControls = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "20px",
    justifyContent:"center"
});

const CounterDisplay = styled(Typography)({
    fontSize: "26px",
    fontWeight: "bold",
    color: "#333",
    minWidth: "80px",
    textAlign: "center"
});

const CounterButton = styled(IconButton)({
    backgroundColor: "#f0f0f0",
    border: "2px solid #ddd",
    width: "50px",
    height: "50px",
    "&:hover": {
        backgroundColor: "#e0e0e0"
    },
    "&:disabled": {
        backgroundColor: "#f8f8f8",
        borderColor: "#eee"
    }
});

const AddToListButton = styled(Button)({
    backgroundColor: "#2196f3",
    color: "white",
    borderRadius: "25px",
    padding: "12px 30px",
    textTransform: "none",
    fontSize: "16px",
    fontWeight: "500",
    "&:hover": {
        backgroundColor: "#1976d2"
    }
});

export default function CounterView({counter,onIncrement,onDecrement,onAddToList}: CounterViewProps) {

    return (
        <CounterSection>
            <Typography variant = "h6" sx ={{marginBottom:"16px"}}>Counter</Typography>
            <CounterControls>
                <CounterButton onClick={onDecrement} disabled={counter === 0}>
                    <RemoveCircleOutlineIcon />
                </CounterButton>
                <CounterDisplay>{counter}</CounterDisplay>
                <CounterButton onClick={onIncrement}>
                    <AddCircleOutlineIcon />
                </CounterButton>
            </CounterControls>
            <Box sx = {{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <AddToListButton variant="contained" onClick={onAddToList}>Add to List</AddToListButton>
            </Box>
        </CounterSection>
    );
}

