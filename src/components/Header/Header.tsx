import React from "react";
import { BsChevronLeft } from "react-icons/bs"
import Icon from "../Icon/Icon";

interface Props {
    text?: string
    allowBack?: boolean
    extra?: React.ReactNode;
}

const Header = ({ text, allowBack, extra }: Props) => {
    return (
        <div className={"Header"}>
            { allowBack ? <Icon className={"Header__back"} icon={<BsChevronLeft />} /> : null}
            { text ? text : "Bergamot"}
            <span className={"Header__extra"}>{extra ? extra : null}</span>
        </div>
    )
}

export default Header;