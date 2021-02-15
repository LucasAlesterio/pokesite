import axios from 'axios';
import { useRouter } from 'next/router'
import Card from '../../components/Card';
import { Container, List, ButtonContainer } from '../../styles/pokedex';

function Home({pokedex}) {
  const router = useRouter()
  if (router.isFallback) {
    return <Container >Loading...</Container>
  }
  const page = parseInt(router.query.page);
  function nextPage(){
    router.push(`/pokedex/${page + 1}`);
  }
  function previousPage(){
    if(page > 1){
      router.push(`/pokedex/${page - 1}`);
    }
  }
  const maxForPage = 20;
  const calcNumberPokedex = 1 + ((page - 1) * maxForPage);
  return (
    <Container>
      <Container>
        <List>
          {pokedex.map((pokemon,index)=>{
            return(
              <Card 
              key={index}
              page={page} 
              index={index} 
              name={pokemon.name}
              href={`/pokemon/${(index + calcNumberPokedex)}`}
              delay={`${index * 0.2}s`}
              />
            )
          })}
        </List>
      </Container>
      <ButtonContainer>
        <button onClick={previousPage}>
          Back
        </button>
        <button onClick={nextPage}>
          Next
        </button>
      </ButtonContainer>
    </Container>

  )
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { page: '1' } },
      { params: { page: '2' } },
      { params: { page: '3' } },
      { params: { page: '4' } },
      { params: { page: '5' } },
      { params: { page: '6' } },
  ],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/?offset=${(parseInt(params.page)-1) * 20}&limit=20`);
  const pokedex = await response.data.results;
  return {
    props: {
      pokedex
    },
  }
}
export default Home;
