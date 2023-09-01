import "./styles.css";
import React from "react";

export default function App() {
  const number = 4;
  const idx = [];
  for (var i = 0; i < number; i++) {
    idx.push(i);
  }

  function HandleNextImage(event) {
    const carousal = document.getElementById("carousal");
    const width = 0.8 * 0.5 * window.innerHeight;
    if (index == number - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function HandlePreviousImage(event) {
    if (index == 0) {
      setIndex(number - 1);
    } else {
      setIndex(index - 1);
    }
  }

  const [index, setIndex] = React.useState(0);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="carousal-wrapper">
        <div className="carousal-container" id="carousal">
          {idx.map((idx) => {
            return (
              <img
                src={`https://picsum.photos/200?random=1${idx + 1}`}
                key={idx}
                style={{ transform: `translate(-${index * 100}%)` }}
              />
            );
          })}
        </div>
        <div className="carousal-navigation">
          <p onClick={HandlePreviousImage}>{"<<<"}</p>
          <p>{index + 1}</p>
          <p onClick={HandleNextImage}>{">>>"}</p>
        </div>
      </div>
    </div>
  );
}
