import { useState } from "react";

export default function MinToHours() {
  const [amount, setAmount] = useState("");
  const [inverted, setInverted] = useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };
  const reset = () => {
    setAmount("");
  };
  const onInverted = () => {
    reset();
    setInverted((cur) => !cur);
  };
  return (
    <div className="converter-wrap">
      <div className="converter-label">
        <label htmlFor="minutes">Minutes</label>
        <input
          value={inverted ? amount * 60 : amount}
          onChange={onChange}
          id="minutes"
          type="number"
          placeholder="Minutes"
          disabled={inverted}
        />
      </div>
      <div className="converter-label">
        <label htmlFor="hours">Hours</label>
        <input
          value={inverted ? amount : Math.round(amount / 60)}
          onChange={onChange}
          id="hours"
          type="number"
          placeholder="Hours"
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
