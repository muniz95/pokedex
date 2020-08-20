import React from "react";
import service from "../../services/pokemon.service";
import { withRouter } from "react-router-dom";

export default withRouter(({ match }) => {
  const [pokemon, setPokemon] = React.useState<any>();

  React.useEffect(() => {
    service.getPokemonById(match.params.id).then(setPokemon);
  }, [match]);

  return (
    <>
      <div style={{ backgroundColor: "blue", width: "100%", height: "100%" }}>
        {pokemon?.name}
      </div>
    </>
  );
});
