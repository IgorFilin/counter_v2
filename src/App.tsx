import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {Container, Grid, Paper} from "@mui/material";




function App() {



    const [settingsMode,setSettingsMode] = useState(false)
    const [maxValue,setMaxValue] = useState(5)
    const [minValue,setMinValue] = useState(0)
    const [count, setCount] = useState<number>(minValue)
    const errorInputSettigs = minValue < 0 || minValue === maxValue || maxValue < minValue || maxValue < 0

    useEffect(()=>getObjectLocalStorage(),[])

    const getObjectLocalStorage = () => {
       const newMaxValue = localStorage.getItem('maxValue')
        const newMinValue = localStorage.getItem('minValue')
        newMaxValue && setMaxValue(JSON.parse(newMaxValue))
        newMinValue && setMinValue(JSON.parse(newMinValue))
        newMinValue && setCount(JSON.parse(newMinValue))

    }
    const addCount = () => {
        setCount(count + 1)
    }
    const resetCount = () => {
        setCount(minValue)
    }

    const settingsModeOnOff = () => {
        localStorage.setItem('maxValue',JSON.stringify(maxValue))
        localStorage.setItem('minValue',JSON.stringify(minValue))
        setSettingsMode(!settingsMode)
        setCount(minValue)
    }


   const changeMaxValue = (value:number) => {
       setMaxValue(value)
   }
    const changeMinValue = (value:number) => {
        setMinValue(value)
    }


    return (
        <Container fixed maxWidth={'sm'} className={'App'} style={{marginTop:'300px'}} >
            <Paper elevation={5} className={'paper'}>
               <Counter
                   changeMaxValue={changeMaxValue}
                   changeMinValue={changeMinValue}
                   settingsMode={settingsMode}
                   settingsModeOnOff={settingsModeOnOff}
                   maxValue={maxValue}
                   count={count}
                   addCount={addCount}
                   resetCount={resetCount}
                   minValue={minValue}
                   errorInputSettigs={errorInputSettigs}
               />

            </Paper>
        </Container>

    );
}

export default App;


