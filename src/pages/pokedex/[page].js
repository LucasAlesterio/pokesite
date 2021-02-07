import axios from 'axios';
import { useRouter } from 'next/router'
import Card from '../../components/Card';
import { Container, List, ButtonContainer } from '../../styles/pokedex';

function Home({pokedex}) {
  const router = useRouter()
  if (router.isFallback) {
    return <Container >Loading...</Container>
  }
  function nextPage(){
    router.push(`/pokedex/${parseInt(router.query.page) + 1}`);
  }
  function previousPage(){
    if(router.query.page > 1){
      router.push(`/pokedex/${parseInt(router.query.page) - 1}`);
    }
  }
  return (
    <Container>
      <Container>
        <List>
          {/* Color => 0 to 255 */}
          {pokedex.map((pokemon,index)=>{
            return(
              <Card 
              key={index}
              page={router.query.page} 
              index={index} 
              name={pokemon.name}
              href='/pokemon/1'
              delay={`${index * 0.2}s`}
              color={(index/20)*255}
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
