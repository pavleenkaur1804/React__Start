/**
 * 
 * <div id="parent">
 * <div id="child">
 * <h1>I'm h1 tag</h1>
 * <h2>I'm h2 tag</h2>
 * </div>
 * </div>
 * ReactElement(Object) => HTML(Browser understands)
 * For Nested Structure Create an array of children
 */


const parent = React.createElement("div", {
    id:"parent"
},React.createElement("div", {
    id:"child"
},[React.createElement("h1", {
   
},"I am an h1 tag"),React.createElement("h2", {
   
},"I am an h2 tag")]))

// Jsx




const heading = React.createElement("h1", {
    id:"heading", xyz:"abc"
}, "Hello World");

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);