import React from "react";
import { BsBook } from "react-icons/bs";
import { TransitionGroup } from "react-transition-group";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import List from "../List/List";
import TextField from "../TextField/TextField";
import { data } from "./data/listData";
import logo from "../../images/logo.png";

const Demo = () => {

    return (
        <div className={"BergamotApp"}>
            <TransitionGroup>
                <div>
                <div className={"BergamotApp__header"}><TextField prefixIcon={<img src={logo} width={16}/>} placeholder={"Search something"} style={{ width: "100%" }} /></div>
                <div className={"BergamotApp__languageSwitcher"}>
                    <LanguageSwitcher />
            </div>
                <List data={data} style={{ cursor: "pointer" }} borderless />
                <div className={"BergamotApp__footer"}>
                    <span><a href={"#"}>About</a></span>
                    <span><a href={"#"}>Feedback</a></span>
                </div>
                </div>
            </TransitionGroup>
        </div>
    )
}

export default Demo;