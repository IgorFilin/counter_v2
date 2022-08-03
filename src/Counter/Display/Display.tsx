import React from "react";
import s from './Display.module.css'

type DisplayTypeProps = {
    count:number
    lastValue:boolean
}

export const Display = (props:DisplayTypeProps) => {


    return (<div className={props.lastValue?s.error : s.count}>{props.count}</div>)
}