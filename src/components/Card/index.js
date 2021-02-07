import Image from 'next/image';
import Link from 'next/link';
import { CardContainer, Title } from './styles';

export default function Card({page,index,name,href,delay,color}){
    return(
        <Link key={name} href={href}>
            <CardContainer delay={delay} color={color} >
                <Image 
                src={`https://cdn.traction.one/pokedex/pokemon/${((parseInt(page) - 1) * 20) + index + 1}.png`}
                alt={name}
                width={150}
                height={150}
                />
                <Title>{name}</Title>
            </CardContainer>
        </Link>
    );
}