import * as React from "react";
import classNames from "classnames";
import { BsChevronDown } from "react-icons/bs";
import Menu from "../Menu/Menu";
import Icon from "../Icon/Icon";
import { BiTransfer } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { TranslatorState, translatorSlice } from "../../redux/store";

interface Props {
    onSwitch?: (language: string) => void;
}

const languageList = [
    "Czech",
    "French",
    "Spanish"
]

const sourceLanguage = "English";

const LanguageSwitcher = ({ onSwitch }: Props) => {
    const targetLanguage = useSelector((state: TranslatorState) => state.targetLanguage);
    const inboundTranslationLanguage = useSelector((state: TranslatorState) => state.inboundTranslationLanguage);
    const dispatch = useDispatch();


    const classes = classNames({
        LanguageSwitcher: "LanguageSwitcher",
        [`${inboundTranslationLanguage}`]: inboundTranslationLanguage
    });

    React.useEffect(() => {
        if (onSwitch) onSwitch(targetLanguage);
    }, [targetLanguage])

    const changeTargetLanguage = (language: string) => {
        dispatch(translatorSlice.actions.setTargetLanguage(language));
    }

    return (
        <div className={classes}>
            <span className={"LanguageSwitcher__sourceLanguage"}
                  onClick={() => dispatch(translatorSlice.actions.switchInboundTranslationLanguage("sourceLanguage"))}>
                <span className={"LanguageSwitcher__languageType"}>Source</span>
                {sourceLanguage}
            </span>
            <span className={"LanguageSwitcher__delimiter"}><Icon style={{ width: 24, height: 24, color: "#30d5c8" }} icon={<BiTransfer />} /></span>
            <span className={"LanguageSwitcher__targetLanguage"}
                  onClick={() => dispatch(translatorSlice.actions.switchInboundTranslationLanguage("targetLanguage"))}>
                <span className={"LanguageSwitcher__languageType"}>Target</span>
                <span className={"targetLanguage"}>{targetLanguage}
                    <Menu list={[
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
                    ]} setSelection={changeTargetLanguage}>
                        <span className={"LanguageSwitcher__select"}>
                            <BsChevronDown />
                        </span>
                    </Menu>
                </span>
            </span>
        </div>
    )
}

export default LanguageSwitcher;