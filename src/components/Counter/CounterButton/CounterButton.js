import styled from 'styled-components';

const StyledCounterButton = styled.div`
    width: 150px;
    padding: 20px;
    box-sizing: border-box;
    margin: 16px;
    border: 1px solid #eee;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    display: inline-block;

    &:hover,
    &:active {
        background-color: #eee;
    }

`

function CounterButton(props) {
    return (
        <StyledCounterButton onClick={props.clicked}>
            {props.label}
        </StyledCounterButton>
    )
}

export default CounterButton;
