import React from 'react';



const List = ({dataList})=>{
    const el = dataList.map((item, id)=>{
        return(
            <div>
                <input id={"ch"+id} type="checkbox"/><label className="pl-2" htmlFor={"ch"+id}>{item.label}</label><br/>
            </div>
        )
    });



    return (
        <div className="p-2">
            <h2 id="borderHeader">СheckList</h2>
            <input type="text" size="15"/>
            <button>Add</button><br/>
            {el}
        </div>
    );
}

export default List;