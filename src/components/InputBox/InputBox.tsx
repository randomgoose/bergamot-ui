import { kMaxLength } from "buffer";
import * as React from "react";

interface Props {
    style?: React.CSSProperties;
    maxLength?: number;
}

const InputBox = ({style, maxLength}:Props) => {
    const [value, setValue] = React.useState("This is a good idea.")

    const ref = React.useRef<HTMLDivElement>(null);

    const preventOverflow = (length: number) => {

    }

    const keyDownHandler = (e?: React.KeyboardEvent<HTMLDivElement>) => {
        if (maxLength) {
            
        }
    }

    React.useEffect(() => {
        value.indexOf("This");
        
    }, [])

    return <div className={"InputBox"}
                contentEditable
                ref={ref}
                style={style}
                onKeyDown={keyDownHandler}
                >
        { value }
    </div>
};

export default InputBox;