import styled from 'styled-components';

const StyledCounterDisplay = styled.div`
    width: 100%;
    background-color: black;
    color: pink;
    font-size: 1.8rem;
    text-align: center;
    padding: 20px 0;
    box-sizing: border-box;
`

function CounterDisplay(props) {
    return (
        <StyledCounterDisplay>
            Current Counter: {props.value}
        </StyledCounterDisplay>
    )
}

export default CounterDisplay;
