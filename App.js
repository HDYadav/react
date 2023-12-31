import React from "react";
import ReactDOM from "react-dom/client";


// const parent = React.createElement("div", { id: "parent" },
//    [ React.createElement("div", { id: "child1" }, [
//         React.createElement("h1", {}, "I ma h1 tag"),
//          React.createElement("h2",{},"I ma h2 tag"),
//    ]),
   
//    React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", {}, "I ma h1 tag"),
//          React.createElement("h2",{},"I ma h2 tag"),
//     ])]
// );


const Title = () => (<h1 id="heading" className="head class" tabIndex={1}>This is come from jsx </h1>)

const number = 1000;

const HeadingComponent = () => (
     <div id="container">
          <h2>{number}</h2>
          <Title/>
          <h1 className="header"> This is Functional component </h1>

     </div>
);


const rootx = ReactDOM.createRoot(document.getElementById("root"));

 
rootx.render(<HeadingComponent/>);