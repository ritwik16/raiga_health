import * as React from "react";
import {Box, Button, List, styled, Typography, ListItem, Card} from "@mui/material";

type ListItem  = {
    id: number,
    value: number,
}

interface ListViewProps {
    list : ListItem [];
    sorted : boolean;
    handleSort : ()=> void;
    handleReset : () => void;
}

const ListSection = styled(Card)({
    padding: '20px',
    borderTop: '1px solid #eee',
    minWidth:"68vh"
});

const ListHeader = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    marginBottom: '16px'
});

const ListTitle = styled(Typography)({
    fontSize: '18px',
    fontWeight: '600',
    color: '#333',
});

const ActionButtons = styled(Box)({
    display:"flex",
    gap: '8px',
    alignContent:"flex-end",
});

const ResetButton = styled(Button)({
    backgroundColor: '#ff5722',
    color: 'white',
    borderRadius: '16px',
    padding: '6px 16px',
    textTransform: 'none',
    fontSize: '12px',
    '&:hover': {
        backgroundColor: '#d84315'
    }
});

const SortButton = styled(Button)({
    backgroundColor: '#2196f3',
    color: 'white',
    borderRadius: '16px',
    padding: '6px 16px',
    textTransform: 'none',
    fontSize: '12px',
    '&:hover': {
        backgroundColor: '#1976d2'
    }
});

const StyledList = styled(List)({
    maxHeight: '200px',
    overflowY: 'auto',
    // backgroundColor: '#fafafa',
    borderRadius: '8px',
    padding: '8px'
});

const StyledListItem = styled(ListItem)({
    backgroundColor: 'white',
    marginBottom: '4px',
    borderRadius: '6px',
    border: '1px solid #e0e0e0',
    '&:last-child': {
        marginBottom: '0'
    }
});

const TotalCount = styled(Typography)({
    fontSize: '12px',
    color: '#666',
    marginTop: '8px',
    textAlign: 'center'
});

export default function ListView({list,sorted,handleSort,handleReset }: ListViewProps) {

    const [sortDirection, setSortDirection] = React.useState<'none' | 'asc' | 'desc'>('none');

    // Update internal state when sorted prop changes
    React.useEffect(() => {
        if (!sorted) {
            setSortDirection('none');
        }
    }, [sorted]);

    function getDisplayList(): ListItem[] {
        if (!sorted || sortDirection === 'none') {
            return list;
        }

        return [...list].sort((a, b) =>
            sortDirection === 'desc' ? b.value - a.value : a.value - b.value
        );
    }

    function handleSortClick() {
        if (!sorted) {
            setSortDirection('asc');
            handleSort();
        } else if (sortDirection === 'asc') {
            setSortDirection('desc');
        } else {
            setSortDirection('none');
            handleSort();
        }
    }

    function getSortButtonText() {
        switch (sortDirection) {
            case 'asc':
                return 'Sort ↑';
            case 'desc':
                return 'Sort ↓';
            default:
                return 'Sort';
        }
    }

    function showList(){
        return(
            getDisplayList().map((item: ListItem) => (
                <StyledListItem key = {item.id}>{item.value}</StyledListItem>
            )))}


    return (
        <ListSection>
            <ListHeader>
                <ListTitle>Number List </ListTitle>
                <ActionButtons>
                    <ResetButton variant="contained" onClick = {handleReset}>Reset</ResetButton>
                    <SortButton variant="contained" onClick={handleSortClick}>{getSortButtonText()}</SortButton>
                </ActionButtons>
            </ListHeader>
            <StyledList>
                    {showList()}
            </StyledList>
            <TotalCount>
                Total items: {list.length}
            </TotalCount>
        </ListSection>
    )
}