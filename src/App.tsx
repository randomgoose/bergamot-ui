import React from "react";
import "./styles.scss";
import { generate } from "@ant-design/colors";
import Button from "./components/Button/Button";
import Palette from "./components/Palette/Palette";
import Switch from "./components/Switch/Switch";
import TextField from "./components/TextField/TextField";
import Alert from "./components/Alert/Alert";
import Checkbox from "./components/Checkbox/Checkbox";
import { BsPerson, BsPlus, BsFillInfoCircleFill, BsXCircleFill, BsQuestionCircleFill, BsFlagFill, BsClock, BsArrowRepeat, BsSoundwave, BsVolumeUpFill } from "react-icons/bs"
import Radio from "./components/Radio/Radio";
import Card from "./components/Card/Card";
import Progress from "./components/Progress/Progress";
import ControlledProgress from "./components/Progress/demos/ControlledProgress";

const baseColors = [
  {
    name: "Rose Red / Error, Danger",
    hex: "FF033E"
  },
  {
    name: "Gold",
    hex: "FFD700"
  },
  {
    name: "Violet",
    hex: "8F00FF"
  },
  {
    name: "Emerald Green / Success",
    hex: "50C878"
  },
  {
    name: "Bright Orange / Warning",
    hex: "FFA500"
  },
  {
    name: "Teal",
    hex: "30D5C8"
  },
  {
    name: "Royal Blue / Information",
    hex: "4169E1"
  }
];

const generatedColors = baseColors.map((hue) => {
  return {
    name: hue.name,
    colors: generate(hue.hex)
  };
});

export default function App() {

  const [progressValue, setProgressValue] = React.useState(2);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (progressValue < 100) {
        setProgressValue(v => v + 1)
      } else setProgressValue(v => 0);
    }, 10);

    return () => clearInterval(timer);
  }, [progressValue]);

  return (
    <div className={"App"} >
      <h1>Design Assets</h1>
      <h3>Button</h3>
      <div className={"Row"} style={{ display: "flex", flexDirection: "column" }}>
        <Card title={"Different types of buttons"}>
          <div>primary button</div>
          <Button type={"primary"} label={"Translate"} />
          <div>secondary button</div>
          <Button type={"secondary"} label={"Translate"} />
          <div>outlined button / tertiary button</div>
          <Button type={"outlined"} label={"Translate"} />
        </Card>

        <Card title={"Buttons with icons"}>
          <div>prefixIcon.</div>
          <Button prefixIcon={<BsArrowRepeat />} type={"primary"} label={"Translate"} />
          <div>suffixIcon</div>
          <Button suffixIcon={<BsArrowRepeat />} type={"secondary"} label={"Translate"} />
          <div>outlined button / tertiary button</div>
        </Card>

        <Card title={"Block buttons (width fits its parent node)"}>
          <div>block button (width === 100%)</div>
          <Button block suffixIcon={<BsPlus />} />
        </Card>

        <Card title={"Disabled button"}>
          <div>disabled button </div>
          <Button disabled label={"Disabled"} />
        </Card>
      </div>

      <h3>Switch</h3>

      <div className={"Row"} style={{ display: "flex", flexDirection: "column" }}>
        <Card title={"Basic"}>
          <Switch />
        </Card>

        <Card title={"Trigger an action when toggled."}>
          <Switch onToggle={() => alert("Toggled!")} />
        </Card>
      </div>

      <h3>TextField</h3>

      <div className={"Row"} style={{ display: "flex", flexDirection: "column" }}>
        <Card title={"Basic"}>
          <TextField />
        </Card>

        <Card title={"Max length"}>
          <TextField maxLength={24} />
        </Card>

        <Card title={"Allow clearance"}>
          <TextField allowClear />
        </Card>

        <Card title={"Prefix Icon"}>
          <TextField prefixIcon={<BsPerson />} />
        </Card>

        <Card title={"Suffix Icon"}>
          <TextField suffixIcon={<BsClock />} />
        </Card>

        <Card title={"Textarea"}>
          <TextField textArea maxLength={100} />
        </Card>

        <Card title={"Processing"}>
          <TextField textArea processing />
        </Card>

        <Card title={"Drag and drop a file."}>
          <TextField textArea placeholder={"Drag and drop a file here."} allowDrop />
        </Card>

      </div>

      <div style={{ display: "flex", alignItems: "flex-start" }}>


      </div>
      <h3>Alert</h3>
      <div className={"Row"} style={{ display: "flex", flexDirection: "column" }}>
        <Card title={"Alert"}>
          <Alert closable prefixIcon={<BsFillInfoCircleFill />} info={"New NMT model installed."} />
          <Alert closable prefixIcon={<BsXCircleFill />} info={"A fatal error."} status={"error"} />
          <Alert closable prefixIcon={<BsFlagFill />} info={"The task has been done."} status={"success"} />
          <Alert closable prefixIcon={<BsQuestionCircleFill />} info={"There's not enought disk space."} status={"warning"} />
        </Card>

      </div>
      <h3>Checkbox</h3>
      <div className={"Row"} style={{ display: "flex", flexDirection: "column" }}>
        <Card title={"Checkbox"}>
          <Checkbox id={"checkbox1"} label={"English"} />
          <Checkbox id={"checkbox2"} label={"Finnish"} />
          <Checkbox id={"checkbox3"} label={"German"} />
        </Card>
      </div>

      <h3>Radio</h3>
      <div className={"Row"} style={{ display: "flex", flexDirection: "column" }}>
        <Card title={"Radio"}>
          <Radio id={"radio1"} />
          <Radio id={"radio2"} />
          <Radio id={"radio3"} />
        </Card>
      </div>

      <h3>Card</h3>
      <div className={"Row"} style={{ display: "flex", flexDirection: "column" }}>
        <Card actions={[
          <Button label={"Done"} />
        ]} title={"ambience"} style={{ width: "50%", alignSelf: "center" }}>
          <span><strong>noun</strong> [S]</span>
          <br />
          <span style={{ display: "flex", alignItems: "center" }}><strong>UK</strong><BsVolumeUpFill style={{ marginLeft: 4 }} /></span>
        the character of a place or the quality it seems to have:
        <ul>
            <li>Despite being a busy city, Dublin has the ambience of a country town.</li>
          </ul>

        </Card>

        <Card actions={[
          <Button label={"Done"} />
        ]} title={"ambience"} style={{ width: "50%", alignSelf: "center" }} borderless>
          <span><strong>noun</strong> [S]</span>
          <br />
          <span style={{ display: "flex", alignItems: "center" }}><strong>UK</strong><BsVolumeUpFill style={{ marginLeft: 4 }} /></span>
        the character of a place or the quality it seems to have:
        <ul>
            <li>Despite being a busy city, Dublin has the ambience of a country town.</li>
          </ul>

        </Card>
      </div>
      <h3>Progress</h3>
      <div className={"Row"} style={{ display: "flex", flexDirection: "column" }}>
        <Card title={"Progress bar"}>
          <ControlledProgress value={50} />
        </Card>
        <Card title={"Animated progress bar"}>
          <Progress value={progressValue} label />
        </Card>
        <Card title={"Different statuses of progress bars"}>
          <Progress value={62} status={"finished"} label style={{ marginBottom: 20 }} />
          <Progress value={62} status={"paused"} label />

        </Card>

        <Card title={"Trigger an action when finished."}>
          Increment the value to 100%.
          <ControlledProgress value={90} onFinish={() => alert("finished")} />
        </Card>
      </div>

      <h3>Palette</h3>
      <Card title={"Palette"} style={{width: "100%"}}>
      <Palette />
      </Card>
    </div >
  );
}
