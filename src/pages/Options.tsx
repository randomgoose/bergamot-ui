import React from "react";
import { BiChevronDown } from "react-icons/bi";
import Header from "../components/Header/Header";
import TextField from "../components/TextField/TextField";
import Menu from "../components/Menu/Menu";
import Button from "../components/Button/Button";
import Switch from "../components/Switch/Switch";

const languageList = [
    {
        value: "english",
        key: 0
    },
    {
        value: "czech",
        key: 1
    },
    {
        value: "german",
        key: 2
    },
    {
        value: "french",
        key: 3
    }
];



const Options = () => {
    return (
        <div className={"Options"}>
            <Header text={"Options"} allowBack />
            <div className="Options__body" style={{
                padding: 16
            }}>
                <div className={"Options__optionGroup"}>
                    <div className={"Options__optionTitle"}>My first language</div>

                    <TextField suffixIcon={
                        <Menu list={languageList}>
                            <BiChevronDown />
                        </Menu>} value={"English"} />

                </div>

                <div className={"Options__optionGroup"}>
                    <div className={"Options__optionTitle"}>Language Model Manager</div>

                    <Button type={"secondary"} label={"Launch"}></Button>
                    <span style={{
                        fontSize: 12,
                        color: "lightgray"
                    }}>32 packages, 232 mb</span>

                </div>

                <div className={"Options__optionGroup"}>
                    <div className={"Options__optionTitle"}>Accessibility</div>

                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                        <label>Color blindness mode</label>
                        <Switch />
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Options;