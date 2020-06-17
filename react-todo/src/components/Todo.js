import React from 'react';



const Todo = ({dataTodo})=>{
    const el = dataTodo.map((item, id)=>{
        return(
            <div>
                <input id={"rd"+id} type="radio"/><label className="pl-2" htmlFor={"rd"+id}>{item.label}</label><br/>
            </div>
        )
    });



    return (
        <div className="p-2" >
            <h2>TODO Category</h2>
            <input type="text" size="15"/>
            <button>Add</button><br/>
            {el}
        </div>
    );
}

export default Todo;