import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import React, {useState} from "react";

const AddTodo = ({onAddToDo}) => {
    const emptyText = {
        id:0,
        todo:""
    }
    let [toDo, setToDo] = useState();

    function toDoPublish() {
        console.log(toDo);
        onAddToDo(toDo);
        setToDo(emptyText);
    }
    return (
        <>
            <p className="p-m-2 underline font-bold text-teal-700" >Add New Item</p>
            <InputText className="p-m-2" id="inp"
                       onChange={(e) => {setToDo({...toDo, todo: e.target.value})}}/>
            <br/>
            <Button label="Add" onClick={toDoPublish} className="p-m-2 p-button-rounded bg-teal-200" />
        </>
    );
}

export default AddTodo