import { useState } from "react";

const Button = ({ onClick, children, isDisable, color }) => {
  return (
    <button
      className="banana"
      style={{
        background: color,
        color: "white",
      }}
      onClick={onClick}
      disabled={isDisable}
    >
      {children}
    </button>
  );
};

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button color="red" onClick={() => setCount(count + 1)}>
        +
      </Button>
      <p>{count}</p>
      <Button
        color="green"
        onClick={() => setCount(count - 1)}
        isDisable={count <= 0}
      >
        -
      </Button>
    </div>
  );
}

export default App;
