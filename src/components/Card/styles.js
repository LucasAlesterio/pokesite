import styled,{keyframes} from 'styled-components'

const fadein = keyframes`
    from{
        opacity: 0;
        transform: translateY(-100%);
    }
    to{
        opacity: 1;
        transform: translateY(0);
    }
`;
const focusCard = keyframes`
    from{
        transform: scale(1);
    }
    to{
        transform: scale(1.1);
    }
`;
const unFocusCard = keyframes`
    from{
        opacity: 1;
        transform: scale(1.1);
    }
    to{
        opacity: 1;
        transform: scale(1);
    }
`;

export const CardContainer = styled.a`
    width: 18%;
    height: 250px;
    margin: 1% 0;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: ${({animate})=> animate ? 0 : 1 };
    animation: ${({animate})=>
        animate ? fadein : unFocusCard
        } 0.3s forwards ${({animate,delay})=>  animate && delay };
    //background-image: linear-gradient(135deg, rgb(0,0,255), rgb(255, 0, 255));
    background-image: linear-gradient(135deg, ${({theme})=>(theme.colors.gradient1)},${({theme})=>(theme.colors.gradient2)});
    &:hover{
        cursor: pointer;
        opacity: 1;
        z-index:2;
        animation: ${focusCard} 0.3s forwards;
    }
    @media(max-width: 800px) {
        width: 200px;
    }
    @media(max-width: 450px) {
        width: 100%;
    }`;

export const CardMain = styled.div`
    display: flex;
    width: 95%;
    height: 95%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({theme})=>theme.colors.primary};
    border-radius: 10px;
`;
export const Title = styled.h3`
    color: #FFFFFF;
    text-align: center;
    font-size: 80%;
    font-family: 'Press Start 2P', cursive;
`;
