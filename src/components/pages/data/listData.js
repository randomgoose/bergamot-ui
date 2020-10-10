import React from "react";
import { BsArrowRepeat, BsLock, BsLockFill, BsPersonFill } from "react-icons/bs";
import Button from "../../Button/Button";

export const data = [
    {
        text: "Item1",
        icon: <BsLockFill />,
        action: <Button label={"Go"} />
    },
    {
        text: "Item2",
        icon: <BsArrowRepeat />
    },
    {
        text: "Item3",
        icon: <BsPersonFill />
    }
];