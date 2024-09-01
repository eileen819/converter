import { useState } from "react";
import KmToMiles from "./components/KmToMiles";
import MinToHours from "./components/MinToHours";
import CelToFah from "./components/CelToFah";
import "./reset.css";
import "./styles.css";

export default function App() {
  const [index, setIndex] = useState("0");
  const onChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <>
      <div className="inner">
        <div className="title">Converter !</div>
        <div className="container">
          <div className="select-box">
            <select value={index} onChange={onChange}>
              <option value="0">Select Converter</option>
              <option value="1">Minutes To Hours</option>
              <option value="2">Km To Miles</option>
              <option value="3">Celsius To Fahrenheit</option>
            </select>
            <div className="select__arrow"></div>
          </div>
          <div className="converter">
            {index === "0" ? (
              <div className="select-message">Select Converter!</div>
            ) : null}
            {index === "1" ? <MinToHours /> : null}
            {index === "2" ? <KmToMiles /> : null}
            {index === "3" ? <CelToFah /> : null}
          </div>
        </div>
      </div>
    </>
  );
}
