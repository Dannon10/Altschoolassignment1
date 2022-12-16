import "./styles.css";
import { useState } from "react";

export default function App() {
  const [calc, setCalc] = useState("");
  const operators = ["/", "*", "-", "+", "."];

  const digits = (value) => {
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
  };
  const equateCalc = () => {
    setCalc(eval(calc).toString());
  };
  const del = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  return (
    <div className="container">
      <div className="display">{calc || "0"}</div>
      <button onClick={del} className="digits">
        Del
      </button>
      <button onClick={() => setCalc("")} className="ac">
        AC
      </button>
      <button onClick={() => digits("/")} className="operators">
        /
      </button>
      <button onClick={() => digits("7")} className="digits">
        7
      </button>
      <button onClick={() => digits("8")} className="digits">
        8
      </button>
      <button onClick={() => digits("9")} className="digits">
        9
      </button>
      <button onClick={() => digits("*")} className="operators">
        *
      </button>
      <button onClick={() => digits("6")} className="digits">
        6
      </button>
      <button onClick={() => digits("5")} className="digits">
        5
      </button>
      <button onClick={() => digits("4")} className="digits">
        4
      </button>
      <button onClick={() => digits("-")} className="operators">
        -
      </button>
      <button onClick={() => digits("3")} className="digits">
        3
      </button>
      <button onClick={() => digits("2")} className="digits">
        2
      </button>
      <button onClick={() => digits("1")} className="digits">
        1
      </button>
      <button onClick={() => digits("+")} className="operators">
        +
      </button>
      <button onClick={() => digits(".")} className="operators">
        .
      </button>
      <button on onClick={() => digits("0")} className="digits">
        0
      </button>
      <button onClick={equateCalc} className="equal">
        =
      </button>
    </div>
  );
}
