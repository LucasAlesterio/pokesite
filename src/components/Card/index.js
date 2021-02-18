import Image from 'next/image';
import Link from 'next/link';
import { CardContainer, Title, CardMain } from './styles';
import {useState} from 'react'

export default function Card({page,index,name,href,delay}){
    const [animation, setAnimation] = useState(true);
    //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/
    //https://cdn.traction.one/pokedex/pokemon/${((parseInt(page) - 1) * 20) + index + 1}.png`
    return(
        <Link key={name} href={href}>
            <CardContainer delay={delay} animate={animation} onMouseEnter={()=>setAnimation(true)} onMouseLeave={()=>setAnimation(false)}  >
                <CardMain>
                    <Image 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${((parseInt(page) - 1) * 20) + index + 1}.png`}
                    alt={name}
                    width={150}
                    height={150}
                    />
                    <Title>{name}</Title>
                </CardMain>
            </CardContainer>
        </Link>
    );
}