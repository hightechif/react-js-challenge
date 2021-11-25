import { useEffect, useRef, useState } from 'react';
import CounterDisplay from './CounterDisplay/CounterDisplay';
import CounterButton from './CounterButton/CounterButton';
import CounterInput from './CounterInput/CounterInput';
import styled from 'styled-components';
import randomColor from 'randomcolor';

const StyledCounter = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    button {
        color: darkblue;
        border: 2px solid lightblue;
        padding: 5px;
        border-radius: 15px;
        margin: 10px;
    }
`

const Counter = () => {
    const [ count, setCount ] = useState(0);
    const [ quota, setQuota ] = useState(5);
    const [ results, setResults ] = useState([]);
    const [ color, setColor ] = useState('#FFC0CB');

    const counterChangeHandler = (action, value = 1) => {
        switch(action) {
            case "tambah":
                return setCount(count+value);
            case "kurang":
                return setCount(count-value);
            default:
                break;
        }
    }

    const onQuotaChangeHandler = (event) => {
        return setQuota(event.target.value || 5);
    }

    const storeHandler = () => {
        return setResults(results.concat({
            id: new Date().getTime(),
            value:count
        }))
    }

    const deleteHandler = (id) => {
        return setResults(results.filter((el) => el.id !== id));
    }

    // Random color generator with ComponentDidUpdate
    const mounted = useRef();
    useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount logic
            mounted.current = true;
        } else {
            // do componentDidUpdate logic
            const newColor = randomColor();
            setColor(newColor);
        }
    }, [count])

    return (
        <StyledCounter>
            <CounterDisplay value={count} color={color}/>
            <CounterButton 
                label="+" 
                clicked={() => counterChangeHandler("tambah")}
            />
            <CounterButton 
                label="-" 
                clicked={() => counterChangeHandler("kurang")}
            />
            <CounterButton
                label={`Tambah ${quota}`}
                clicked={() => counterChangeHandler("tambah", parseInt(quota, 10))}
            />
            <CounterButton 
                label={`Kurang ${quota}`}
                clicked={() => counterChangeHandler("kurang", quota)}
            />
            <CounterInput changed={(event) => onQuotaChangeHandler(event)}/>
            <button onClick={storeHandler}>Simpan Data</button>
            <p>Klik angka untuk menghapus data</p>
            <ul>
                {results.map((result) => {
                    return (
                        <li key={result.id} 
                            onClick={() => deleteHandler(result.id)}
                        >
                            {result.value}
                        </li>
                    )
                })}
            </ul>
        </StyledCounter>
    )
}

export default Counter;
