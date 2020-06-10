
import React from 'react';
import ReactDOM from 'react-dom';

const header = (
    <h1>My TODO-LIST</h1>
);




const Todo = () => {
    return (
        <div className="col-9">
            <h2>H2 text</h2>
            <input type="text" size="10"/>
            <button>Add</button><br/>
            <input id="input1" type="radio"/><label htmlFor="input1">text 1</label>
            <br/>
            <input id="input2" type="radio"/><label htmlFor="input2">text 2</label>
            <br/>
            <input id="input3" type="radio"/><label htmlFor="input3">text 3</label>
            <br/>
        </div>
    );
}




const List = () => {
    return (
        <div className="col-3">
            <h2>H2 text</h2>
            <input type="text" size="10"/>
            <br/>
            <input id="input1.1" type="checkbox"/><label htmlFor="input1.1">text 1.1</label>
            <br/>
            <input id="input2.2" type="checkbox"/><label htmlFor="input2.2">text 1.2</label>
            <br/>
            <input id="input3.3" type="checkbox"/><label htmlFor="input3.3">text 1.3</label>
            <br/>
        </div>
    );
}




const App = () => {
    return (
        <div className="container">
           <div className="row justify-content-center">
               {header}
            </div>
            <div className="row">
                <Todo/>
                <List/>
           </div>
        </div>
    )
}

ReactDOM.render(<App/> , document.getElementById("root"));