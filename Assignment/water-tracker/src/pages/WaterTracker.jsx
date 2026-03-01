import { useState, useEffect, useCallback, memo } from "react";
import "./WaterTracker.css";

const CounterDisplay = memo(({ count, goal }) => {
  return (
    <div className="counter-display">
      <p className="counter-number">{count}</p>
      <p className="counter-label">of {goal} glasses</p>
      {count >= goal && (
        <p className="goal-reached">Goal Reached!</p>
      )}
    </div>
  );
});

const WaterTracker = () => {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("waterCount");
    return saved ? parseInt(saved) : 0;
  });

  const [goal] = useState(8);

  useEffect(() => {
    localStorage.setItem("waterCount", count);
  }, [count]);

  const handleAdd = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleRemove = useCallback(() => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div className="tracker-container">
      <h2 className="tracker-title">Daily Water Intake</h2>

      <CounterDisplay count={count} goal={goal} />

      <div className="tracker-buttons">
        <button className="tracker-btn add" onClick={handleAdd}>+</button>
        <button className="tracker-btn remove" onClick={handleRemove}>–</button>
        <button className="tracker-btn reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default WaterTracker;
