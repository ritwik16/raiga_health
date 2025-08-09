import { useState } from 'react';
import ListView from "./components/list.view";
import CounterView from "./components/counter.view";
import { styled } from '@mui/material/styles';
import {Typography} from "@mui/material";

type ListItem = {
    id: number;
    value: number;
};

const AppContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#e3f2fd',
    padding: '20px'
});


export default function App() {
    const [counter, setCounter] = useState(0);
    const [list, setList] = useState<ListItem[]>([]);
    const [sorted, setSorted] = useState(false);

    function onIncrement() {
        setCounter(counter + 1);
    }

    function onDecrement() {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    function handleAddToList() {
        if (counter > 0) {
            const exists = list.some(item => item.value === counter);
            if (!exists) {
                setList([...list, { id: list.length + 1, value: counter }]);
            }
            setCounter(0)

        }
    }

    function handleSort() {
        setSorted(!sorted);
    }

    function handleReset() {
        setList([]);
    }

    return (
        <AppContainer >
            <div>
                <Typography variant="h4" component="div">Counter and List app</Typography>
            </div>
                <CounterView
                    counter={counter}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onAddToList={handleAddToList}
                />

                <ListView
                    list={list}
                    sorted={sorted}
                    handleSort={handleSort}
                    handleReset={handleReset}
                />
        </AppContainer>
    );
}

