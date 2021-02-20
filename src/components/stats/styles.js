import styled from 'styled-components';

export const Name = styled.h4`
    color: ${({theme})=>theme.colors.secondary};
`;
export const Bar = styled.div`
    border: 3px red solid;
    height: ${({height})=>`${height}px`};
    border-radius: 10px;
    width: ${({width})=>`${width}px`};
    overflow: hidden;
    & > div{
        background-color: green;
        height: 100%;
        width: ${({value})=>`${value/2.55}%`};
    }
`;
export const NumberValeu = styled.h4`
    color: ${({theme})=>theme.colors.secondary};
    font-size: ${({size})=>`${size}px`};
    width: ${({width})=>`${width}px`};
    display: flex;
    justify-content: center;
    position: relative;
    left:${({width})=>`${width}px`};
`;

export const Container = styled.div`
    display: flex;
    width: fit-content;
    height: ${({height})=>`${height}px`};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    left:${({width})=>`-${width}px`};
`; 
