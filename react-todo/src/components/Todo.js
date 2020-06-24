import React, {Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataTodo: this.props.dataTodo
        }
    }

    setImportant = (event) => {     
        const inputElement = event.target.parentNode.childNodes[0];

        const id = inputElement.id.replace("rd", "");

        this.setState((state)=>{
            const newDataTodo = state.dataTodo;
            newDataTodo[id].important = !newDataTodo[id].important;
            return {
                newDataTodo
            }
        })

        if(this.state.dataTodo[id].important){
            inputElement.nextElementSibling.classList.add("important");
        }
        else{
            inputElement.nextElementSibling.classList.remove("important");
        }
    }

    setCheck = (event) => {     
        const inputElement = event.target.parentNode.childNodes[0];

        const id = inputElement.id.replace("rd", "");

        this.setState((state)=>{
            const newDataTodo = state.dataTodo;
            newDataTodo[id].checked = !newDataTodo[id].checked;
            return {
                newDataTodo
            }
        })

        if(this.state.dataTodo[id].checked){
            inputElement.nextElementSibling.classList.add("checked");
        }
        else{
            inputElement.nextElementSibling.classList.remove("checked");
        }
    }

    addTodo = (event)=>{
        
    }

    render(){
        const el = this.state.dataTodo.map((item, id)=>{
            return(
                <div className="todo-list d-block row">
                        <input className="col-1" type="radio" id={"rd"+id}  name="radio" />
                        <label className="col-9 pl-1" htmlFor={"rd"+id}>{item.label}</label>
                        <i onClick={this.setCheck.bind(this)} className="fa fa-check-square"></i>
                        <i  className="fa fa-trash" aria-hidden="true"></i>
                        <i onClick={this.setImportant.bind(this)} className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                </div>
            )
        });

        return (
            <div className="p-2" >
                <h2>TODO Category</h2>

                <form class="form-inline">
                    <div class="form-group mx-sm-1 mb-3"><input type="text" class="form-control" id="addTodo" placeholder="Type here"/></div>
                    <button type="button" onClick={this.addTodo.bind(this)} class="btn btn-primary mb-3">Add</button></form>
                {el}              
            </div>
        );
    }
}

export default Todo;