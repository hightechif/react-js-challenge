import styled from 'styled-components';

const StyledCounterInput = styled.div`
    width: 50%;
    padding: 12px 20px;
    margin: 8px auto;
    box-sizing: border-box;
`

function CounterInput(props) {
    return (
        <StyledCounterInput>
            <label htmlFor="">Atur nilai count: </label>
            <input 
                type="number"
                onChange={props.changed}
                placeholder="masukkan angka"
            />
        </StyledCounterInput>
    )
}

export default CounterInput;