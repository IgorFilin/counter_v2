import React from "react";
import {Display} from "./Display/Display";
import {MyButton} from "../MyButton/MyButton";
import {Container, Grid} from "@mui/material";

type CounterTypeProps = {
    addCount: () => void
    count: number
    resetCount: () => void
}
export const Counter = (props: CounterTypeProps) => {


    return (
        <div>
            <Grid container justifyContent={"center"}><Display count={props.count}/></Grid>
            <Grid container style={{padding:'80px'}} justifyContent={"space-around"}>
              <MyButton value={false} callback={props.addCount} nameButton={'add'}></MyButton>
                <MyButton value={false} callback={props.resetCount} nameButton={'reset'}></MyButton>

            </Grid>

        </div>
    )
}

