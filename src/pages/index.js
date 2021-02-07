import Link from 'next/link';
import { Container } from '../styles/pokedex';
import { ItemLink, LinkConteiner, Title, ContainerImage } from '../styles/homePage';
//import Image from 'next/image';
export default function Home() {
    return (
    <Container>
        <LinkConteiner>
            <Link href="/pokedex/1">
                <ItemLink>
                    <ContainerImage>
                        <img src='/images/pokeball.png' alt='pokeball'/>
                    </ContainerImage>
                    <Title>pokedex</Title>
                </ItemLink>
            </Link>
        </LinkConteiner>
    </Container>
    )
}
