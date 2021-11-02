import { useState } from 'react';
import CounterDisplay from './CounterDisplay/CounterDisplay';
import CounterButton from './CounterButton/CounterButton';
import CounterInput from './CounterInput/CounterInput';
import styled from 'styled-components';

const StyledCounter = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
`

const Counter = () => {
    // State
    const [ count, setCount ] = useState(5);
    const [ quota, setQuota ] = useState(5);
    const [ results, setResults ] = useState([]);

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
        return setQuota(event.target.value);
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

    return (
        <StyledCounter>
            <CounterDisplay value={count}/>
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
