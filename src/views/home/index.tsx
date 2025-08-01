import { useInfinitePokemonList } from '@/services/get-pokemons';
import { useCallback, useEffect, useRef, useState } from 'react';
import PokemonCard from '@/components/pokemon-card';
import PokemonDetails from '@/components/pokemon-details';
import S from './styled';
import Loading from '@/components/loading';

const Home = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>(0);
  const wrappedElementRef = useRef<HTMLElement>(undefined);

  const {
    data: pokemons,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfinitePokemonList();

  const loadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

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
      {isFetchingNextPage && (<Loading />)}
    </S.PokemonListContainer>
  );
};

export default Home;
