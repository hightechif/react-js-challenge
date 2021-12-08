import { useState } from "react";
import TodoItem from "../../components/TodoItem"
import styled from "styled-components";

const StyledTodo = styled.div`
    margin: 0 0;
    padding: 0 0;
    .todo-list {
        margin: 10px auto;
        padding: 10px 10px;
        width: 90%;
        form {
            margin: 0 auto;
        }
    }
`

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
        border: 2px solid;
        border-color: darkgray;
        border-radius: 15px;
        margin-right: 10px;
        padding-left: 10px;
    }
    input[type=text]:focus {
        outline: 0;
    }
    @media screen and (max-width: 768) {
        input, button {
            margin-top: 2px;
            font-size: 2px;
        }
        input[type=text] {
            margin: 0 0;
            padding: 0 0;
        }
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
        event.preventDefault(); // Khusus untuk onSubmit agar tidak dianggap dilempar ke url
        if (text.length > 0) {
            setId(id+1);
            setTodos([...todos, {
                    id: id,
                    text: text,
                    completed: false
                }]);
            setText("");
        }
    }

    const deleteHandler = () => {
        setTodos(todos.filter(el => {
            return el.completed === false;
        }))
    }
    
    return (
        <StyledTodo className="challenge05">
            <div className="todo-list">
                <StyledInput>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <input id="text-input" type="text" value={text} onChange={(event) => onChangeHandler(event)} placeholder="write todos"/>
                        <button id="submit" type="submit">Submit</button>
                        <button onClick={deleteHandler}>Clear</button>
                    </form>
                </StyledInput>
                {todos.map(item => <TodoItem key={item.id} item={item} onChange={() => onCheckHandler(item.id)}/>)}
            </div>
        </StyledTodo>
    )
}

export default Challenge05;
