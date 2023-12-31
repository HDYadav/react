import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
 

const Applayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body />
    </div>
  );
};

const rootx = ReactDOM.createRoot(document.getElementById("root"));

rootx.render(<Applayout />);
