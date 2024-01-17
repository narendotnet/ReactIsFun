import React from "react";
import ReactDOM from "react-dom/client";

// JSX => Babel transpiles t to React.createElement => ReactElement - JS Object => HTMLElement(render)

// React Element
const Title = () => (
  <h1 className="head" tabIndex="5">
    React Is Fun 🚀
  </h1>
);

// React Functional Component - NEW Ex: Component Compositions
const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading"> React Is Fun - Functional Component 🚀</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
