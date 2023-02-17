import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import Content from "./Content";
import Total from "./Total";
import Zpp from "./App";

const Tittle = ({ course }) => {
  return <h1>{course}</h1>;
};

const Button = (props) => {
  const [enable, setEnable] = useState(false);
  const className = enable ? "Menu" : "diseable";
  return (
    <Fragment>
      <button
        onClick={() => {
          setEnable(!enable);
          console.log(className);
        }}
        type="button"
      >
        Menu
      </button>
      <div className={className}>
        <p>home</p>
        <p>subject</p>
        <p>help</p>
      </div>
    </Fragment>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Button />
      <Tittle course={course} />
      <Content part={part1} excercises={exercises1} />
      <Content part={part2} excercises={exercises2} />
      <Content part={part3} excercises={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
      <Zpp />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
