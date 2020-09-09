import React from "react";
import classes from "./Preloader.module.scss"
import {Spin} from "antd";

export function Preloader() {
    return (
        <div className={classes.spitWrap}>
            <Spin className={classes.Spin}/>
        </div>
    )
}