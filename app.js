/**
 * <div id="parent">
 *  <div id="child">
 *  <h1>I'm H1 tag</h1>
 *   </div>
 * </div>
 */




const heading = React.createElement(
    "div", 
    {id: "parent"}, 
    [React.createElement("div", {id:"child"},[
     React.createElement("h1", {}, "I'm H1 tag"), 
     React.createElement("h2", {}, "I'm H2 tag")
    ]),
        React.createElement("div", {id:"child"},[
         React.createElement("h1", {}, "I'm H1 tag"), 
         React.createElement("h2", {}, "I'm H2 tag")
        ]),
    ]);
    console.log(parent);   //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);