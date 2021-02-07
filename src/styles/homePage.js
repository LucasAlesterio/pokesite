import styled,{keyframes} from 'styled-components';

export const LinkConteiner = styled.div`
    justify-content:space-around;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    `;
const rotate = keyframes`
    0%{
        transform: rotate(0deg);
    }
    20%{
        transform: rotate(30deg);
    }
    40%{
        transform: rotate(100deg);
    }
    80%{
        transform: rotate(300deg);
    }
    100%{
        transform: rotate(360deg);
    }
`;
const reverseRotate = keyframes`
    0%{
        transform: rotate(360deg);
    }
    20%{
        transform: rotate(300deg);
    }
    60%{
        transform: rotate(100deg);
    }
    80%{
        transform: rotate(30deg);
    }
    100%{
        transform: rotate(0deg);
    }
`;
const resize = keyframes`
    from{
        transform: scale(1);
    }
    to{
        transform: scale(1.5);
    }
`;
const reverseResize = keyframes`
    from{
        transform: scale(1.5);
    }
    to{
        transform: scale(1);
    }
`;
export const ItemLink = styled.a`
    border-radius: 20px;
    border: ${(props)=>props.theme.colors.secondary} solid 5px;
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    animation: ${reverseResize} 0.5s both;
    transition: opacity 0.2s;
    & img{
        animation: ${reverseRotate} 0.5s linear;
    }
    &:hover img{
        animation: ${rotate} 0.5s linear;
    }
    &:hover{
        animation: ${resize} 0.5s both;
        cursor: pointer;
    }
    &:active{
        opacity: 0.2;
    }
`;
export const Title = styled.h2`
    font-family: 'Press Start 2P', cursive;
    color: ${({theme})=>theme.colors.secondary};
    text-align: center;
    margin: 0;
    `;
export const ContainerImage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    >img{
        width: 120px;
        height: 120px;
    }
`;