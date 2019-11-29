import React from "react";
import S from './styled';

interface IProps {
  name: string;
  sprites: {
    front_default: string
  };
}

export default (props: IProps) =>
  <S.PokemonCardContainer>
    <S.PokemonCardBody>
      <img src={props.sprites.front_default} alt="" width={96} height={96} />
      {props.name}
    </S.PokemonCardBody>
  </S.PokemonCardContainer>;
