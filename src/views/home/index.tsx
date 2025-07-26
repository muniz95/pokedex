import { useCallback, useEffect, useRef, useState } from 'react';
import Loading from '../../components/loading';
import PokemonCard from '../../components/pokemon-card';
import PokemonDetails from '../../components/pokemon-details';
import service from '../../services/pokemon.service';
import S from './styled';

const Home = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>(0);
  const listSizeRef = useRef<number>(0);
  const wrappedElementRef = useRef<HTMLElement>(undefined);

  const loadMore = useCallback(() => {
    setIsLoading(true);
    service.getPokemonList(listSizeRef.current).then((results: any[]) => {
      setPokemonList((l) => [...l, ...results]);
      setIsLoading(false);
    });
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
    service.getPokemonList().then(setPokemonList);
    document.addEventListener('scroll', trackScrolling);
  }, [trackScrolling]);

  useEffect(() => {
    listSizeRef.current = pokemonList.length;
  }, [pokemonList]);

  function handleClick(id: number) {
    console.log('clicked', id);
    setCurrentId(id);
    setShowDetails(true);
    setTimeout(() => {
      setShowDetails(false);
    }, 3000);
  }

  return (
    <div id="pokemonListContainer">
      {showDetails ? (
        <PokemonDetails id={currentId} />
      ) : (
        <S.PokemonListContainer>
          {pokemonList.map((pokemon) => (
            <PokemonCard {...pokemon} key={pokemon.id} click={handleClick} />
          ))}
        </S.PokemonListContainer>
      )}
      {isLoading && <Loading />}
    </div>
  );
};

export default Home;
