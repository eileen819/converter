import { useState } from "react";

export default function CelToFah() {
  const [amount, setAmount] = useState("");
  const [inverted, setInverted] = useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => {
    setAmount(0);
  };
  const onInverted = () => {
    reset();
    setInverted((cur) => !cur);
  };
  return (
    <div className="converter-wrap">
      <div className="converter-label">
        <label htmlFor="celsius">Celsius</label>
        <input
          value={inverted ? ((amount - 32) * (5 / 9)).toFixed(2) : amount}
          onChange={onChange}
          id="celsius"
          type="number"
          placeholder="Celsius °C"
          disabled={inverted}
        />
      </div>
      <div className="converter-label">
        <label htmlFor="fahrenheit">Fahrenheit</label>
        <input
          value={inverted ? amount : amount * (9 / 5) + 32}
          onChange={onChange}
          id="fahrenheit"
          type="number"
          placeholder="Fahrenheit °F"
          disabled={!inverted}
        />
      </div>
      <div className="converter-btn">
        <button onClick={reset}>Reset</button>
        <button onClick={onInverted}>
          {inverted ? "Turn Back" : "Invert"}
        </button>
      </div>
    </div>
  );
}
