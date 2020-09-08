import React from "react";
import {Spin} from "antd";
import classes from "./Preloader.module.scss"

export function Preloader() {
    return (
        <div className={classes.spitWrap}>
            <Spin className={classes.Spin}/>
        </div>
    )
}