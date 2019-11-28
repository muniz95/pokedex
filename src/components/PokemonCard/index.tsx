import React from "react";
import S from './styled';

interface IProps {
  name: string;
}

export default (props: IProps) =>
  <S.PokemonCardContainer>
    <S.PokemonCardBody>{props.name}</S.PokemonCardBody>
  </S.PokemonCardContainer>;
