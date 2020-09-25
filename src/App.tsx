import React from "react";
import "./styles.scss";
import Button from "./components/Button/Button";
import { FaBeer, FaPlus } from "react-icons/fa";
import Switch from "./components/Switch/Switch";
import TextFied from "./components/TextField/TextField";
import Alert from "./components/Alert/Alert";
import { BsPlus } from "react-icons/bs"

export default function App() {
  return (
    <div className={"App"}>
      <Button disabled prefixIcon={<BsPlus />} type={"outlined"} label={"Great"} style={{ marginBottom: 20 }} />
      <Button prefixIcon={<BsPlus />} type={"secondary"} label={"Great"} style={{ marginBottom: 20 }} />
      <Button prefixIcon={<BsPlus />} type={"primary"} label={"Great"} style={{ marginBottom: 20 }} />
      <Button block suffixIcon={<BsPlus />}/>
      <Switch />
      <TextFied />
      <Alert closable prefixIcon={<FaBeer />} info={"Nice to see you!"} />
    </div >
  );
}
