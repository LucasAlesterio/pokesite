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
export const CardContainer = styled.a`
    width: fit-content;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    opacity: 0;
    animation: ${fadein} 0.5s forwards ${({delay})=>delay};
    //background-image: linear-gradient(135deg, rgb(0,0,255), rgb(${({color})=>color}, 0, 255));
    background-image: radial-gradient(ellipse farthest-corner at 60% 60%, rgb(255,0,255), rgb(0, 0, 255)); 
    &:hover{
        cursor: pointer;
    }
`;
export const Title = styled.h3`
    color: #FFFFFF;
    text-align: center;
    font-size: 100%;
    font-family: 'Press Start 2P', cursive;
`;
