import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { Container } from '../../styles/pokedex';
import { Name } from '../../styles/pokemon';
import '../../components/type';
import {Type} from  '../../components/type'
import { Stats } from '../../components/stats'
function Poke({pokemon}) {
    const router = useRouter()
    if (router.isFallback) {
        return <div style={{color:'white'}}>Loading...</div>
    }
    const id = router.query.id;
    //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
    //https://cdn.traction.one/pokedex/pokemon/${router.query.id}.png
    return(
        <Container >
            <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt={id}
            width={150}
            height={150}
            />
            <Name>Sprites:</Name>
            {pokemon.sprites.front_female && 
            <Name>Male:</Name>
            }
            {pokemon.sprites.front_default && <img
            src={pokemon.sprites.front_default}
            alt={'front_default'}/>}
            {pokemon.sprites.back_default && 
            <img src={pokemon.sprites.back_default} 
            alt='back_default'/>}
            {pokemon.sprites.front_shiny&& 
            <img src={pokemon.sprites.front_shiny} 
            alt='front_shiny'/>}
            {pokemon.sprites.back_shiny && 
            <img src={pokemon.sprites.back_shiny} 
            alt='back_shiny'/>}
            {pokemon.sprites.front_female && 
            <Name>Female:</Name>
            }
            {pokemon.sprites.front_female && 
            <img src={pokemon.sprites.front_female} 
            alt='front_female'/>}
            {pokemon.sprites.back_female && 
            <img src={pokemon.sprites.back_female} 
            alt='back_female'/>}
            {pokemon.sprites.front_shiny_female && 
            <img src={pokemon.sprites.front_shiny_female} 
            alt='front_shiny_female'/>}
            {pokemon.sprites.back_shiny_female && 
            <img src={pokemon.sprites.back_shiny_female} 
            alt='back_shiny_female'/>}

            <Name>Drean world:</Name>
            {pokemon.sprites.other.dream_world.front_default &&
            <img src={pokemon.sprites.other.dream_world.front_default} 
            alt='drean world'/>
            }
            {pokemon.sprites.other.dream_world.front_female &&
            <img src={pokemon.sprites.other.dream_world.front_female} 
            alt='drean world'/>
            }
            <Name>{pokemon.name}</Name>
            <Name>Types:</Name>
            {pokemon.types.map((type)=>(
                <Type type={ type.type.name}/>
            ))}

            <Name>Weight:</Name>
            <Name>{pokemon.weight/10} Kg</Name>

            <Name>height:</Name>
            <Name>{pokemon.height/10} m</Name>

            <Name>Stats:</Name>
            {pokemon.stats.map((stat)=>(
                <Stats
                size={20}
                name={stat.stat.name}
                value={stat.base_stat}
                width={200}
                height={20}
                />
            ))}
            <Name>Moves:</Name>
            {pokemon.moves.map((move)=>(
                <>
                <h4 style={{color:'#C2C2C2'}}>{move.move.name}</h4>
                {move.version_group_details.map((version)=>(
                    <>
                    {/* level learned */}
                    <p style={{color:'red'}}>{version.level_learned_at}</p>
                    {/* method learned */}
                    <p style={{color:'blue'}}>{version.move_learn_method.name}</p>
                    {/* group name */}
                    <p style={{color:'green'}}>{version.version_group.name}</p>
                    </>
                ))}
                </>
            ))}

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
    const numberPoke =params.id
    const {data} = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${numberPoke}`
    )
    return {
        props: {
            pokemon:data
        },
    }
}
export default Poke;