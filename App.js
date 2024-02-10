import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement("h1",null, "hix");

console.log(element); //its printing object (DOM)

const heading = <h1>hello</h1>
console.log(heading);

//composing component
const Head = () => (
    <h2>Head from</h2>
)


const Title = () =>{
    return(
        <div>
            <Head/>
            <h1>this is a title</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title/>);