import React, { CSSProperties, ReactNode } from "react";
import classNames from "classnames";
import { FaTimes } from "react-icons/fa";


export interface Props {
    statuts?: "primary" | "secondary" | "outlined";
    prefixIcon?: ReactNode;
    info?: string;
    style?: CSSProperties;
    closeButton?: ReactNode;
    closable?: boolean;
}

const Alert = ({ statuts, prefixIcon, info, style, closable, closeButton }: Props) => {

    const close = (e?:MouseEvent) => {

    }

    const classes = classNames({
        Alert: "Alert",
    })

    return (
        <div className={classes} style={{ marginTop: 20 }}>
            <span className={"Alert__prefixIcon"}>{prefixIcon}</span>
            <span className={"Alert__text"}>{info}</span>
            <span>{closable ? closeButton ? closeButton : <FaTimes /> : null }</span>
        </div>
    );
};

export default Alert;
