import { Bar, Name, NumberValeu,Container } from './styles';
export function Stats({name,value,width,height,size}){
    return(
        <>
        <Name>{name}:</Name>
        <Container width={width} height={height}>
            <NumberValeu size={size} width={width} height={height}>{value}</NumberValeu>
            <Bar width={width} height={height} value={value}>
                <div/>
            </Bar>
        </Container>
        </>
    );
}