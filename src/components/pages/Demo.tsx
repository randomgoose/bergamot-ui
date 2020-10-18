import * as React from "react";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { BsChevronRight, BsLockFill, BsGear, BsLightningFill, BsApp } from "react-icons/bs";
import Switch from "../Switch/Switch";
import List from "../List/List";
import TextField from "../TextField/TextField";
import logo from "../../images/logo.png";
import Header from "../Header/Header";
import { Route, Switch as ReactSwitch, Link, useRouteMatch, withRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const data = [
    {
        text: "Translate own text",
        icon: <BsLockFill />,
        action: <BsChevronRight />,
        route: "translate"
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

const items = data.map(i => {
    if (i.route) return <Link to={`demo/${i.route}`}><List.Item key={Math.random()} text={i.text} icon={i.icon} action={i.action} /></Link>
    else return <List.Item key={Math.random()} text={i.text} icon={i.icon} action={i.action} />
})


const Home = () => {
    return (
        <div className={"Home"}>
            <div>
                <div className={"BergamotApp__header"}><TextField prefixIcon={<img alt={""} src={logo} width={16} />} placeholder={"Search something"} style={{ width: "100%" }} /></div>
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

    return (
        <div className={"Translate"}>
            <Header allowBack extra={<BsGear />} />
            <div className={"Translate__body"}>
                <div className={"Translate__originText"}>
                    <div className={"Translate__title"}>Origin</div>
                    <TextField textArea />
                </div>
                <div className={"Translate__targetText"}>
                    <div className={"Translate__title"}>Target</div>
                    <TextField textArea />
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
    const { path, url } = useRouteMatch();

    // const routes = <ReactSwitch>
    //     <Route exact path={path}>
    //         <Home />
    //     </Route>
    //     <Route exact path={`${path}/translate`}>
    //         <Translate />
    //     </Route>
    // </ReactSwitch>

    const Routes = withRouter(({ location }) => (
        <TransitionGroup className={"router-wrapper"}>
            <CSSTransition
                timeout={5000}
                classNames={'fade'}
                key={location.pathname}
            >
                <ReactSwitch location={location}>
                    <Route exact path={`${path}`}>
                        <Home />
                    </Route>
                    <Route exact path={`${path}/translate`}>
                        <Translate />
                    </Route>
                </ReactSwitch>
            </CSSTransition>
        </TransitionGroup>
    ))

    // let currentPage;
    // switch (page) {
    //     case "Home":
    //         currentPage = <CSSTransition timeout={300} unmountOnExit in={page === "Home"} ><Home setPage={setPage} /></CSSTransition>
    //         break;
    //     case "Translate":
    //         currentPage = <CSSTransition timeout={300} in={page === "Translate"} classNames={"item"} onEnter={() => console.log("yes")} unmountOnExit><Landing /></CSSTransition>
    //         break;
    //     default:
    //         currentPage = <CSSTransition timeout={300} in={page === "Translate"}><Home setPage={setPage} /></CSSTransition>
    // }

    return (

        <div className={"Demo"}>
            <div className={"BergamotApp"}>
                {/* <TransitionGroup> */}
                {/* { currentPage } */}
                {/* { routes } */}
                <Routes />
                {/* <CSSTransition timeout={500} in={page === "Home"} classNames={"item"} unmountOnExit><Home setPage={setPage} /></CSSTransition> */}
                {/* <CSSTransition timeout={500} in={page === "Translate"} classNames={"item"} onEnter={() => console.log("yes")} unmountOnExit><Translate /></CSSTransition> */}
                {/* </TransitionGroup> */}
                {/* <Landing /> */}
            </div>
            <div className={"Text"}>
                <p>
                    The most profound technologies are those that disappear. They weave themselves into the fabric of everyday life
                    until they are indistinguishable from it.
            </p>
                <p>
                    Consider writing, perhaps the first information technology: The ability to capture a symbolic representation of
                    spoken language for long-term storage freed information from the limits of individual memory. Today this
                    technology is ubiquitous in industrialized countries. Not only do books, magazines and newspapers convey
                    written information, but so do street signs, billboards, shop signs and even graffiti. Candy wrappers are covered
                    in writing. The constant background presence of these products of "literacy technology" does not require active
                attention, but the information to be conveyed is ready for use at a glance. It is difficult to imagine modern life otherwise.</p>
                <p>
                    Silicon-based information technology, in contrast, is far from having become part of the environment. More than
                    50 million personal computers have been sold, and nonetheless the computer remains largely in a world of its
                    own. It is approachable only through complex jargon that has nothing to do with the tasks for which which
                    people actually use computers. The state of the art is perhaps analogous to the period when scribes had to know
                    as much about making ink or baking clay as they did about writing.
            </p>
            </div>
        </div>
    )
}


export default Demo;