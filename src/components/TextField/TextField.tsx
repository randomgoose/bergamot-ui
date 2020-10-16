import React, { CSSProperties, ReactNode } from "react";
import classNames from "classnames";
import { BsPerson, BsXCircleFill } from "react-icons/bs";

interface Props {
    processing?: boolean,
    style?: CSSProperties,
    textArea?: boolean,
    prefixIcon?: ReactNode,
    suffixIcon?: ReactNode,
    maxLength?: number,
    placeholder?: string,
    allowDrop?: boolean,
    allowClear?: boolean
}

const TextField = ({ processing, style, prefixIcon, suffixIcon, textArea, maxLength, placeholder, allowDrop, allowClear }: Props) => {
    const [value, setValue] = React.useState("");
    const [itemOver, setItemOver] = React.useState(false);


    const classes = classNames({
        TextField: "TextField",
        processing: processing,
        withPrefixIcon: prefixIcon,
        withSuffixIcon: suffixIcon,
        textArea: textArea,
        maxLengthSet: maxLength,
        itemOver: itemOver,
        allowDrop: allowDrop,
        allowClear: allowClear
    });

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    }

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        if (allowDrop) setItemOver(true);
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        if (allowDrop) setItemOver(false);
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        if (allowDrop) setItemOver(false);
    }

    const clear = (e: React.MouseEvent<HTMLSpanElement>) => {
        setValue("");
    }


    return (
        <div className={classes} style={style} onDragOver={dragOverHandler} onDragLeave={dragLeaveHandler} onDrop={dropHandler}>
            { prefixIcon ?
                <span className={"TextField__prefixIcon"}>{prefixIcon}</span> :
                null}
            { textArea ?
                <textarea
                    placeholder={placeholder ? placeholder : "Please type in something..."}
                    maxLength={maxLength}
                    onChange={changeHandler}
                    value={value}
                /> :
                <input
                    placeholder={placeholder ? placeholder : "Please type in something..."}
                    maxLength={maxLength}
                    onChange={changeHandler}
                    value={value}
                />
            }
            { suffixIcon ?
                <span className={"TextField__suffixIcon"}>{suffixIcon}</span> :
                null}
            { maxLength ? <label className={"TextField__maxLength"}>{`${value.length}/`}<span style={{ color: "gray" }}>{`${maxLength}`}</span></label> : null}
            { allowClear ? value.length > 0 ? <span className={"TextField__clearIcon"} onClick={clear}><BsXCircleFill /></span> : null : null}
        </div>

    )
}

export default TextField;