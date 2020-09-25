import React from "react";
import "./styles.scss";
import Button from "./components/Button/Button";
import Palette from "./components/Palette/Palette";
import Switch from "./components/Switch/Switch";
import TextFied from "./components/TextField/TextField";
import Alert from "./components/Alert/Alert";
import Checkbox from "./components/Checkbox/Checkbox";
import { BsPlus, BsFillInfoCircleFill, BsXCircleFill, BsQuestionCircleFill, BsFlagFill } from "react-icons/bs"

export default function App() {
  return (
    <div className={"App"}>
      <h3>Button</h3>
        <Button prefixIcon={<BsPlus />} type={"outlined"} label={"Translate"} style={{ marginBottom: 20 }} />
        <Button prefixIcon={<BsPlus />} type={"secondary"} label={"Translate"} style={{ marginBottom: 20 }} />
        <Button prefixIcon={<BsPlus />} type={"primary"} label={"Translate"} style={{ marginBottom: 20 }} />
        <Button block suffixIcon={<BsPlus />} />
      <h3>Switch</h3>
        <Switch />
      <h3>TextField</h3>
        <TextFied style={{ marginBottom: 20 }} />
        <TextFied processing />
      <h3>Alert</h3>
        <Alert closable prefixIcon={<BsFillInfoCircleFill />} info={"New NMT model installed."} />
        <Alert closable prefixIcon={<BsXCircleFill />} info={"A fatal error."} status={"error"} />
        <Alert closable prefixIcon={<BsFlagFill />} info={"The task has been done."} status={"success"} />
        <Alert closable prefixIcon={<BsQuestionCircleFill />} info={"There's not enought disk space."} status={"warning"} />
      <h3>Checkbox</h3>
        <Checkbox id={"checkbox"} />
        <Checkbox id={"checkbox"} />
        <Checkbox id={"checkbox"} />
      <h3>Palette</h3>
        <Palette />
    </div >
  );
}
