/**
 * <div id="parent">
 *  <div id="child1">
 *      <h1>i am h1 tag</h1>
 *      <h2>i am h2 tag</h2>
 *  </div>
 * <div id="child2">
 *      <h1>i am h1 tag</h1>
 *      <h2>i am h2 tag</h2>
 *  </div>
 * 
 * </div>
 * 
 */

// const heading = React.createElement("h1", { id: "heading", xyz: "test" }, "Hello World from Ract");

const parent = React.createElement("div", { id: "parent" },
   [ React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "I ma h1 tag"),
         React.createElement("h2",{},"I ma h2 tag"),
   ]),
   
   React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I ma h1 tag"),
         React.createElement("h2",{},"I ma h2 tag"),
    ])]
);



const rootx = ReactDOM.createRoot(document.getElementById("root"));

 
rootx.render(parent);