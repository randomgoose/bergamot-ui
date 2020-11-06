import * as React from "react";
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher";
import { BsGear, BsLightningFill } from "react-icons/bs";
import { BiChevronRight, BiBox, BiSlider, BiAnalyse } from "react-icons/bi";
import Menu from "../components/Menu/Menu";
import Switch from "../components/Switch/Switch";
import List from "../components/List/List";
import TextField from "../components/TextField/TextField";
import logo from "../images/logo.png";
import Header from "../components/Header/Header";
import { Route, Switch as ReactSwitch, Link, withRouter } from "react-router-dom";
import { Translator } from "../simulator/Translator";
import InputBox from "../components/InputBox/InputBox";
import { englishText, germanText } from "./data/text";
import { useSelector, useDispatch } from "react-redux";
import { TranslatorState, translatorSlice } from "../redux/store";
import { BsChevronDown } from "react-icons/bs";
import Options from "./Options";
import Button from "../components/Button/Button";

const translator = new Translator("English", "Czech");
translator.setDelay(7000);

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

const Home = () => {
    const inboundTranslationLanguage = useSelector((state: TranslatorState) => state.inboundTranslationLanguage);
    const targetLanguage = useSelector((state: TranslatorState) => state.targetLanguage);
    const dispatch = useDispatch();

    const data = [
        {
            text: "Translate own text",
            icon: <BiAnalyse />,
            action: <BiChevronRight />,
            route: "translate"
        },
        {
            text: "Module Management",
            icon: <BiBox />,
            action: <BiChevronRight />
        },
        {
            text: "Options",
            icon: <BiSlider />,
            action: <BiChevronRight />,
            route: "options"
        },
        {
            text: `Always translate ${targetLanguage}`,
            icon: <BsLightningFill />,
            action: <Switch />
        },
        {
            text: "Show quality estimation",
            icon: <BsLightningFill />,
            action: <Switch />
        }
    ];

    const items = data.map(i => {
        if (i.route) return <Link to={`demo/${i.route}`}><List.Item key={Math.random()} text={i.text} icon={i.icon} action={i.action} /></Link>
        else return <List.Item key={Math.random()} text={i.text} icon={i.icon} action={i.action} />
    })

    return (
        <div className={"Home"}>
            <div>
                <div className={"BergamotApp__header"} ><TextField allowClear prefixIcon={<img alt={""} src={logo} width={16} />} placeholder={"Search something"} style={{ width: "100%", borderRadius: "4px 4px 0 0" }} /></div>
                <div className={"BergamotApp__languageSwitcher"}>
                    <LanguageSwitcher />
                </div>

                <List style={{ cursor: "pointer" }} borderless>
                    {items}
                </List>

                <div className={"BergamotApp__footer"}>
                    <span>About</span>
                    <span>Feedback</span>
                </div>
            </div>
        </div>
    )
}

const Translate = () => {

    const [text, setText] = React.useState("");
    const [translatedText, setTranslatedText] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const outboundSourceLanguage = useSelector((state: TranslatorState) => state.outboundSourceLanguage);
    const outboundTargetLanguage = useSelector((state: TranslatorState) => state.outboundTargetLanguage);


    React.useEffect(() => {
        setLoading(true);
        translator.translate(text).then((res => {
            setTranslatedText(res);
            setLoading(false);
        }));
    }, [text])


    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setText(e.target.value);
    }

    return (
        <div className={"Translate"}>
            <Header allowBack extra={<BsGear />} />
            <div className={"Translate__body"}>
                <div className={"Translate__originText"}>
                    <div className={"Translate__title"}>{`Origin: ${outboundSourceLanguage}`}
                        <Menu list={languageList}>
                            <span className={"LanguageSwitcher__select"}>
                                <BsChevronDown />
                            </span>
                        </Menu></div>
                    <TextField textArea value={text} onChange={changeHandler} allowDrop />
                </div>
                <div className={"Translate__targetText"}>
                    <div className={"Translate__title"} style={{display: "flex", justifyContent: "space-between"}}>
                        <div style={{display: "flex"}}>
                        {`Target: ${outboundTargetLanguage}`}
                        <Menu list={languageList}>
                            <span className={"LanguageSwitcher__select"}>
                                <BsChevronDown />
                            </span>
                        </Menu>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <label style={{marginRight: 4}}>QE</label>
                            <Switch />
                        </div>
                    </div>
                    <TextField textArea value={translatedText} processing={loading} children={<Button label={"Copy to clipboard"} style={{
                        position: "absolute",
                        left: "50%",
                        bottom: 16,
                        transform: "translateX(-50%)",
                        opacity: translatedText ? 1 : 0,
                        transition: "all 0.6s"
                    }}/>}/>
                </div>
            </div>
        </div>
    )
}

const Landing = () => {
    return (
        <div className={"Landing"}>
            <img alt={""} src={logo} width={24}></img>
        </div>
    )
}

const Demo = () => {
    const Routes = withRouter(({ location }) => {
        return (
            <ReactSwitch location={location}>
                <Route exact path={"/demo"}>
                    <Home />
                </Route>
                <Route exact path={`/demo/translate`}>
                    <Translate />
                </Route>
                <Route exact path={`/demo/options`}>
                    <Options />
                </Route>
            </ReactSwitch>


        )
    })

    const inboundTranslationLanguage = useSelector((state: TranslatorState) => state.inboundTranslationLanguage);
    const dispatch = useDispatch();

    return (

        <div className={"Demo"}>
            <div className={"BergamotApp"}>
                <Routes />
            </div>
            <div className={"Text"}>
                {inboundTranslationLanguage === "sourceLanguage" ? englishText.split("\n").map(i => <p>{i}</p>) : germanText.split("\n").map(i => <p>{i}</p>)}
            </div>
        </div>
    )
}


export default Demo;