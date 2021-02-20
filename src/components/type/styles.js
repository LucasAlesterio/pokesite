import styled from 'styled-components';

export const Tag = styled.div`
    border: 3px ${({color})=>color} solid;
    display: flex;
    border-radius: 10px;
    width: fit-content;
    padding: 0 5px;
    & > h3{
        font-family: 'Press Start 2P', cursive;
        color: ${({color})=>color};
        padding-left: 10px;
    }
`;