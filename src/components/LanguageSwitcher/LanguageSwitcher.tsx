import * as React from "react";
import classNames from "classnames";
import { BsChevronDown } from "react-icons/bs";

const languageList = [
    "Czech",
    "French",
    "Spanish"
]

const sourceLanguage = "English";

const LanguageSwitcher = () => {
    const [language, setLanguage] = React.useState("source");
    const [targetLanguage, setTargetLanaguage] = React.useState("Czech");

    const classes = classNames({
        LanguageSwitcher: "LanguageSwitcher",
        [`${language}`]: language
    })

    const languages = languageList.map(i => <option value={i}>{i}</option>);

    const switchLanguage = (e?: React.MouseEvent<HTMLSpanElement>) => {
        return (language: string) => setLanguage(language);
    }

    const changeSwitchLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTargetLanaguage(e.target.value);
    }

    return (
        <div className={classes}>
            <span className={"LanguageSwitcher__sourceLanguage"} onClick={e => switchLanguage(e)("source")}>{sourceLanguage}</span>
            <span className={"LanguageSwitcher__delimiter"}> / </span>
            <span className={"LanguageSwitcher__targetLanguage"} onClick={e => switchLanguage(e)("target")}>
                <span>{targetLanguage}
                    <span className={"LanguageSwitcher__select"}>
                        <BsChevronDown />
                    </span>
                </span>
                <select id={"targetLanguage"} onChange={changeSwitchLanguage} value={targetLanguage}>
                    {languages}
                </select>
            </span>
        </div>
    )
}

export default LanguageSwitcher;