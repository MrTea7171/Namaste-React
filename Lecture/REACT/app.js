const root = ReactDOM.createRoot(document.getElementById("root"));

//Example 1 - Creating an React Element
// const helloWorld = React.createElement("h2", {}, "Hello World From React");

//Exapmple 2 - Adding attributies to an Element
// const helloWorld = React.createElement("h2", {id:'heading'}, "Hello World From React");

//Example 3 - Creating an element with child elements
// const helloWorld = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("p", { id: "child" }, "This is a Child Div")
//   )
// );

//Example 4 - Creating an element with multiple child elements
const helloWorld = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("p", { id: "child" }, "This is a Child Div 1")
  ),
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("p", { id: "child" }, "This is a Child Div 2")
  ),
]);

root.render(helloWorld);
