import { usePokemonList } from '@/services/get-pokemons';
import { useCallback, useEffect, useRef, useState } from 'react';
import PokemonCard from '../../components/pokemon-card';
import PokemonDetails from '../../components/pokemon-details';
import S from './styled';

const Home = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const [currentId, setCurrentId] = useState<number>(0);
  const listSizeRef = useRef<number>(0);
  const wrappedElementRef = useRef<HTMLElement>(undefined);

  const { data: pokemons } = usePokemonList({
    offset,
  });

  const loadMore = useCallback(() => {
    console.log('loadMore', pokemons?.results.length);
    
    listSizeRef.current = pokemons?.results.length || 0;
    setOffset(pokemons?.results.length || 0);
    // service.getPokemonList(listSizeRef.current).then((results: any[]) => {
    //   setPokemonList((l) => [...l, ...results]);
    //   setIsLoading(false);
    // });
  }, []);

  const isBottom = (el: HTMLElement) => {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  };

  const trackScrolling = useCallback(() => {
    if (wrappedElementRef.current === undefined) {
      wrappedElementRef.current = document.getElementById(
        'pokemonListContainer'
      ) as HTMLElement;
    }
    if (isBottom(wrappedElementRef.current)) {
      loadMore();
    }
  }, [loadMore]);

  useEffect(() => {
    // service.getPokemonList().then(setPokemonList);
    document.addEventListener('scroll', trackScrolling);
  }, [trackScrolling]);

  const handleClick = (id: number) => {
    console.log('clicked', id);
    setCurrentId(id);
    setShowDetails(true);
    setTimeout(() => {
      setShowDetails(false);
    }, 3000);
  };

  return (
    <S.PokemonListContainer id="pokemonListContainer">
      {showDetails ? (
        <PokemonDetails id={currentId} />
      ) : (
        pokemons &&
        pokemons.results &&
        pokemons.results.map((pokemon) => (
          <PokemonCard {...pokemon} key={pokemon.id} click={handleClick} />
        ))
      )}
    </S.PokemonListContainer>
  );
};

export default Home;
