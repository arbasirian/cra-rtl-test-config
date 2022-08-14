import React, { FC, useState } from "react";

import { Counter, CounterButton, CounterWrapper } from "./counter.styles";

type Props = { defaultValue: number; description: string };
const CounterComponent: FC<Props> = ({ defaultValue, description }) => {
  const [counterValue, setCounterValue] = useState<number>(defaultValue);
  const [step, setStep] = useState<number>(1);

  const handleDecrease = () => setCounterValue(counterValue - step);
  const handleIncrease = () => setCounterValue(counterValue + step);

  return (
    <>
      <div>{description}</div>
      <label>
        Incrementor:
        <input
          type="number"
          value={step}
          onChange={(event) => setStep(+event.target.value)}
        />
      </label>
      <CounterWrapper>
        <CounterButton aria-label="Decrease Counter" onClick={handleDecrease}>
          -
        </CounterButton>
        <Counter style={{ display: "flex" }}>Counter: {counterValue}</Counter>
        <CounterButton aria-label="Increase Counter" onClick={handleIncrease}>
          +
        </CounterButton>
      </CounterWrapper>
    </>
  );
};

export default CounterComponent;
