import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./Navbar";
const root = ReactDOM.createRoot(document.getElementById("root"));

// const helloWorld = React.createElement("div", { class: "title" }, [
//   React.createElement("h1", { class: "title" }, "Heading 1"),
//   React.createElement("h2", { class: "title" }, "Heading 2"),
//   React.createElement("h3", { class: "title" }, "Heading 3"),
// ]);

// const helloWorld = (
//   <div className="title">
//     <h1>Heading 1</h1>
//     <h2>Heading 2</h2>
//     <h3>Heading 3</h3>
//   </div>
// );

const Heading = () => {
  return (
    <React.Fragment>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
    </React.Fragment>
  );
};

const HelloWorld = () => {
  return (
    <div className="title">
      <Heading />
    </div>
  );
};

root.render(<Navbar />);
