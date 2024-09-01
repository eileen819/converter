import { useState } from "react";

export default function KmToMiles() {
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
        <label htmlFor="Km">KM</label>
        <input
          value={inverted ? amount * 1.609 : amount}
          onChange={onChange}
          id="Km"
          type="number"
          placeholder="KM"
          disabled={inverted}
        />
      </div>
      <div className="converter-label">
        <label htmlFor="miles">Miles</label>
        <input
          value={inverted ? amount : (amount / 1.609).toFixed(4)}
          onChange={onChange}
          id="miles"
          type="number"
          placeholder="Miles"
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
