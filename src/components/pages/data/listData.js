import React from "react";
import { BsChevronRight, BsGear, BsLightningFill, BsLockFill, BsApp } from "react-icons/bs";
import Switch from "../../Switch/Switch";

export const data = [
    {
        text: "Translate own text",
        icon: <BsLockFill />,
        action: <BsChevronRight />
    },
    {
        text: "Module Management",
        icon: <BsApp />,
        action: <BsChevronRight />
    },
    {
        text: "Options",
        icon: <BsGear />,
        action: <BsChevronRight />
    },
    {
        text: "Always translate German",
        icon: <BsLightningFill />,
        action: <Switch />
    },
    {
        text: "Show quality estimation",
        icon: <BsLightningFill />,
        action: <Switch />
    }
];