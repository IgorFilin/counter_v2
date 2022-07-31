import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Container, Grid, Paper} from "@mui/material";

function App() {

    const maxValue = 5
    const minValue = 0
    const [count, setCount] = useState(minValue)

    const addCount = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(minValue)
    }

    return (
        <Container fixed className={'App'} maxWidth={"sm"} style={{padding:'30px',}}>
            <Paper elevation={5} className={'paper'}>
               <Counter count={count} addCount={addCount} resetCount={resetCount}/>
            </Paper>
        </Container>

    );
}

export default App;


