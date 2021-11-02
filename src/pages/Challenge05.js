import { useState } from "react";
import TodoItem from "../components/TodoItem"
import styled from "styled-components";

const StyledInput = styled.div`
    input, button {
        margin-top: 20px;
        margin-right: 10px;
        font-size: 20px;
    }
    
    input:focus, button:focus {
        outline: 0;
    }
`

const Challenge05 = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");
    const [id, setId] = useState(0);

    const onChangeHandler = (event) => {
        setText(event.target.value);
    }

    const onCheckHandler = (id) => {
        const newTodos = todos.map((el) => {
            if (el.id === id) {
                el.completed = !el.completed;
            }
            return el;
        })
        setTodos(newTodos);
    }

    const storeHandler = () => {
        setId(id+1);
        setTodos(todos.concat({
            id: id,
            text: text,
            completed: false
        }));
    }

    const deleteHandler = () => {
        setTodos(todos.filter(el => {
            return el.completed === false;
        }))
    }
    
    return (
        <div className="challenge05">
            <div className="todo-list">
                {todos.map(item => <TodoItem key={item.id} item={item} onChange={() => onCheckHandler(item.id)}/>)}
                <StyledInput>
                    <input id="text-input" type="text" onChange={(event) => onChangeHandler(event)} placeholder="write todos"/>
                    <input id="submit" type="submit" onClick={storeHandler}/>
                    <button onClick={deleteHandler}>Clear</button>
                </StyledInput>
            </div>
        </div>
    )
}

export default Challenge05;
