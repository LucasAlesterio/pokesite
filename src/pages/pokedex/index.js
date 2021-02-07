import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Container } from '../../styles/pokedex';
export default function Poke(){
    const router = useRouter();

    useEffect(()=>{
        router.push('pokedex/1');
    },[])
    return (
    <Container>
        <h2 style={{color:'white'}}>Redirect...</h2>
    </Container>
    )
}