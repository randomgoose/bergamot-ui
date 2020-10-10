import React, { CSSProperties } from "react";
import Item from "./Item";
import { Props as ItemProps } from "./IItem";

interface Props {
    style?: CSSProperties;
    itemStyle?: CSSProperties;
    header?: string;
    data: ItemProps[];
}

const List = ({ style, itemStyle, header, data }: Props) => {

    const listItems = data.map(i => {
        const props = i;
        return <Item style={itemStyle} {...props}></Item>
    })

    return (
        <div className={"List"} style={style}>
            { header ? <div className={"List__header"}>{header}</div> : null}
            { listItems }
        </div>
    )

}

export default List;