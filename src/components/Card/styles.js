import styled from 'styled-components'

export const CardContainer= styled.a`
    width: fit-content;
    border: red solid 1px;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;

    &:hover{
        cursor: pointer;
        border: blue solid 1px;
    }
`;
export const Title = styled.h3`
    color:aliceblue;
    text-align: center;
`;