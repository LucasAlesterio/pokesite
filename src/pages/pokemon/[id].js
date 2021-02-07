import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router'
import {Container} from '../../styles/pokedex';

function Poke({pokemon}) {
    const router = useRouter()
    if (router.isFallback) {
        return <div style={{color:'white'}}>Loading...</div>
    }
    return(
        <Container >
            <Image
            src={`https://cdn.traction.one/pokedex/pokemon/${router.query.id}.png`}
            alt={router.query.id}
            width={150}
            height={150}
            />
            <img
            src={pokemon.sprites.front_default}
            alt={router.query.id}
            />
            <h1>{pokemon.forms[0].name}</h1>
        </Container>
    )}
export async function getStaticPaths() {
    return {
        paths: [
        { params: { id: '1' } },
        { params: { id: '2' } },
        { params: { id: '3' } },
        { params: { id: '4' } },
        { params: { id: '5' } },
        { params: { id: '6' } },
    ],
        fallback: true,
    }
}
export async function getStaticProps({ params }) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const pokemon = await response.data;
    //console.log(pokemon.forms);
    return {
        props: {
            pokemon
        },
    }
}
export default Poke;