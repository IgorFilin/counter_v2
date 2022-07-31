import React from "react";
import s from './Display.module.css'

type DisplayTypeProps = {
    count:number
}

export const Display = (props:DisplayTypeProps) => {
    return (<div className={s.count}>{props.count}</div>)
}