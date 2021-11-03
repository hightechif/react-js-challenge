import { useState } from "react";
import TodoItem from "../components/TodoItem"
import styled from "styled-components";

const StyledInput = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    input, button {
        margin-top: 20px;
        font-size: 20px;
    }
    button {
        margin-left: 10px;
    }
    input[type=text] {
        margin-right: 10px;
    }
    input[type=text]:focus {
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

    const handleSubmit = (event) => {
        setId(id+1);
        setTodos([...todos, {
                id: id,
                text: text,
                completed: false
            }]);
        setText("");
        event.preventDefault(); // Khusus untuk onSubmit agar tidak dianggap dilempar ke url
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
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <input id="text-input" type="text" value={text} onChange={(event) => onChangeHandler(event)} placeholder="write todos"/>
                        <input id="submit" type="submit" value="Submit"/>
                    </form>
                    <button onClick={deleteHandler}>Clear</button>
                </StyledInput>
            </div>
        </div>
    )
}

export default Challenge05;
