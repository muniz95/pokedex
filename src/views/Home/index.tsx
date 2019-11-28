import React from 'react';
import service from '../../services/pokemon.service';
import PokemonCard from '../../components/PokemonCard';
import S from "./styled";

export default () => {
  const [pokemonList, setPokemonList] = React.useState<any[]>([]);
  React.useEffect(() => {
    service.getPokemonList().then(response => setPokemonList(response));
  }, []);
  return (
    <React.Fragment>
      <h4>Home</h4>
      {pokemonList.length}
      <S.PokemonListContainer>
        {pokemonList.map((pokemon) => <PokemonCard {...pokemon} />)}
      </S.PokemonListContainer>
    </React.Fragment>
  );
}