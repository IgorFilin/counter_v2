import React from "react";
import {Grid, TextField} from "@mui/material";
import s from './SettingsDisplay.module.css'

type SettingsDisplayTypeProps = {
    maxValue: number
    minValue: number
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
    errorInputSettigs: boolean
}

export const SettingsDisplay = (props: SettingsDisplayTypeProps) => {
    return (<Grid container className={s.setDisplay}>
            <TextField error={props.errorInputSettigs}
                       onChange={(e) => props.changeMaxValue(Number(e.currentTarget.value))}
                       value={props.maxValue}
                       type={'number'}
                       label={'Max value'}
                       variant={"standard"}
                       color={"secondary"}
                       size={"medium"}>

            </TextField>
            <TextField
                error={props.errorInputSettigs}
                onChange={(e) => props.changeMinValue(Number(e.currentTarget.value))}
                value={props.minValue}
                type={'number'}
                label={'Min value'}
                variant={"standard"}
                size={"medium"}>

            </TextField>
        </Grid>
    )
}