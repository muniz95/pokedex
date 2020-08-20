import React from "react";
import service from "../../services/pokemon.service";
import PokemonCard from "../../components/PokemonCard";
import S from "./styled";
import Loading from "../../components/Loading";

export default () => {
  const [pokemonList, setPokemonList] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const listSizeRef = React.useRef<number>();
  const wrappedElementRef = React.useRef<HTMLElement>();

  const loadMore = React.useCallback(() => {
    setIsLoading(true);
    service.getPokemonList(listSizeRef.current).then((results: any[]) => {
      setPokemonList((l) => [...l, ...results]);
      setIsLoading(false);
    });
  }, []);

  const isBottom = (el: HTMLElement) => {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  };

  const trackScrolling = React.useCallback(() => {
    if (wrappedElementRef.current === undefined) {
      wrappedElementRef.current = document.getElementById(
        "pokemonListContainer"
      ) as HTMLElement;
    }
    if (isBottom(wrappedElementRef.current)) {
      loadMore();
    }
  }, [loadMore]);

  React.useEffect(() => {
    service.getPokemonList().then(setPokemonList);
    document.addEventListener("scroll", trackScrolling);
  }, [trackScrolling]);

  React.useEffect(() => {
    listSizeRef.current = pokemonList.length;
  }, [pokemonList]);

  return (
    <div id="pokemonListContainer">
      <S.PokemonListContainer>
        {pokemonList.map((pokemon) => (
          <PokemonCard {...pokemon} key={pokemon.id} />
        ))}
      </S.PokemonListContainer>
      {isLoading && <Loading />}
    </div>
  );
};
