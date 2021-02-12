import styled from 'styled-components'

export const Container = styled.div`
    max-width: 100vw;
    background-color: ${(props) => (props.theme.colors.primary)};
    min-height:100vh;
`;
export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`;

export const ButtonContainer = styled.div`
    align-self:center;
    display: flex;
    justify-content:center;
    >button{
        padding:10px;
    }
`;
