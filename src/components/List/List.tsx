import React, { CSSProperties } from "react";
import Item from "./Item";
import { Props as ItemProps } from "./IItem";
import classNames from "classnames";

interface Props {
    style?: CSSProperties;
    itemStyle?: CSSProperties;
    header?: string;
    data: ItemProps[];
    borderless?: boolean;
}

const List = ({ style, itemStyle, header, data, borderless }: Props) => {

    const classes = classNames({
        List: "List",
        borderless: borderless
    })

    const listItems = data.map(i => {
        const props = i;
        return <Item style={itemStyle} {...props}></Item>
    })

    return (
        <div className={classes} style={style}>
            { header ? <div className={"List__header"}>{header}</div> : null}
            { listItems }
        </div>
    )

}

export default List;