import React, { cloneElement } from "react";
import classNames from "classnames";
import MenuItem from "./MenuItem";
import { BiDownload } from "react-icons/bi";
import Icon from "../Icon/Icon";

const Item = MenuItem;

// [
//     {
//         value: "english",
//         key: 0
//     },
//     {
//         value: "czech",
//         key: 1
//     },
//     {
//         value: "german",
//         key: 2
//     },
//     {
//         value: "french",
//         key: 3
//     }
// ]

interface Ilist {
    value: string,
    key: number | string
}

interface Props {
    setSelection?: Function;
    children?: React.ReactNode;
    getPopupContainer?: (node: HTMLElement) => Element;
    list: Ilist[];
}

const Menu = ({ setSelection, children, list }: Props) => {
    const menuRef = React.useRef<HTMLDivElement>(null)
    const [isActive, setIsActive] = React.useState(false);

    const items = list.map(i => (
        <Item key={i.key.toString()}
              onClick={() => {
                setIsActive(false)
                if (setSelection) setSelection(i.value);
            }}
              icon={<Icon icon={<BiDownload />} />}
            >{i.value}</Item>
    ))

    const classes = classNames({
        Menu: "Menu"
    });

    const clickHandler = () => setIsActive(!isActive);

    React.useEffect(() => {
        const pageClickEvent = (e: MouseEvent) => {
            if (menuRef.current !== null && !menuRef.current.contains(e.target as Node)) {
                setIsActive(!isActive);
            }
        }

        if (isActive) {
            window.addEventListener("click", pageClickEvent);
        }

        return () => {
            window.removeEventListener("click", pageClickEvent);
        }
    }, [isActive])

    const child = React.Children.only(children) as React.ReactElement<any>;

    const dropdownTrigger = cloneElement(child, {
        onClick: clickHandler
    })


    return (
        <div className={"Menu__container"}>
            { dropdownTrigger}
            { isActive ? <div className={classes} ref={menuRef}>
                {items}
            </div> : null}
        </div>
    )
}

export default Menu;