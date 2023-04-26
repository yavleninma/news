import { useState } from "react";

import classes from "./Counter.module.scss";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button className={classes.button} onClick={() => setCount(count + 1)}>
        inc
      </button>
    </div>
  );
}

export default Counter;
