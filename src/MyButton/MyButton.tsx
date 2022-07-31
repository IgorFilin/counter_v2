import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import {Button} from "@mui/material";


type MyButtonPropsType = {
    nameButton:string
    callback:()=>void
}

export const MyButton:React.FC<MyButtonPropsType> = ({nameButton,callback,...rest}) => {

    const onClickHandler = () => {
        callback()
    }

    return (<div>
            <Button variant={"contained"} onClick={onClickHandler}{...rest}>{nameButton}</Button>
        </div>
    )
}