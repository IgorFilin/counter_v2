import React from "react";
import {Display} from "./Display/Display";
import {Button, Container, Grid} from "@mui/material";
import s from './Counter.module.css'
import {SettingsDisplay} from "./SettingsDisplay/SettingsDisplay";

type CounterTypeProps = {
    addCount: () => void
    count: number
    resetCount: () => void
    maxValue: number
    settingsModeOnOff: () => void
    settingsMode: boolean
    minValue: number
    changeMaxValue:(value:number)=> void
    changeMinValue:(value:number)=> void
    errorInputSettigs:boolean
}
export const Counter = (props: CounterTypeProps) => {
    const lastValue = props.count === props.maxValue
    const firstValue = props.count === props.minValue

    return (
        <div>
            <Grid style={{padding: "45px"}} container direction={"column"} alignItems={"center"}
                  justifyContent={"space-around"}>
                <Grid className={s.display} item>
                    {!props.settingsMode ? <Display
                        lastValue={lastValue}
                        count={props.count}/>
                        :
                        <SettingsDisplay
                            maxValue={props.maxValue}
                            minValue={props.minValue}
                            changeMaxValue={props.changeMaxValue}
                            changeMinValue={props.changeMinValue}
                            errorInputSettigs={props.errorInputSettigs}
                        />}
                </Grid>
                <Grid container className={s.btnGroup} justifyContent={"space-around"} style={{padding: '50px'}}>
                    {!props.settingsMode && <Grid item>
                        <Button disabled={lastValue} variant={"contained"} onClick={props.addCount}>Add</Button>
                    </Grid>}
                    {!props.settingsMode &&  <Grid item>
                        <Button disabled={firstValue} variant={"contained"} onClick={props.resetCount}>Reset</Button>
                    </Grid>}
                    <Grid item>
                        <Button disabled={props.errorInputSettigs} variant={"contained"} onClick={props.settingsModeOnOff}>Set</Button>
                    </Grid>
                </Grid>

            </Grid>


        </div>
    )
}

