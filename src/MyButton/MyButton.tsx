import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import {Button} from "@mui/material";


type MyButtonPropsType = {
    nameButton:string
    callback:()=>void
    value:boolean
}

export const MyButton:React.FC<MyButtonPropsType> = ({nameButton,callback,value}) => {

    const onClickHandler = () => {
        callback()
    }

    return (<div>
            <Button disabled={value} variant={"contained"} onClick={onClickHandler}>{nameButton}</Button>
        </div>
    )
}