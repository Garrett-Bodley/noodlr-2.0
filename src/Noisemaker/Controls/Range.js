import "./range.css"

const Range = ({ min = 0, max = 100, value = 50, eventHandler }) => {

  return (
    <div className="range-container">
      <input
        min={min}
        max={max}
        className="range"
        value={value}
        type="range"
        onChange={eventHandler}
      />
      <span>{value}</span>
    </div>
  );
};

export default Range;
