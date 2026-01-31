/*

        <div id="parent">
                <div id="child">
                        <h1>I am h1 tag</h1>
                        <h2>I am h2 tag</h2>
                </div>
        </div>

        ReactElement(Object)=> HTML(browser understands


*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "I am h3 tag"),
    React.createElement("h4", {}, "I am h4 tag"),
  ]),
]);

console.log(parent);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React",
);

console.log(heading); // just an object as of now.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // heading object now goes and becomes a tag (h1)
