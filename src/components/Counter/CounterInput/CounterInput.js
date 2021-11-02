import styled from 'styled-components';

const StyledCounterInput = styled.div`
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
`

function CounterInput(props) {
    return (
        <StyledCounterInput>
            <input 
                type="number"
                onChange={props.changed}
                placeholder="Masukkan angka"
            />
        </StyledCounterInput>
    )
}

export default CounterInput;