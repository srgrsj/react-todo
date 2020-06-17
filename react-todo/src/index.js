import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";
import Todo from "./components/Todo"
import List from "./components/List"

const dataTodo = [
    {label: "text", important: false},
    {label: "text1", important: false},
    {label: "text2", important: false},
    {label: "text3", important: false},
];

const dataList = [
    {label: "text1.0", important: false},
    {label: "text1.1", important: false},
    {label: "text1.2", important: false},
    {label: "text1.3", important: false}
];
const header = <h1>My TODO-List</h1>;

const App = () => {
    return(
        <div className="containter">
            {header}
            <div className="row justify-content-center">
                <div id="todo" className="col-3"><Todo dataTodo={dataTodo}/></div>
                <div className="col-1"></div>
                <div id="list" className="col-3"><List dataList={dataList}/>
                </div>
            </div>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById("root"));