import React from "react";
import service from "../../services/pokemon.service";

interface IProps {
  id: number;
};

const PokemonDetails = ({ id }: IProps) => {
  const [pokemon, setPokemon] = React.useState<any>();

  React.useEffect(() => {
    if (id !== 0) {
      service.getPokemonById(id).then(setPokemon);
    }
  }, [id]);

  return (
    <>
      <div role="button" aria-label="Back">Back</div>
      <div style={{ backgroundColor: "blue", width: "100%", height: "100%" }}>
        {pokemon?.name}
      </div>
    </>
  );
};

export default PokemonDetails;
