import React from 'react';
import service from '../../services/pokemon.service';
import PokemonCard from '../../components/PokemonCard';
import S from "./styled";

export default () => {
  const [pokemonList, setPokemonList] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const loadMore = () => {
    setIsLoading(true);
    service.getPokemonList(pokemonList.length).then((results: any[]) => {
      setPokemonList([...pokemonList, ...results]);
      setIsLoading(false);
    });
  };
  React.useEffect(() => {
    service.getPokemonList().then(setPokemonList);
  }, []);
  return (
    <React.Fragment>
      <S.PokemonListContainer>
        {pokemonList.map((pokemon) => <PokemonCard {...pokemon} key={pokemon.id} />)}
      </S.PokemonListContainer>
      <button id="loadMore" onClick={loadMore} disabled={isLoading}>Load more</button>
    </React.Fragment>
  );
}